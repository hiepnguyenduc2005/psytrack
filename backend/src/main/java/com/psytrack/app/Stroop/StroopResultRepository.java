package com.psytrack.app.Stroop;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface StroopResultRepository extends MongoRepository<StroopResult, String> {
    List<StroopResult> findBySessionId(String sessionId);
}