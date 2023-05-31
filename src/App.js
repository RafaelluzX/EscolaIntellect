import React from "react";
import Home from "./pages/Home"
import Programação from "./pages/Programação"
import DataScience from "./pages/Datascience"
import UxDesign from "./pages/UxDesign"
import Idiomas from "./pages/Idiomas"
import Gestao from "./pages/Gestao"
import Reforco from "./pages/Reforco"
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
      <Route path="/programacao" element={<Programação/>} />
      <Route path="/datascience" element={<DataScience/>} />
      <Route path="/uxdesign" element={<UxDesign/>} />
      <Route path="/idiomas" element={<Idiomas/>} />
      <Route path="/gestao" element={<Gestao/>} />
      <Route path="/reforco" element={<Reforco/>} />
      <Route path="/login" element={<LoginOrRegister/>} />
      <Route path="/registro" element={<Registro/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
