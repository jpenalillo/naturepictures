import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/NavBar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";

import MyContext from "./Context";
export default function App() {
  
  const [tarjeta, setTarjeta] = useState([]);
  const estado = { tarjeta:tarjeta, setTarjeta:setTarjeta };
  
  useEffect(() => {
    showGallery();
  }, []);

  async function showGallery() {
    const endpoint = "/fotos.json";
    const response = await fetch(endpoint);
    const data = await response.json()
    setTarjeta(data.photos)
  }

  return (
    <div className="App">
    <MyContext.Provider value={estado}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}
