package com.appdev.fittrack.controller;

import com.appdev.fittrack.entity.Water;
import com.appdev.fittrack.service.WaterService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/water")
public class WaterController {

    private final WaterService waterService;

    public WaterController(WaterService waterService) {
        this.waterService = waterService;
    }

    @PostMapping
    public Water createWater(@RequestBody Water water) {
        return waterService.createWater(water);
    }

    @GetMapping
    public List<Water> getAllWater() {
        return waterService.getAllWater();
    }

    @GetMapping("/{id}")
    public Water getWaterById(@PathVariable Long id) {
        return waterService.getWaterById(id);
    }

    @PutMapping("/{id}")
    public Water updateWater(@PathVariable Long id, @RequestBody Water water) {
        return waterService.updateWater(id, water);
    }

    @DeleteMapping("/{id}")
    public void deleteWater(@PathVariable Long id) {
        waterService.deleteWater(id);
    }
}
