package com.appdev.fittrack.repository;

import com.appdev.fittrack.entity.Workout;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkoutRepository extends JpaRepository<Workout, Long> {
}
