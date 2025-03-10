package com.shiva.shopease.service;

import java.util.List;
import java.util.UUID;
import com.shiva.shopease.dto.ProductDTO;
import com.shiva.shopease.entity.Product;
import com.shiva.shopease.exception.ProductAlreadyExistsException;
import com.shiva.shopease.exception.ProductNotFoundException;

public interface ProductService {

	Product addProduct(ProductDTO productDTO);
	
	List<ProductDTO> getAllProducts();

//	ProductDTO getProductBySlug(String slug);

	ProductDTO getProductById(UUID id) throws ProductNotFoundException;

	Product updateProduct(ProductDTO productDTO, UUID id) throws ProductAlreadyExistsException;

	Product fetchProductById(UUID uuid) throws ProductNotFoundException;
	
}
