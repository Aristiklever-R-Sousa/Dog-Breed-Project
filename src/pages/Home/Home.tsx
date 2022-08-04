import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const token = localStorage.getItem("dog_breed_token");
  const navigate = useNavigate();

  const checkLogin = () => {
    if (!token) navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("dog_breed_token");
    navigate("/login");
  };

  checkLogin();

  // TODO: DESENVOLVER OS CARDS PARA VISUALIZAÇÃO DAS IMAGENS

  return (
    <>
      <h1>HELLO, IS LOGUED</h1>
      <button type="button" onClick={handleLogout}>
        Sair
      </button>
    </>
  );
};

export default Home;
