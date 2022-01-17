import "./style.css";

export default function Banner() {
  return (
    <header>
      <nav>
        <h1 className="nav-item">Google Books</h1>
        <a className="nav-item" href="/">
          Search
        </a>
        <a className="nav-item" href="/saved">
          Saved
        </a>
      </nav>
      <div id="image-holder">
        <img alt="Google Books Logo" src="/GoogleBooksLogo.png"></img>
      </div>
    </header>
  );
}
