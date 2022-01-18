import { useState } from "react";
import BookModal from "../Modal";
import "./style.css";

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

  if (book.authors) {
    authors = book.authors;
  } else {
    authors = "N/A";
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
    <li className="result-item-holder" id={key}>
      <section className="result-top">
        <div className="title-holder">
          <h1>{title}</h1>
          <h3>Author(s): {authors}</h3>
        </div>
        <div className="result-button-holder">
          <button onClick={viewButton}>View</button>
          <button
            onClick={() =>
              buttonFunction(key, title, authors, description, link, image)
            }
          >
            {buttonName}
          </button>
        </div>
      </section>
      <section className="result-bottom">
        <div className="result-image-holder">
          <a type="link" href={link} target="_blank" rel="noreferrer">
            Link To Book
          </a>
          <img src={image} alt={`Book cover image for ` + title}></img>
        </div>
        <div className="description-holder">
          <p>{description}</p>
        </div>
      </section>
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
