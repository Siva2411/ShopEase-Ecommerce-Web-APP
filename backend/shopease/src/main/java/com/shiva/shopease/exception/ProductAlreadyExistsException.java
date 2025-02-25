package com.shiva.shopease.exception;

import java.util.UUID;

public class ProductAlreadyExistsException extends Exception{
	private static final long serialVersionUID = 1L;

	public ProductAlreadyExistsException(UUID id) {
		super("Product with ID already exists: " +id);
	}
}
