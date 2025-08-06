package com.psytrack.app.controller;

import com.psytrack.app.User.User;
import com.psytrack.app.User.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping()
    public User getUser(@RequestParam String id) {
        return userService.findUserById(id);
    }

    @PutMapping("/new")
    public ResponseEntity<String> newUser(@RequestParam String id, @RequestParam String name, @RequestParam String email) {
        User user = new User(id, name, email);
        if (userService.createUser(user) != null) return new ResponseEntity<>(HttpStatus.OK);
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
