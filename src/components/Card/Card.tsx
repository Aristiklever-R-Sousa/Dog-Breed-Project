import React from "react";

type CardType = {
  urlImage: string;
};

const Card: React.FC<CardType> = ({ urlImage }) => (
  <div className="card-box">
    Im a card!
    <br /> Image in: {urlImage}
  </div>
);

export default Card;
