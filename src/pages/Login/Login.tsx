import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Client from "../../common/api";
// import { CurrentUserContext } from "../../context/CurrentUserContext";
import { UserType } from "../../types/User";

import "./login.scss";
import imageLoad from "../../assets/react.svg";

const Login: React.FC = () => {
  const token = localStorage.getItem("dog_breed_token");

  const navigate = useNavigate();
  // const { setCurrentUser } = useContext(CurrentUserContext);

  const [email, setEmail] = useState<string>("");
  const [isSubmiting, setIsSubmiting] = useState<boolean>(false);

  const handleError = (mess: string) => {
    alert(mess);
    setIsSubmiting(false);
  };

  const handleRequisition = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmiting(true);

    Client.post("/register", null, {
      headers: {
        email,
      },
    })
      .then((res: { data: { user: UserType } }) => {
        const { user } = res.data;

        console.log(user, "IN REQUISITION");

        if (user) {
          // if (setCurrentUser) setCurrentUser(user);
          // else console.log("CurrentUser Indefined");
          // STORING THE TOKEN RETURNED FOR THE ENDPOINT
          localStorage.setItem("dog_breed_token", user.token);

          setIsSubmiting(false);
          navigate("/dogList");
        } else handleError("An error ocurred");
      })
      .catch((err) => {
        handleError("An erro ocurred (log in console).");
        console.log(err);
        setIsSubmiting(false);
      });
  };

  const checkLogin = () => {
    if (token) navigate("/dogList");
  };

  useEffect(checkLogin, [token]);

  return (
    <div className="container">
      <form method="POST" onSubmit={handleRequisition}>
        <fieldset>
          <legend>Formulário aqui</legend>
          <div className="form-content">
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
              <button type="submit" value="Entrar">
                Entrar
              </button>
            </div>
          </div>
        </fieldset>
      </form>
      {isSubmiting && (
        <div className="loading-box">
          <img src={imageLoad} alt="Loading" />
        </div>
      )}
    </div>
  );
};

export default Login;
