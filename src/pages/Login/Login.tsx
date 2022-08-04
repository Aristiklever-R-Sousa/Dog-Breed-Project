import React, { useContext, useState } from "react";
import Client from "../../common/api";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { UserType } from "../../types/User";

import "./login.scss";

const Login: React.FC = () => {
  const userContext = useContext(CurrentUserContext);
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
        user.email = email;

        console.log(user, "REQUISITION");

        if (user) {
          if (userContext) userContext.setCurrentUser(user);
          // STORING THE TOKEN RETURNED FOR THE ENDPOINT
          localStorage.setItem("dog_breed_token", user.token);
        } else handleError("An error ocurred");
        setIsSubmiting(false);
      })
      .catch((err) => {
        handleError("An erro ocurred (log in console).");
        console.log(err);
        setIsSubmiting(false);
      });
  };

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
      {isSubmiting && <span>Está submetendo</span>}
    </div>
  );
};

export default Login;
