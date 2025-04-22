package com.appdev.fittrack.controller;

import com.appdev.fittrack.entity.Workout;
import com.appdev.fittrack.service.WorkoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/workouts")
@CrossOrigin
public class WorkoutController {

    @Autowired
    private WorkoutService workoutService;

    @PostMapping
    public Workout addWorkout(@RequestBody Workout workout) {
        return workoutService.saveWorkout(workout);
    }

    @GetMapping
    public List<Workout> getAllWorkouts() {
        return workoutService.getAllWorkouts();
    }
}
