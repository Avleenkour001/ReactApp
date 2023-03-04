package com.test.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.test.Entity.Book;
import com.test.dao.BookRepository;

@Service
public class BookService {
	@Autowired
	private BookRepository bookRepository;

	public Book createBook(Book  book) {
		return bookRepository.save(book);
	}

	public List<Book > createBooks(List<Book > books) {
		return bookRepository.saveAll(books);
	}

	public Book  getBookById(int id) {
		return bookRepository.findById(id).orElse(null);
	}

	public List<Book > getBooks() {
		return bookRepository.findAll();
	}
	
	public Book updateBook(Book book) {
		Book oldBook=null;
		Optional<Book > optionalbook=bookRepository.findById(book.getId());
		
		if(optionalbook.isPresent()) {
			oldBook=optionalbook.get();
			oldBook.setTitle(book.getTitle());
			oldBook.setDescription(book.getDescription());
			oldBook.setImage(book.getImage());
			bookRepository.save(oldBook);
		}else {
			return new Book ();
		}
		return oldBook;
	}
	
	public String deleteBookById(int id) {
		bookRepository.deleteById(id);
		return "User got deleted";
	}

	

}
