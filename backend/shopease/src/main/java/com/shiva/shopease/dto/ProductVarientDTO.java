package com.shiva.shopease.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductVarientDTO {

    private UUID id;
    private String color;
    private String size;
    private Integer stockQuantity;
}