import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Client from "../../common/api";
import Card from "../../components/Card";

import "./style.scss";

type ResponseType = {
  breed: string;
  list?: string[];
};

const Home: React.FC = () => {
  const token = localStorage.getItem("dog_breed_token") || "";
  const navigate = useNavigate();

  const [dataBreed, setDataBreed] = useState<ResponseType>({
    breed: "",
  });
  const optionsBreed = ["chihuahua", "husky", "pug", "labrador"];

  const handleLogin = () => {
    if (!token) {
      alert("Entre no sistema primeito!");
      navigate("/login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("dog_breed_token");
    navigate("/login");
  };

  const handleBreed = () => {
    Client.get("/list", {
      headers: {
        Authorization: token,
      },
      params: {
        breed: dataBreed.breed,
      },
    }).then((res: { data: ResponseType }) => {
      setDataBreed({ ...dataBreed, list: res.data.list });
      // console.log(dataBreed);
    });
  };

  useEffect(handleLogin, [token]);
  useEffect(handleBreed, [dataBreed.breed]);

  // TODO: DESENVOLVER OS CARDS PARA VISUALIZAÇÃO DAS IMAGENS

  return (
    <>
      <div id="dark-screen" />
      <div className="container-home">
        <div>
          <h1>Bem vindo ao Dog Breed System!</h1>
          <h2>Escolhas uma das opções abaixo para visualizar os doguinhos!!</h2>
        </div>
        <div>
          {optionsBreed.map((option, key) => (
            <button
              key={key}
              type="button"
              className="nav-button"
              value={option}
              onClick={(e) => setDataBreed({ breed: e.currentTarget.value })}
            >
              {option[0].toUpperCase() + option.substring(1)}
            </button>
          ))}
          <button
            type="button"
            className="nav-button logout"
            onClick={handleLogout}
          >
            Sair
          </button>
        </div>
        <div className="container-cards">
          {dataBreed.list?.map((img, key) => (
            <Card key={key} urlImage={img} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
