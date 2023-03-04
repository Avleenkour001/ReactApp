import BooksItem from './BooksItem';
import classes from './BooksList.module.css';

function BooksList(props) {
  console.log('Hii',props.books);
  return (
    <ul className={classes.list}>
      {props.books.map((book) => (
        <BooksItem
          key={book.id}
          id={book.id}
          image={book.image}
          title={book.title}
          description={book.description}
        />
      ))}
    </ul>
  );
}

export default BooksList;