
import BookItem from "./BookItem";

function BookList({ books }) {
  return (
    <div id="book-list">
      {books.map((book, index) => (
        <BookItem key={index} book={book} />
      ))}
    </div>
  );
}

export default BookList;
