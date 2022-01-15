export default function Book({ book, key, buttonFunction }) {
  console.log(book.volumeInfo);

  var title = book.title;
  var authors = book.authors;
  var description = book.description;
  var link = book.infoLink;
  var image;

  if (book.imageLinks) {
    if (book.imageLinks.thumbnail) {
      image = book.imageLinks.thumbnail;
    } else if (book.imageLinks.smallThumbnail) {
      image = book.imageLinks.thumbnail;
    }
  } else {
    image = "/images/NoCoverImageFound.png";
  }

  return (
    <li id={key}>
      <h1>{title}</h1>
      <h1>Author(s): {authors}</h1>
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
