package com.library.repository;

import org.springframework.stereotype.Repository;

@Repository
public class BookRepository {
    public void save(String book) {
        System.out.println("Book saved: " + book);
    }
}
