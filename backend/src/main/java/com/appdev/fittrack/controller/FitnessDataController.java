package com.appdev.fittrack.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.appdev.fittrack.entity.FitnessData;
import com.appdev.fittrack.entity.User;
import com.appdev.fittrack.service.FitnessDataService;
import com.appdev.fittrack.service.UserService;

@RestController
@RequestMapping("/api/fitness-data")
public class FitnessDataController {

    private final FitnessDataService fitnessDataService;
    private final UserService userService;

    public FitnessDataController(FitnessDataService fitnessDataService, UserService userService) {
        this.fitnessDataService = fitnessDataService;
        this.userService = userService;
    }

    @PostMapping("/{userId}")
    public ResponseEntity<FitnessData> addFitnessData(@PathVariable Long userId, @RequestBody FitnessData fitnessData) {
        Optional<User> user = userService.getUserById(userId);
        if (user.isPresent()) {
            fitnessData.setUser(user.get());
            FitnessData savedData = fitnessDataService.saveFitnessData(fitnessData);
            return new ResponseEntity<>(savedData, HttpStatus.CREATED);
        }
        return ResponseEntity.notFound().build();
    }

    // Get fitness data by user
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<FitnessData>> getFitnessDataByUser(@PathVariable Long userId) {
        Optional<User> user = userService.getUserById(userId);
        if (user.isPresent()) {
            List<FitnessData> data = fitnessDataService.getDataByUser(user.get());
            return ResponseEntity.ok(data);
        }
        return ResponseEntity.notFound().build();
    }

    // Get all fitness data
    @GetMapping
    public ResponseEntity<List<FitnessData>> getAllFitnessData() {
        List<FitnessData> data = fitnessDataService.getAllFitnessData();
        return ResponseEntity.ok(data);
    }

    // Update fitness data
    @PutMapping("/{id}")
    public ResponseEntity<FitnessData> updateFitnessData(@PathVariable Long id, @RequestBody FitnessData fitnessData) {
        FitnessData updatedData = fitnessDataService.updateFitnessData(id, fitnessData);
        return ResponseEntity.ok(updatedData);
    }

    // Delete fitness data
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFitnessData(@PathVariable Long id) {
        fitnessDataService.deleteFitnessData(id);
        return ResponseEntity.noContent().build();
    }
}
