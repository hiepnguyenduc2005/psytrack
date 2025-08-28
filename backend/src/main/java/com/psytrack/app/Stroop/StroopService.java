package com.psytrack.app.Stroop;

import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class StroopService {

    private final StroopResultRepository resultRepo;
    private final StroopSessionRepository sessionRepo;

    public StroopService(StroopResultRepository resultRepo, StroopSessionRepository sessionRepo) {
        this.resultRepo = resultRepo;
        this.sessionRepo = sessionRepo;
    }

    public List<StroopSession> getAllSessions() {
        return sessionRepo.findAll();
    }

    public StroopSession startSession(String participantId, int numTrials) {
        StroopSession session = new StroopSession();
        String sessionId = UUID.randomUUID().toString(); // unique session ID

        session.setId(sessionId);
        session.setParticipantId(participantId);
        session.setStartTime(System.currentTimeMillis());
        session.setNumTrialsRequested(numTrials);
        session.setNumTrialsCompleted(0);
        session.setNumTrialsCorrect(0);
        session.setStatus("IN_PROGRESS");

        sessionRepo.save(session);
        return session;
    }

    public StroopResult saveResult(String sessionId, StroopResult result) {
        result.setSessionId(sessionId); // link result to session
        StroopResult saved = resultRepo.save(result);

        StroopSession session = sessionRepo.findById(sessionId).orElseThrow();
        session.setNumTrialsCompleted(session.getNumTrialsCompleted() + 1);

        if (result.isCorrect()) {
            session.setNumTrialsCorrect(session.getNumTrialsCorrect() + 1);
        }

        sessionRepo.save(session);

        return saved;
    }

    public void cancelSession(String sessionId) {
        StroopSession session = sessionRepo.findById(sessionId).orElseThrow();
        session.setStatus("CANCELLED");
        session.setEndTime(System.currentTimeMillis());
        sessionRepo.save(session);
    }

    public void completeSession(String sessionId) {
        StroopSession session = sessionRepo.findById(sessionId).orElseThrow();
        session.setStatus("COMPLETED");
        session.setEndTime(System.currentTimeMillis());
        sessionRepo.save(session);
    }

    public List<StroopResult> getResultsForSession(String sessionId) {
        return resultRepo.findBySessionId(sessionId);
    }

    public List<StroopSession> getResultsForParticipant(String participantId) {
        return sessionRepo.findByParticipantId(participantId);
    }
}
