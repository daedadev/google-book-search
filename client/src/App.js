import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Banner from "./components/Banner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Banner />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </Router>
  );
}

export default App;
