import { useState, useEffect } from 'react';
import BooksList from "../components/Books/BooksList";
function AllBooksPage() {
const [isLoading, setIsLoading] = useState(true);
  const [loadedbooks, setLoadedbooks] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      //'https://react-demo-e1aab-default-rtdb.firebaseio.com/books.json'
       'http://localhost:8080/books'
    ).then((response) => {
        return response.json();
      }).then((data) => {
        const books = [];

        for (const key in data) {
          const book = {
            id: key,
            ...data[key]
          };

        books.push(book);
        }

        setIsLoading(false);
        setLoadedbooks(books);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading data
        </p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <BooksList books={loadedbooks} />
    </section>
  );
}
  export default AllBooksPage;