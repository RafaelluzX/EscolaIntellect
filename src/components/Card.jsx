import React from "react";
import "../styles/card.css";

const Card = (props) => {
  return (
    <div className="cards">
      <h2>{props.titleCurse}</h2>
      <p>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <button className="buttonCard"><a href="#">Acessar</a></button>
      
      
    </div>
  );
};

export default Card;
