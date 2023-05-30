import { useState } from "react";
import React from "react";
import "../styles/registro.css";

function Registro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  function createAcount(e) {
    e.preventDefault()
    fetch("http://localhost:3000/users/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        
          alert("USUARIO CRIADO ");
        
      });
  }

  return (
    <div className="container">
      <form className="formCadastro">
        <h1>intellect</h1>
        <label htmlFor="name">Primeiro nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleNameChange}
          required
        />

        <label htmlFor="username">cadastre seu email :</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleEmailChange}
          required
        />

        <label htmlFor="password">cadastre sua Senha:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handlePasswordChange}
          required
        />

        <button type="submit" onClick={createAcount}>
          criar usuario
        </button>
      </form>
    </div>
  );
}

export default Registro;
