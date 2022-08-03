import React from "react";

// interface ILogin {}
import "./login.scss";

const Login: React.FC = () => {
  const handleRequisition = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Requisitando: ");
  };

  return (
    <div className="container">
      <form method="POST">
        <fieldset>
          <legend>Formulário aqui</legend>
          <div className="form-content">
            <div className="box-element">
              <label htmlFor="email">Email</label>
              <br />
              <input type="email" id="email" className="email" />
            </div>
            <div className="box-element">
              <button type="submit" value="Entrar" onClick={handleRequisition}>
                Entrar
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
