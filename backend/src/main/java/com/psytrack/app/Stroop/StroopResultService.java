package com.psytrack.app.Stroop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StroopResultService {
    @Autowired
    private StroopResultRepository stroopResultRepository;

    public List<StroopResult> getAllTasks() {
        return this.stroopResultRepository.findAll();
    }

    public StroopResult createStroop(StroopResult stroopResult) {
        return this.stroopResultRepository.save(stroopResult);
    }

    public StroopResult updateStroop(StroopResult stroopResult) { return this.stroopResultRepository.save(stroopResult); }

    public void deleteStroop(StroopResult stroopResult) { this.stroopResultRepository.delete(stroopResult); }

    public StroopResult findStroopById(String id) { return this.stroopResultRepository.findById(id).orElse(null); }
}
