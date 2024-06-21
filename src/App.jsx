import Navbar from "./components/Navbar.jsx";
import "./App.css";
import News from "./components/News.jsx";
import Favorites from "./components/Favorites.jsx";
import { useState } from "react";
function App() {
  const [category, setCategory] = useState("general");
  const [showFavorites, setShowFavorites] = useState(false);
  return (
    <>
      <Navbar setCategory={setCategory} setShowFavorites={setShowFavorites} />
      {showFavorites ? <Favorites /> : <News category={category} />}
    </>
  );
}

export default App;
