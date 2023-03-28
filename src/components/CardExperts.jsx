import React from "react";
import java from "../images/java.jpg";
import react from "../images/react.jpg";
import python from "../images/python.webp";
import php from "../images/php.jpg";
import "../styles/cardExperts.css";

function CardExperts() {
  return (
    <div className="cardExperts">
      <div>
        <img src={java} alt="" />
        <h2>Loupan</h2>
        <p>front-end</p>
      </div>
      <div>
        <img src={php} alt="" />
        <h2>rocco</h2>
        <p>front-end</p>
      </div>
      <div>
        <img src={react} alt="" />
        <h2>may akemi</h2>
        <p>front-end</p>
      </div>
      <div>
        <img src={python} alt="" />
        <h2>Bruna Ferraz</h2>
        <p>front-end</p>
      </div>
    </div>
  );
}

export default CardExperts;
