import React from "react";

import "./style.scss";

type CardType = {
  urlImage: string;
};

const Card: React.FC<CardType> = ({ urlImage }) => (
  <div className="card-box">
    Im a card!
    <br />
    <img src={urlImage} alt="Dog" />
  </div>
);

export default Card;
