import { useEffect, useState } from "react";
import React from "react";
import "../styles/login.css";
import Registro from "./Registro";

function Login() {
  return (
    <div className="container">
      <form className="form">
        <h1>intellect</h1>
        <label for="username">Usuario:</label>
        <input type="text" id="username" name="username" required />

        <label for="password">Senha:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Login</button>
        <h2>Crie sua Conta</h2>
        <button type="submit">Clique para se cadastrar</button>
      </form>
    </div>
  );
}

export default Login;
