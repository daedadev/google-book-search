export default function Book({ book }) {
  console.log(book.volumeInfo);

  return (
    <li>
      <h1>{book.volumeInfo.title}</h1>
      <h1>Authors: {book.volumeInfo.authors}</h1>
      <p>{book.volumeInfo.description}</p>
      <h1>Link To Book: {book.volumeInfo.infoLink}</h1>
    </li>
  );
}
