export default function Book({ book }) {
  console.log(book.volumeInfo);

  return (
    <li>
      <h1>{book.volumeInfo.title}</h1>
      <h1>Authors: {book.volumeInfo.authors}</h1>
      <p>{book.volumeInfo.description}</p>
      <h1>Link To Book:</h1>
      <a type="link">{book.volumeInfo.infoLink}</a>
    </li>
  );
}
