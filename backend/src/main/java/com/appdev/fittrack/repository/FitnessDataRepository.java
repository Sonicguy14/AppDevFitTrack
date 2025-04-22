package com.appdev.fittrack.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.appdev.fittrack.entity.FitnessData;
import com.appdev.fittrack.entity.User;

public interface FitnessDataRepository extends JpaRepository<FitnessData, Long> {

    List<FitnessData> findByUser(User user);
}
