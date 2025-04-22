package com.appdev.fittrack.service.impl;

import com.appdev.fittrack.entity.Goal;
import com.appdev.fittrack.repository.GoalRepository;
import com.appdev.fittrack.service.GoalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GoalServiceImpl implements GoalService {

    @Autowired
    private GoalRepository goalRepository;

    @Override
    public Goal saveGoal(Goal goal) {
        return goalRepository.save(goal);
    }

    @Override
    public List<Goal> getAllGoals() {
        return goalRepository.findAll();
    }
}
