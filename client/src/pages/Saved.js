import Results from "../components/ResultsContainer";

const Saved = () => {


    try {
      fetch(`http://localhost:3001/api/book`, {
        method: `POST`,
        body: JSON.stringify({
          id: key,
          title: title,
          authors: authors.toString(),
          description: description,
          link: link,
          image: image,
        }),
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
          {bookSearch.map((item) => {
            return <Book key={item.id} book={item} saving={saveButton} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Saved;
