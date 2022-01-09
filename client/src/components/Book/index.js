export default function Book({ book, key, buttonFunction }) {
  console.log(book.volumeInfo);

  var title = book.volumeInfo.title;
  var authors = book.volumeInfo.authors;
  var description = book.volumeInfo.description;
  var link = book.volumeInfo.infoLink;
  var image;

  if (book.volumeInfo.imageLinks) {
    if (book.volumeInfo.imageLinks.thumbnail) {
      image = book.volumeInfo.imageLinks.thumbnail;
    } else if (book.volumeInfo.imageLinks.smallThumbnail) {
      image = book.volumeInfo.imageLinks.thumbnail;
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
