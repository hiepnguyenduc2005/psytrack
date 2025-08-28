package com.psytrack.app.controller;

import com.psytrack.app.Stroop.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/stroop")
public class StroopController {

    private final StroopService service;
    private final StroopSessionRepository sessionRepository;
    private final StroopResultRepository resultRepository;

    public StroopController(StroopService service, StroopSessionRepository sessionRepository, StroopResultRepository resultRepository) {
        this.service = service;
        this.sessionRepository = sessionRepository;
        this.resultRepository = resultRepository;

    }

    @PostMapping("/start")
    public StroopSession startSession(@RequestParam String participantId, @RequestParam int numTrials) {
        return service.startSession(participantId, numTrials);
    }

    @PostMapping("/result")
    public StroopResult submitResult(@RequestParam String sessionId, @RequestBody StroopResult result) {
        return service.saveResult(sessionId, result);
    }

    @PostMapping("/cancel")
    public String cancelSession(@RequestParam String sessionId) {
        service.cancelSession(sessionId);
        return "Session cancelled";
    }

    @PostMapping("/complete")
    public ResponseEntity<?> completeSession(@RequestParam String sessionId) {
        Optional<StroopSession> optionalSession = sessionRepository.findById(sessionId);
        if (optionalSession.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Session not found");
        }

        StroopSession session = optionalSession.get();

        session.setEndTime(System.currentTimeMillis());
        session.setStatus("COMPLETED");

        List<StroopResult> results = resultRepository.findBySessionId(sessionId);
        session.setNumTrialsCompleted(results.size());
        sessionRepository.save(session);

        if (results.isEmpty()) {
            return ResponseEntity.ok("No results for this session.");
        }

        long totalTrials = results.size();
        long correctTrials = results.stream().filter(StroopResult::isCorrect).count();
        long missedTrials = results.stream().filter(StroopResult::isMissed).count();
        double accuracy = (double) correctTrials / (totalTrials - missedTrials);

        List<Long> congruentTimes = new ArrayList<>();
        List<Long> incongruentTimes = new ArrayList<>();

        for (StroopResult r : results) {
            if (r.isMissed() || !r.isCorrect()) continue; // only count correct responses
            boolean congruent = r.getTrial().getWord().equals(r.getTrial().getColor());
            if (congruent) {
                congruentTimes.add(r.getReactionTimeMS());
            } else {
                incongruentTimes.add(r.getReactionTimeMS());
            }
        }

        double avgCongruent = congruentTimes.stream()
                .mapToLong(Long::longValue).average().orElse(0.0);
        double avgIncongruent = incongruentTimes.stream()
                .mapToLong(Long::longValue).average().orElse(0.0);

        // Build response
        Map<String, Object> response = new HashMap<>();
        response.put("sessionId", sessionId);
        response.put("participantId", session.getParticipantId());
        response.put("numTrials", totalTrials);
        response.put("missedTrials", missedTrials);
        response.put("correctTrials", correctTrials);
        response.put("accuracy", accuracy);
        response.put("avgCongruentRT", avgCongruent);
        response.put("avgIncongruentRT", avgIncongruent);

        return ResponseEntity.ok(response);
    }

    @GetMapping("/results/{sessionId}")
    public List<StroopResult> getResults(@PathVariable String sessionId) {
        return service.getResultsForSession(sessionId);
    }

    @GetMapping("/results_users/{participantId}")
    public List<StroopSession> getResultsByUser(@PathVariable String participantId) {
        return service.getResultsForParticipant(participantId);
    }
}
