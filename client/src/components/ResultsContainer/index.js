import Book from "../Book";

export default function Results({ data }) {
  var theBooks = data.items.volumeInfo;

  for (var i = 0; i < theBooks; i++) {
    return (
      <div>
        <Book
          title={theBooks.title}
          authors={theBooks.authors}
          description={theBooks.description}
          link={theBooks.infoLink}
        />
      </div>
    );
  }
}
