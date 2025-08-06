package com.psytrack.app.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return this.userRepository.findAll();
    }

    public User createUser(User user) {
        return this.userRepository.save(user);
    }

    public User updateUser(User user) { return this.userRepository.save(user); }

    public void deleteUser(User user) { this.userRepository.delete(user); }

    public User findUserById(String id) { return this.userRepository.findById(id).orElse(null); }
}
