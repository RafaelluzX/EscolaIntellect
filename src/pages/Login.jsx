<<<<<<< HEAD
/*const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    console.log(name, email, password);
    fetch("http://localhost:3000/create", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
  };
}*/
import React from "react";
import axios from "axios";
import { useState } from "react";
=======
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from 'axios';
>>>>>>> a2b2c67b0ae9861db9c1c0d82aaa4560083435f1

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
<<<<<<< HEAD

    console.log(email, password);

    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      if (!error?.response) {
        setError("Erro ao acessar o servidor");
      } else if (error.response.status == 401) {
        setError("Usuário ou senha inválidos");
      }
    }
=======

    console.log(email, password);

    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(response.data);
      setUser(response.data);
    } catch (error) {
      if (!error?.response) {
        setError("Erro ao acessar o servidor");
      } else if (error.response.status == 401) {
        setError("Usuário ou senha inválidos");
      }
    }
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    setUser(null);
    setError("");
>>>>>>> a2b2c67b0ae9861db9c1c0d82aaa4560083435f1
  };

  const handleLogout = async (e) => {
    e.preventDefault();
    setUser(null);
    setError("");
  };
  return (
<<<<<<< HEAD
    <div className="login-form-wrap">
      {user == null ? (
        <div>
          <h2>Login</h2>
          <form className="login-form">
            <input
=======
    <div className="h-100">
      <div className=" login-form-wrap">
      {user == null ? (
        <div>
          <h2 className="h2-login">Login</h2>
          <form className="login-form">
            <input className="input-login"
>>>>>>> a2b2c67b0ae9861db9c1c0d82aaa4560083435f1
              type="email"
              name="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
<<<<<<< HEAD
            <input
=======
            <input className="input-login"
>>>>>>> a2b2c67b0ae9861db9c1c0d82aaa4560083435f1
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="btn-login"
              onClick={(e) => handleLogin(e)}
            >
              Login
            </button>
          </form>
          <p>{error}</p>
        </div>
      ) : (
        <div>
<<<<<<< HEAD
          <h2>Olá, {user.name}</h2>
=======
          <h2 className="h2-login">Olá, {user.name}</h2>
>>>>>>> a2b2c67b0ae9861db9c1c0d82aaa4560083435f1
          <button
            type="button"
            className="btn-login"
            onClick={(e) => handleLogout(e)}
          >
            Logout
          </button>
        </div>
      )}
    </div>
<<<<<<< HEAD
  );
}
=======
    </div>
    
  );
}

>>>>>>> a2b2c67b0ae9861db9c1c0d82aaa4560083435f1
export default Login;
