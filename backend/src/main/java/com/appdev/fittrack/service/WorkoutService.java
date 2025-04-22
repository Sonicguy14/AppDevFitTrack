package com.appdev.fittrack.service;

import com.appdev.fittrack.entity.Workout;
import java.util.List;

public interface WorkoutService {
    Workout saveWorkout(Workout workout);
    List<Workout> getAllWorkouts();
}
