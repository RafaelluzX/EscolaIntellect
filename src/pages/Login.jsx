import { useState } from "react";
import React from "react";
import "../styles/login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  function loginApi(event) {
    event.preventDefault();
    fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div className="container">
      <form className="form">
        <h1>intellect</h1>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={handleEmailChange}
          required
        />
        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handlePasswordChange}
          required
        />
        <button type="submit" onClick={loginApi}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
