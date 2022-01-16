import React, { useState } from "react";
import BookItem from "../components/BookItem";

const Search = () => {
  const [bookSearch, setBookSearch] = useState([]);

  const [input, setInput] = useState();

  async function searchButtonHandler(event) {
    event.preventDefault();
    const searchResult = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${input}`
    );
    const data = await searchResult.json();

    if (!input) {
      return;
    }

    setBookSearch(data.items);
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
      alert(title + " has successfully been added to your library.");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div id="large-container">
      <form id="search-form" onSubmit={searchButtonHandler}>
        <h1>Book Search</h1>
        <input
          id="search-input"
          value={input}
          onInput={(e) => setInput(e.target.value)}
        ></input>
        <button id="search-button" type="submit"></button>
      </form>
      <ul id="result-container">
        {bookSearch.map((item) => {
          return (
            <BookItem
              key={item.id}
              book={item.volumeInfo}
              buttonFunction={saveButton}
              buttonName={"Save"}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Search;
