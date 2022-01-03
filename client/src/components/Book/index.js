export default function Book({ book, key, saving }) {
  console.log(book.volumeInfo);

  var title = book.volumeInfo.title;
  var authors = book.volumeInfo.authors;
  var description = book.volumeInfo.description;
  var link = book.volumeInfo.infoLink;

  if (book.volumeInfo.imageLinks.thumbnail) {
    var image = book.volumeInfo.imageLinks.thumbnail;
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
        onClick={() => saving(key, title, authors, description, link, image)}
      ></button>
    </li>
  );
}
