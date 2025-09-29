
function BookItem({ book }) {
  return (
    <div id="book-item">
      <span>
        <strong>{book.title}</strong> by {book.author} ({book.year})
      </span>
    </div>
  );
}

export default BookItem;
