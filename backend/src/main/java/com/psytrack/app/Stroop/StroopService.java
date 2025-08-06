package com.psytrack.app.Stroop;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StroopService {
    @Autowired
    private StroopRepository stroopRepository;

    public List<Stroop> getAllTasks() {
        return this.stroopRepository.findAll();
    }

    public Stroop createStroop(Stroop stroop) {
        return this.stroopRepository.save(stroop);
    }

    public Stroop updateStroop(Stroop stroop) { return this.stroopRepository.save(stroop); }

    public void deleteStroop(Stroop stroop) { this.stroopRepository.delete(stroop); }

    public Stroop findStroopById(String id) { return this.stroopRepository.findById(id).orElse(null); }
}
