import { useState } from "react";
import BookModal from "../Modal";

export default function Book({ book, buttonFunction, buttonName }) {
  const [showModal, setShowModal] = useState(false);

  var title = book.title;
  var authors = book.authors;
  var description = book.description;
  var key = book.id;
  var link;
  var image;

  function viewButton() {
    setShowModal(!showModal);
  }

  if (book.imageLinks) {
    if (book.imageLinks.thumbnail) {
      image = book.imageLinks.thumbnail;
    } else if (book.imageLinks.smallThumbnail) {
      image = book.imageLinks.thumbnail;
    }
  } else if (book.image) {
    image = book.image;
  } else {
    image = "/images/NoCoverImageFound.png";
  }

  if (book.infoLink) {
    link = book.infoLink;
  } else {
    link = book.link;
  }

  var modalBook = {
    key: key,
    title: title,
    authors: authors,
    description: description,
    link: link,
    image: image,
  };

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
      <button onClick={viewButton}>View</button>
      <button
        onClick={() =>
          buttonFunction(key, title, authors, description, link, image)
        }
      >
        {buttonName}
      </button>
      <BookModal
        book={modalBook}
        toggleModal={viewButton}
        modalShown={showModal}
        modalButtonFunction={buttonFunction}
        modalButtonName={buttonName}
      />
    </li>
  );
}
