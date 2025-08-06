package com.psytrack.app.Stroop;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface StroopRepository extends MongoRepository<Stroop, String> {
}