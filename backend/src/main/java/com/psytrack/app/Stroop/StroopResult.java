package com.psytrack.app.Stroop;

import lombok.Data;
import lombok.AllArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "StroopResult")
@Data
@AllArgsConstructor
public class StroopResult {
    @Id
    private String id;
    private String sessionId;
    private StroopTrial trial;
    private String userResponse;
    private long reactionTimeMS;
    private boolean correct;
    private boolean missed;
}
