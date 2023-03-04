package com.test.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.test.Entity.Book;

public interface BookRepository extends JpaRepository<Book, Integer> {

}
