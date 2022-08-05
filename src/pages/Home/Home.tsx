import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Client from "../../common/api";
import Card from "../../components/Card/Card";

import "./style.scss";

type ResponseType = {
  breed: String;
  list?: string[];
};

const Home: React.FC = () => {
  const token = localStorage.getItem("dog_breed_token") || "";
  const navigate = useNavigate();

  const [dataBreed, setDataBreed] = useState<ResponseType>({
    breed: "",
  });
  const optionsBreed = ["chihuahua", "husky", "pug", "labrador"];

  const checkLogin = () => {
    if (!token) navigate("/login");
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

  useEffect(handleBreed, [dataBreed.breed]);

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
            onClick={(e) => setDataBreed({ breed: e.currentTarget.value })}
          >
            {option}
          </button>
        ))}
        <button type="button" onClick={handleLogout}>
          Sair
        </button>
      </div>
      <div className="container-cards">
        {dataBreed.list?.map((img, key) => (
          <Card key={key} urlImage={img} />
        ))}
      </div>
    </div>
  );
};

export default Home;
