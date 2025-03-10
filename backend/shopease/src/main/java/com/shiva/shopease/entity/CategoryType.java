package com.shiva.shopease.entity;


import java.util.UUID;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "category_type")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CategoryType {
	@Id
	@GeneratedValue(strategy  = GenerationType.UUID)
	private UUID id;
	
	@Column(nullable = false)
    private String name;
	
	@Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private String code;
    
    @ManyToOne
    @JoinColumn(name="category_id",nullable = false)
    private Category category;
}
