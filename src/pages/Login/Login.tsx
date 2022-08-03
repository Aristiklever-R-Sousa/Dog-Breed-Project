import React from "react";

// interface ILogin {}

const Login: React.FC = () => (
  <form action="">
    <div>
      <label htmlFor="email" />
      <input type="email" name="email" id="email" />
    </div>
    <div>
      <button type="submit" value="Entrar">
        Entrar
      </button>
    </div>
  </form>
);

export default Login;
