import React from "react";
import Home from "./pages/Home"
import Login from "./pages/Login";
import Cursos from "./pages/Cursos"
import Registro from "./pages/Registro"
import { 
      BrowserRouter,
      Routes,
      Route, Link
 } from "react-router-dom";
import LoginOrRegister from "./pages/LoginOrRegister";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Cursos" element={<Cursos/>} />
      <Route path="/Login" element={<LoginOrRegister/>} />
      <Route path="/Registro" element={<Registro/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
