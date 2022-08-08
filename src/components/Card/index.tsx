import React from "react";

import "./style.scss";

type CardType = {
  urlImage: string;
};

const Card: React.FC<CardType> = ({ urlImage }) => {
  const handleImageInCenter = (pDiv: HTMLElement, pDivParent: HTMLElement) => {
    const div = pDiv;
    if (div.style.transform) {
      div.style.transform = "";
      div.classList.remove("active");

      return;
    }
    const divParent = pDivParent;

    const parentDimenssions = divParent.getBoundingClientRect();
    const divDimessions = div.getBoundingClientRect();

    const centerDiv = {
      x: parentDimenssions.left + parentDimenssions.width * 0.5,
      y: window.screen.height * 0.44,
    };

    const valueChange = {
      x: centerDiv.x - divDimessions.left - divDimessions.width * 0.5,
      y: centerDiv.y - divDimessions.top - divDimessions.height * 0.5,
    };

    div.style.transform = `translate(${valueChange.x}px, ${valueChange.y}px) scale(2)`;

    div.classList.add("active");
  };

  const handleDarkScreenInBack = () => {
    const divDarkScreen = document.getElementById("dark-screen");
    const entireHtml = document.getElementsByTagName("html").item(0);

    if (divDarkScreen && entireHtml) {
      entireHtml.classList.toggle("visible-overflow");
      divDarkScreen.classList.toggle("show-element");
      divDarkScreen.style.top = `${window.scrollY}px`;
    }
  };

  const handleImageZoom = (button: HTMLButtonElement) => {
    const div = button.parentElement;
    if (div) {
      const divParent = div.parentElement;

      if (divParent) {
        handleImageInCenter(div, divParent);

        handleDarkScreenInBack();
      }
    }
  };

  return (
    <div className="card-box">
      <button
        type="button"
        className="container-img"
        onClick={(e) => handleImageZoom(e.currentTarget)}
      >
        <img src={urlImage} alt="Dog" />
      </button>
    </div>
  );
};

export default Card;
