
import { useState } from "react";
import "./App.css";
import BookList from "./components/BookList";

function App() {
  const [books] = useState([
    { title: "Book1", author: "author1", year: 2021 },
    { title: "Book2", author: "author2", year: 2022 },
    { title: "Book3", author: "author3", year: 2023 },
  ]);

  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div id="app-container">
      <h2>Book Library</h2>
      <input
        id="search-box"
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <BookList books={filteredBooks} />
    </div>
  );
}

export default App;
