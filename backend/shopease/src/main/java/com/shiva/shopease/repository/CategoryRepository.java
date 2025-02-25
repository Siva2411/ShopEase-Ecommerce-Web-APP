package com.shiva.shopease.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shiva.shopease.entity.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, UUID>{

}
