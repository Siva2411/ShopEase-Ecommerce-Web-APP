package com.shiva.shopease.dto;

import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductResourceDTO {
	private UUID id;
    private String name;
    private String url;
    private String type;
    private  Boolean isPrimary;
}
