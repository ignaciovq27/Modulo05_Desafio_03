import "../styles.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import Navbar from "./components/Navbar";
import Pokemon from "./components/Pokemon";

//views
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";

export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemon/:pokemonName" element={<Pokemon />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}