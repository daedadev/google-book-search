import "./style.css";

export default function BookModal({
  book,
  toggleModal,
  modalShown,
  modalButtonFunction,
  modalButtonName,
}) {
  var title = book.title;
  var authors = book.authors;
  var description = book.description;
  var link = book.link;
  var image = book.image;
  var key = book.key;

  return (
    <div className={modalShown ? "active" : "hidden"}>
      <div id="info-holder">
        <h1>{title}</h1>
        <img src={image} alt={`Book cover image for ` + title}></img>
        <div id="description-holder">
          <h1>Author(s): {authors}</h1>
          <p>{description}</p>
        </div>
        <a type="link" href={link}>
          Link To Book
        </a>
        <div id="button-holder">
          <button
            onClick={() =>
              modalButtonFunction(key, title, authors, description, link, image)
            }
          >
            {modalButtonName}
          </button>
          <button
            id="close-button"
            onClick={() =>
              toggleModal(key, title, authors, description, link, image)
            }
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
