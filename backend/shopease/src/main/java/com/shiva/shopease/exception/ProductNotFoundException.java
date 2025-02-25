package com.shiva.shopease.exception;

import java.util.UUID;

public class ProductNotFoundException extends Exception {
	public ProductNotFoundException(UUID id) {
		super("Product is not found with "+id);
	}
}
