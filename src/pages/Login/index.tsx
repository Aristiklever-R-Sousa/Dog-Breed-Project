import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CurrentUserContext } from "../../context/CurrentUserContext";

import "./style.scss";
import imageLoad from "../../assets/react.svg";
import Client from "../../common/api";
import { ResType } from "../../types/User";

const Login: React.FC = () => {
  // const token = localStorage.getItem("dog_breed_token");

  const navigate = useNavigate();
  const { authLoading, setAuthLoading, setCurrentUser, checkLogin } =
    useContext(CurrentUserContext);

  const [email, setEmail] = useState<string>("");

  const handleError = (mess: string) => alert(mess);

  const authenticate = () => {
    setAuthLoading(true);
    Client.post("/register", null, {
      headers: {
        email,
      },
    })
      .then((res: { data: ResType }) => {
        const { user } = res.data;
        setAuthLoading(false);

        if (user) {
          setCurrentUser({ email, token: user.token });
          // STORING THE TOKEN RETURNED FOR THE ENDPOINT
          localStorage.setItem("dog_breed_token", user.token);
          navigate("/dogList");
        } else handleError("Un error ocurried in checkLogin...");
      })
      .catch((err) => {
        handleError("An erro ocurred (log in console).");
        console.log(err);
      })
      .finally(() => {
        setAuthLoading(false);
      });
  };

  const handleRequisition = (e: React.FormEvent) => {
    e.preventDefault();
    checkLogin();
    authenticate();
  };

  useEffect(() => console.log({ authLoading }), [authLoading]);

  return (
    <div className="container">
      <form method="POST" onSubmit={handleRequisition}>
        <fieldset>
          {/* <legend>Formulário aqui</legend> */}
          <div className="form-content">
            <h2>Entrar</h2>
            <div className="box-element">
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                id="email"
                className="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="box-element">
              <button type="submit" value="Entrar" className="nav-button">
                Entrar
              </button>
            </div>
          </div>
        </fieldset>
      </form>
      {authLoading && (
        <div className="loading-box">
          <img src={imageLoad} alt="Loading" />
        </div>
      )}
    </div>
  );
};

export default Login;
