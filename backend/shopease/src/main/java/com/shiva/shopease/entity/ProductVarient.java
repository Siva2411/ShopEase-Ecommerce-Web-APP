package com.shiva.shopease.entity;

import java.util.UUID;
import com.shiva.shopease.enums.Size;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
@Table(name = "product_varient")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductVarient {
	
	@Id
	@GeneratedValue(strategy  = GenerationType.UUID)
	private UUID id;
	
	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private Size size;
	
	@Column(nullable = false)
	private String color;
	
	@Column(nullable = false,name = "quantity")
	private int stockQuantity;

	@ManyToOne
	@JoinColumn(name="product_id",nullable=false)
	private Product product;
}
