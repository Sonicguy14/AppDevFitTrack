package com.appdev.fittrack.repository;

import com.appdev.fittrack.entity.Meal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MealRepository extends JpaRepository<Meal, Long> {
    
}
