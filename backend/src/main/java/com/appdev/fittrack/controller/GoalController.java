package com.appdev.fittrack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.appdev.fittrack.entity.Goal;
import com.appdev.fittrack.service.GoalService;

@RestController
@RequestMapping("/api/goals")
@CrossOrigin(origins = "http://localhost:5173") 
public class GoalController {

    @Autowired
    private GoalService goalService;

    @PostMapping
    public Goal addGoal(@RequestBody Goal goal) {
        return goalService.saveGoal(goal);
    }

    @GetMapping
    public List<Goal> getAllGoals() {
        return goalService.getAllGoals();
    }
}
