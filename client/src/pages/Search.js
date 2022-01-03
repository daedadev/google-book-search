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
    console.log(input);
  }

  async function saveButton(key, title, authors, description, link, image) {
    console.log(
      `id: ${key}, title: ${title}, authors: ${authors}, description: ${description}, link: ${link}, image: ${image}`
    );

    try {
      fetch(`http://localhost:3001/api/book`, {
        method: `POST`,
        body: JSON.stringify({
          id: key,
          title: title,
          authors: authors.toString(),
          description: description,
          link: link,
          image: image,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.log(err);
    }
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
          return <Book key={item.id} book={item} buttonFunction={saveButton} />;
        })}
      </ul>
    </div>
  );
};

export default Search;
