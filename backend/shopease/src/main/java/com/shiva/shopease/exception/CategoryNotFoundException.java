package com.shiva.shopease.exception;

import java.util.UUID;

public class CategoryNotFoundException extends Exception {

	private static final long serialVersionUID = 1L;

	public CategoryNotFoundException(UUID id) {
		super("Category is not found with "+id);
	}
}
