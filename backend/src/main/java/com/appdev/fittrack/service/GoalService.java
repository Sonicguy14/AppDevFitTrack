package com.appdev.fittrack.service;

import com.appdev.fittrack.entity.Goal;
import java.util.List;

public interface GoalService {
    Goal saveGoal(Goal goal);
    List<Goal> getAllGoals();
}
