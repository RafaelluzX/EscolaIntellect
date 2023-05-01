import { useEffect, useState } from "react";
import React from "react";
import "../styles/registro.css";

function Registro() {
  return (
    <div className="container ">
      <form className="formCadastro">
        <h1>intellect</h1>
        <label for="username">cadastre seu email :</label>
        <input type="text" id="username" name="username" required />

        <label for="password">cadastre sua Senha:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">criar usuario</button>
      </form>
    </div>
  );
}

export default Registro;
