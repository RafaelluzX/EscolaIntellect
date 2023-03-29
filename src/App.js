
import React from "react";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Cursos from "./pages/Cursos"
import { 
      BrowserRouter,
      Routes,
      Route, Link
 } from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Cursos" element={<Cursos/>} />
      <Route path="/Login" element={<Login/>} />
    </Routes>
  </BrowserRouter>
  );  
}

export default App;
