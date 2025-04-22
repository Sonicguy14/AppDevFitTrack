package com.appdev.fittrack.repository;

import com.appdev.fittrack.entity.Weight;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WeightRepository extends JpaRepository<Weight, Long> {
}
