import React, { useState } from "react";
import Book from "../components/Book";

const Search = () => {
  const [bookSearch, setBookSearch] = useState([]);

  const [input, setInput] = useState();

  async function searchButtonHandler(event) {
    event.preventDefault();
    const searchResult = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${input}`
    );
    const data = await searchResult.json();
    setBookSearch(data.items);
    console.log(bookSearch);
  }

  return (
    <div>
      <form onSubmit={searchButtonHandler}>
        <h1>Search</h1>
        <input value={input} onInput={(e) => setInput(e.target.value)}></input>
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
