package com.test.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.test.Entity.Book;
import com.test.Service.BookService;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BookController {
	@Autowired
	private BookService bookService;

	@PostMapping("/addBook")
	public Book addBook(@RequestBody Book book) {
		return bookService.createBook(book);
	}

	@PostMapping("/addBooks")
	public List<Book> addBookss(@RequestBody List<Book> books) {
		return bookService.createBooks(books);
	}

	@GetMapping("/book/{id}")
	public Book getBookById(@PathVariable int id) {
		return bookService.getBookById(id);
	}

	@GetMapping("/books")
	public List<Book> getAllBooks() {
		return bookService.getBooks();
	}
	
	@PutMapping("/updatebook")
	public Book updateBooks(@RequestBody Book book) {
		return bookService.updateBook(book);
	}

	@DeleteMapping("/book/{id}")
	public String deleteUser(@PathVariable int id) {
		return bookService.deleteBookById(id);
	}
}
