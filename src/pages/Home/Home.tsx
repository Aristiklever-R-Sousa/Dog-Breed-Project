import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Client from "../../common/api";

import "./style.scss";

type ResponseType = {
  breed: String;
  list: String[];
};

const Home: React.FC = () => {
  const token = localStorage.getItem("dog_breed_token") || "";
  const navigate = useNavigate();

  const [breed, setBreed] = useState("");
  const optionsBreed = ["chihuahua", "husky", "pug", "labrador"];

  const checkLogin = () => {
    if (!token) navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("dog_breed_token");
    navigate("/login");
  };

  const handleBreed = () => {
    Client.get(`/list`, {
      headers: {
        Authorization: token,
      },
      params: {
        breed,
      },
    }).then((res: { data: ResponseType }) => {
      console.log(res.data.breed, res.data.list);
    });
  };

  useEffect(handleBreed, [breed]);

  checkLogin();

  // TODO: DESENVOLVER OS CARDS PARA VISUALIZAÇÃO DAS IMAGENS

  return (
    <div className="container-home">
      <div>
        <h1>HELLO, YOU ARE LOGUED!</h1>
      </div>
      <div>
        {optionsBreed.map((option, key) => (
          <button
            key={key}
            type="button"
            value={option}
            onClick={(e) => setBreed(e.currentTarget.value)}
          >
            {option}
          </button>
        ))}
        <button type="button" onClick={handleLogout}>
          Sair
        </button>
      </div>
    </div>
  );
};

export default Home;
