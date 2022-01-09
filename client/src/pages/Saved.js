import Book from "../components/Book";

const Saved = () => {
  var books;

  // async function savedBooks() {
  //   try {
  //     books = await fetch(`http://localhost:3001/api/book`, {
  //       method: `GET`,
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  async function deleteBooks(id) {
    try {
      books = await fetch(`http://localhost:3001/api/book/delete/${id}`, {
        method: `DELETE`,
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
      <div>
        <ul>
          {books.map((item) => {
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
