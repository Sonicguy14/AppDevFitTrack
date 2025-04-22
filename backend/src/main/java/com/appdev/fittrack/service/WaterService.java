package com.appdev.fittrack.service;

import com.appdev.fittrack.entity.Water;
import com.appdev.fittrack.repository.WaterRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WaterService {

    private final WaterRepository waterRepository;

    public WaterService(WaterRepository waterRepository) {
        this.waterRepository = waterRepository;
    }

    public Water createWater(Water water) {
        return waterRepository.save(water);
    }

    public List<Water> getAllWater() {
        return waterRepository.findAll();
    }

    public Water getWaterById(Long id) {
        Optional<Water> water = waterRepository.findById(id);
        return water.orElse(null); // Return null if not found
    }

    public Water updateWater(Long id, Water water) {
        if (waterRepository.existsById(id)) {
            water.setId(id);
            return waterRepository.save(water);
        }
        return null; // or throw exception if needed
    }

    public void deleteWater(Long id) {
        waterRepository.deleteById(id);
    }
}
