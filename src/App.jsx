import Navbar from "./components/Navbar.jsx";
import "./App.css";
import News from "./components/News.jsx";
import { useState } from "react";
function App() {
  const [category,setCategory] = useState("general");
  return (
    <>
      <Navbar setCategory={setCategory} />
      <News category={category}/>
    </>
  );
}

export default App;
