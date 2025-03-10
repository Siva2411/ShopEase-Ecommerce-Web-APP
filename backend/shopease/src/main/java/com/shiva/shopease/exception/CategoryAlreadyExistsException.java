package com.shiva.shopease.exception;

import java.util.UUID;

public class CategoryAlreadyExistsException extends Exception {

	private static final long serialVersionUID = 1L;

	public CategoryAlreadyExistsException(UUID id) {
		super("Category with ID already exists: " +id);
	}
}
