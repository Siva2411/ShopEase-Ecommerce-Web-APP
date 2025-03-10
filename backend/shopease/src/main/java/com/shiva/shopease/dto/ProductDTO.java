package com.shiva.shopease.dto;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductDTO {
	private UUID id;
	private String name;
	private BigDecimal price;
	private String description; 
	private String brand;
	private boolean isNewArrival;
	private Float rating;
	private UUID categoryId;
	private String thumbnail;
//	private String slug;
	private String categoryName;
	private UUID categoryTypeId;
	private String categoryTypeName;
	private List<ProductResourceDTO> productResources;
	private List<ProductVarientDTO> varients;
}
