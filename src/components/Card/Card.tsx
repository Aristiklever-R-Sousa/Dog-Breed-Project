import React from "react";

import "./style.scss";

type CardType = {
  urlImage: string;
};

const Card: React.FC<CardType> = ({ urlImage }) => {
  const handleImage = (button: HTMLButtonElement) => {
    const div = button.parentElement;
    if (div) {
      if (div.style.transform) div.style.transform = "";
      else {
        const divParent = div.parentElement;
        if (divParent) {
          const parentDimenssions = divParent.getBoundingClientRect();
          const divDimessions = div.getBoundingClientRect();

          const centerDiv = {
            x: parentDimenssions.left + parentDimenssions.width * 0.5,
            y: window.screen.height * 0.44,
          };

          console.log({
            centerDivX: centerDiv.x,
            centerDivY: centerDiv.y,
          });

          const valueChange = {
            x: centerDiv.x - divDimessions.left - divDimessions.width * 0.5,
            y: centerDiv.y - divDimessions.top - divDimessions.height * 0.5,
          };

          div.style.transform = `translate(${valueChange.x}px, ${valueChange.y}px) scale(2)`;
        }
      }
    }
  };

  return (
    <div className="card-box">
      <button
        type="button"
        className="container-img"
        onClick={(e) => handleImage(e.currentTarget)}
      >
        <img src={urlImage} alt="Dog" />
      </button>
    </div>
  );
};

export default Card;
