import React from "react";
import "../styles/cardExperts.css";

const CardExperts = (props) => {
  return (
    <div className="experts">
      <img src={props.imgExpert} className="cardExperts"/>
      <h2>{props.nameExpert}</h2>
      <p>{props.description}</p>
    </div>
  );
};

export default CardExperts;
