import { useState } from "react";
import React from "react";
import "../styles/login.css";
import Login from "./Login";
import Registro from "./Registro";

function LoginOrRegister() {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };
  return (
    <div>
      {isLogin ? <Login /> : <Registro />}
      <button className="buttonCreate" onClick={handleToggleForm}>
        {isLogin ? "É novo por aqui?" : "Já possuo conta"}
      </button>
    </div>
  );
}

export default LoginOrRegister;
