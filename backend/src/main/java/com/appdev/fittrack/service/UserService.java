package com.appdev.fittrack.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.appdev.fittrack.entity.User;
import com.appdev.fittrack.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepo;

    public UserService(UserRepository userRepo) {
        this.userRepo = userRepo;
    }

    public User registerUser(User user) {
        return userRepo.save(user);
    }

    public Optional<User> getUserByEmail(String email) {
        return Optional.ofNullable(userRepo.findByEmail(email));
    }

    public Optional<User> getUserById(Long id) {
        return userRepo.findById(id);
    }

    public User updateUser(Long id, User userDetails) {
        return userRepo.findById(id).map(user -> {
            user.setUsername(userDetails.getUsername());
            user.setEmail(userDetails.getEmail());
            user.setPassword(userDetails.getPassword());
            user.setAge(userDetails.getAge());
            user.setWeight(userDetails.getWeight());
            user.setHeight(userDetails.getHeight());
            return userRepo.save(user);
        }).orElseThrow(() -> new RuntimeException("User not found"));
    }

    public void deleteUser(Long id) {
        userRepo.deleteById(id);
    }
}
