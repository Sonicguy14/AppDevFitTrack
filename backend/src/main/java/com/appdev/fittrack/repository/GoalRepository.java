package com.appdev.fittrack.repository;

import com.appdev.fittrack.entity.Goal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GoalRepository extends JpaRepository<Goal, Long> {
}
