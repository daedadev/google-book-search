import React, { useState } from "react";
import Book from "../components/Book";

const Search = () => {
  const [bookSearch, setBookSearch] = useState([]);

  async function searchButtonHandler(event) {
    event.preventDefault();
    const searchResult = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=barney`
    );
    const data = await searchResult.json();
    setBookSearch(data.items);
    console.log(bookSearch);
  }

  return (
    <div>
      <form onSubmit={searchButtonHandler}>
        <h1>Search</h1>
        <button type="submit"></button>
      </form>
      <ul>
        {bookSearch.map((item) => {
          return <Book book={item} />;
        })}
      </ul>
    </div>
  );
};

export default Search;
