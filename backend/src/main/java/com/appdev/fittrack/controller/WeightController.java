package com.appdev.fittrack.controller;

import com.appdev.fittrack.entity.Weight;
import com.appdev.fittrack.service.WeightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/weights")
@CrossOrigin
public class WeightController {

    @Autowired
    private WeightService weightService;

    @GetMapping
    public List<Weight> getAllWeights() {
        return weightService.getAllWeights();
    }

    @GetMapping("/{id}")
    public Optional<Weight> getWeightById(@PathVariable Long id) {
        return weightService.getWeightById(id);
    }

    @PostMapping
    public Weight createWeight(@RequestBody Weight weight) {
        return weightService.saveWeight(weight);
    }

    @DeleteMapping("/{id}")
    public void deleteWeight(@PathVariable Long id) {
        weightService.deleteWeight(id);
    }
}
