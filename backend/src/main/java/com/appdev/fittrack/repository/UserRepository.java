package com.appdev.fittrack.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.appdev.fittrack.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
