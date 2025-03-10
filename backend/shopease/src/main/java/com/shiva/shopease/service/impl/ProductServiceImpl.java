package com.shiva.shopease.service.impl;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import com.shiva.shopease.dto.ProductDTO;
import com.shiva.shopease.entity.Category;
import com.shiva.shopease.entity.Product;
import com.shiva.shopease.exception.ProductAlreadyExistsException;
import com.shiva.shopease.exception.ProductNotFoundException;
import com.shiva.shopease.mapper.ProductMapper;
import com.shiva.shopease.repository.CategoryRepository;
import com.shiva.shopease.repository.ProductRepository;
import com.shiva.shopease.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService{
	private final ProductRepository productRepository;
	private final CategoryRepository categoryRepository;
	public ProductServiceImpl(ProductRepository productRepository,CategoryRepository categoryRepository) {
		this.productRepository = productRepository;
		this.categoryRepository = categoryRepository;
	}
	@Override
	public Product addProduct(ProductDTO productDTO) {
		Category category = categoryRepository.findById(productDTO.getCategoryId()).orElse(null);
		Product product = ProductMapper.mapToProduct(productDTO, category);
		return productRepository.save(product);
	}

	@Override
	public List<ProductDTO> getAllProducts() {
		return productRepository.findAll().stream()
				.map(ProductMapper::mapToProductDTO)
				.toList();
	}

	@Override
	public ProductDTO getProductById(UUID id) throws ProductNotFoundException{
		Product product = productRepository.findById(id).orElseThrow(()->new ProductNotFoundException(id));
		ProductDTO productDto = ProductMapper.mapToProductDTO(product);
		productDto.setCategoryId(product.getCategory().getId());
        productDto.setCategoryTypeId(product.getCategoryType().getId());
        productDto.setVarients(ProductMapper.mapProductVariantListToDto(product.getProductsVarients()));
        productDto.setProductResources(ProductMapper.mapProductResourcesListToDto(product.getResources()));
        return productDto;
	}

	@Override
	public Product updateProduct(ProductDTO productDTO, UUID id) throws ProductAlreadyExistsException {
		Product existingProduct = productRepository.findById(id).orElseThrow(()->new ProductAlreadyExistsException(id));
		productDTO.setId(existingProduct.getId());
		return productRepository.save(ProductMapper.mapToProduct(productDTO, null));
	}

	@Override
	public Product fetchProductById(UUID id) throws ProductNotFoundException{
		 return productRepository.findById(id).orElseThrow(()->new ProductNotFoundException(id));
	}

}
