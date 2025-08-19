package com.psytrack.app.Stroop;

import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "StroopSession")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class StroopSession {
    @Id
    private String id;
    private String participantId;
    private long startTime;
    private Long endTime;
    private int numTrialsRequested;
    private int numTrialsCompleted;
    private String status;
}
