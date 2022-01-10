import { useEffect, useState } from "react";
import Book from "../components/Book";

const Saved = () => {
  const [storedBooks, setStoredBooks] = useState([]);

  async function deleteBooks(id) {
    try {
      var deleteBook = await fetch(
        `http://localhost:3001/api/book/delete/${id}`,
        {
          method: `DELETE`,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(deleteBook);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetch(`http://localhost:3001/api/book`, {
      method: `GET`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setStoredBooks(data);
        console.log(storedBooks[0]);
      });
  });

  return (
    <div>
      <div>
        <ul>
          {storedBooks.map((item) => {
            return (
              <Book key={item.id} book={item} buttonFunction={deleteBooks} />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Saved;
