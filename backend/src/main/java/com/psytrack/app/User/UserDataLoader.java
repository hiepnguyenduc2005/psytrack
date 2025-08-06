package com.psytrack.app.User;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class UserDataLoader implements CommandLineRunner {

    private final UserService userService;

    public UserDataLoader(UserService userService) {
        this.userService = userService;
    }

    @Override
    public void run(String... args) {
//        User user = new User("123", "test", "user@test.com");
//        userService.createUser(user);
    }
}
