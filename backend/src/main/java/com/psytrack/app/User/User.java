package com.psytrack.app.User;

import lombok.Data;
import lombok.AllArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "User")
@Data
@AllArgsConstructor
public class User {
    @Id
    private String id;
    private String name;
    private String email;
}
