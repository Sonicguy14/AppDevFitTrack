package com.appdev.fittrack.entity;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Water {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer amount;

    @PrePersist
    public void prePersist() {
        if (this.amount == null) {
            this.amount = 0;
        }
    }
    private int quantity;
    
    @Column(name = "water_date")
    private LocalDate waterDate;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public LocalDate getWaterDate() {
        return waterDate;
    }

    public void setWaterDate(LocalDate waterDate) {
        this.waterDate = waterDate;
    }
}
