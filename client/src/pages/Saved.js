import { useEffect, useState } from "react";
import BookItem from "../components/BookItem";

const Saved = () => {
  const [storedBooks, setStoredBooks] = useState([]);

  async function deleteBooks(key, title, authors, description, link, image) {
    console.log(key);
    try {
      fetch(`/api/book/delete/${key}`, {
        method: `DELETE`,
        headers: {
          "Content-Type": "application/json",
        },
      });
      alert(title + " has successfully been deleted from your library.");
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetch(`/api/book/`, {
      method: `GET`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setStoredBooks(data);
      });
  }, []);

  return (
    <div id="large-container">
      <h1>Library</h1>
      <ul id="result-container">
        {storedBooks.map((item) => {
          return (
            <BookItem
              book={item}
              buttonFunction={deleteBooks}
              buttonName={"Delete"}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Saved;
