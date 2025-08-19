package com.psytrack.app.Stroop;

import lombok.Data;
import lombok.AllArgsConstructor;

@Data
@AllArgsConstructor
public class StroopTrial {
    private int trialIndex;
    private String word;
    private String color;
    private boolean match;
    private long startTime;
}
