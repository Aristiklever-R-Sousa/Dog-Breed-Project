import React, { useContext } from "react";
import "./App.scss";
import { CurrentUserContext } from "./context/CurrentUserContext";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

const App: React.FC = () => {
  const userContext = useContext(CurrentUserContext);

  const content = () => {
    console.log(userContext);
    if (userContext !== null) {
      if (userContext.authLoading) {
        return <div>Charging...</div>;
      }
      if (!userContext.currentUser) return <Login />;
      return <Home />;
    }
    return <Login />;
  };

  return content();
};

export default App;
