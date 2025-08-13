package com.psytrack.app.controller;

import com.psytrack.app.Stroop.StroopResult;
import com.psytrack.app.Stroop.StroopService;
import com.psytrack.app.Stroop.StroopSession;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/stroop")
public class StroopController {

    private final StroopService service;

    public StroopController(StroopService service) {
        this.service = service;
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
    public String completeSession(@RequestParam String sessionId) {
        service.completeSession(sessionId);
        return "Session completed";
    }

    @GetMapping("/results/{sessionId}")
    public List<StroopResult> getResults(@PathVariable String sessionId) {
        return service.getResultsForSession(sessionId);
    }
}
