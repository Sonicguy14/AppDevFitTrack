package com.appdev.fittrack.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.appdev.fittrack.entity.FitnessData;
import com.appdev.fittrack.entity.User;
import com.appdev.fittrack.repository.FitnessDataRepository;

@Service
public class FitnessDataService {

    private final FitnessDataRepository fitnessRepo;

    public FitnessDataService(FitnessDataRepository fitnessRepo) {
        this.fitnessRepo = fitnessRepo;
    }

    public FitnessData saveFitnessData(FitnessData data) {
        return fitnessRepo.save(data);
    }

    public List<FitnessData> getDataByUser(User user) {
        return fitnessRepo.findByUser(user);
    }

    public List<FitnessData> getAllFitnessData() {
        return fitnessRepo.findAll();
    }

    public FitnessData updateFitnessData(Long id, FitnessData newData) {
        return fitnessRepo.findById(id).map(data -> {
            data.setDate(newData.getDate());
            data.setSteps(newData.getSteps());
            data.setCalories(newData.getCalories());
            data.setWaterIntake(newData.getWaterIntake());
            return fitnessRepo.save(data);
        }).orElseThrow(() -> new RuntimeException("Fitness data not found"));
    }

    public void deleteFitnessData(Long id) {
        fitnessRepo.deleteById(id);
    }
}
