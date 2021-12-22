export default function Book({ book }) {
  return (
    <li>
      <h1>{book.volumeInfo.title}</h1>
      <h1>Authors: {book.volumeInfo.authors}</h1>
      <p>{book.volumeInfo.description}</p>
      <h1>Link To Book: {book.volumeInfo.infolink}</h1>
    </li>
  );
}
