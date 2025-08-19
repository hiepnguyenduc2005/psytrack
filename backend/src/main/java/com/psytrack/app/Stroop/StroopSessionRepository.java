package com.psytrack.app.Stroop;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface StroopSessionRepository extends MongoRepository<StroopSession, String> {
}