export default function Book({ book, key, buttonFunction }) {
  console.log(book.volumeInfo);

  var title = book.volumeInfo.title;
  var authors = book.volumeInfo.authors;
  var description = book.volumeInfo.description;
  var link = book.volumeInfo.infoLink;
  var image;

  if (book.volumeInfo.imageLinks.thumbnail) {
    image = book.volumeInfo.imageLinks.thumbnail;
  } else if (book.volumeInfo.imageLinks.thumbnail) {
    image = book.volumeInfo.imageLinks.thumbnail;
  } else if (book.volumeInfo.imageLinks.thumbnail === undefined) {
    image =
      "https://media.istockphoto.com/vectors/error-page-flat-line-concept-link-to-a-nonexistent-page-abstract-vector-id1057525218";
  }

  return (
    <li id={key}>
      <h1>{title}</h1>
      <h1>Authors: {authors}</h1>
      <p>{description}</p>
      <h1>Link To Book:</h1>
      <a type="link" href={link}>
        {link}
      </a>
      <img src={image} alt={`Book cover image for ` + title}></img>
      <button
        onClick={() =>
          buttonFunction(key, title, authors, description, link, image)
        }
      ></button>
    </li>
  );
}
