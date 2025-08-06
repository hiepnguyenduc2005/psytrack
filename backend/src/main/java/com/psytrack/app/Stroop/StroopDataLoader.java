package com.psytrack.app.Stroop;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class StroopDataLoader implements CommandLineRunner {

    private final StroopService stroopService;

    public StroopDataLoader(StroopService stroopService) {
        this.stroopService = stroopService;
    }

    @Override
    public void run(String... args) {
//        Stroop stroop = new Stroop("123", 10000);
//        stroopService.createStroop(stroop);
    }
}