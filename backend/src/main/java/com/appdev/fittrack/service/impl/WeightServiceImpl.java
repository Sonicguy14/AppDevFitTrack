package com.appdev.fittrack.service.impl;

import com.appdev.fittrack.entity.Weight;
import com.appdev.fittrack.repository.WeightRepository;
import com.appdev.fittrack.service.WeightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WeightServiceImpl implements WeightService {

    @Autowired
    private WeightRepository weightRepository;

    @Override
    public Weight saveWeight(Weight weight) {
        return weightRepository.save(weight);
    }

    @Override
    public List<Weight> getAllWeights() {
        return weightRepository.findAll();
    }

    @Override
    public Optional<Weight> getWeightById(Long id) {
        return weightRepository.findById(id);
    }

    @Override
    public void deleteWeight(Long id) {
        weightRepository.deleteById(id);
    }
}
