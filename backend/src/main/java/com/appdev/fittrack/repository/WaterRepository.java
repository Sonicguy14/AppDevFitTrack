package com.appdev.fittrack.repository;

import com.appdev.fittrack.entity.Water;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WaterRepository extends JpaRepository<Water, Long> {
    
}
