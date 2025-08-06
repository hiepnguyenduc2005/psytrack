package com.psytrack.app.Stroop;

import lombok.Data;
import lombok.AllArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Stroop")
@Data
@AllArgsConstructor
public class Stroop {
    @Id
    private String id;
    private Integer reactionTimeMS;
}
