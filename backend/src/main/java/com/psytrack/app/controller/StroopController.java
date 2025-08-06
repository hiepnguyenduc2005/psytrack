package com.psytrack.app.controller;

import com.psytrack.app.Stroop.Stroop;
import com.psytrack.app.Stroop.StroopService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/stroop")
public class StroopController {

    private final StroopService stroopService;

    public StroopController(StroopService stroopService) {
        this.stroopService = stroopService;
    }

    @GetMapping()
    public Stroop getStroop(@RequestParam String id) {
        return stroopService.findStroopById(id);
    }

    @PutMapping("/new")
    public ResponseEntity<String> newStroop(@RequestParam String id, @RequestParam Integer time) {
        Stroop stroop = new Stroop(id, time);
        if (stroopService.createStroop(stroop) != null) return new ResponseEntity<>(HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
