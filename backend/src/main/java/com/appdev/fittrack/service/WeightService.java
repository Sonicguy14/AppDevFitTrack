package com.appdev.fittrack.service;

import java.util.List;
import java.util.Optional;

import com.appdev.fittrack.entity.Weight;

public interface WeightService {
    Weight saveWeight(Weight weight);
    List<Weight> getAllWeights();
    Optional<Weight> getWeightById(Long id);
    void deleteWeight(Long id);
}
