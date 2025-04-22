package com.appdev.fittrack.service;

import com.appdev.fittrack.entity.Meal;
import com.appdev.fittrack.repository.MealRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MealService {

    @Autowired
    private MealRepository mealRepository;

    public List<Meal> getAllMeals() {
        return mealRepository.findAll();
    }

    public Optional<Meal> getMealById(Long id) {
        return mealRepository.findById(id);
    }

    public Meal createMeal(Meal meal) {
        return mealRepository.save(meal);
    }

    public Meal updateMeal(Long id, Meal updatedMeal) {
        if (mealRepository.existsById(id)) {
            updatedMeal.setId(id);
            return mealRepository.save(updatedMeal);
        }
        return null;
    }

    public boolean deleteMeal(Long id) {
        if (mealRepository.existsById(id)) {
            mealRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
