package com.psytrack.app.Stroop;

import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface StroopSessionRepository extends MongoRepository<StroopSession, String> {
    List<StroopSession> findByParticipantId(String participantId);
}
