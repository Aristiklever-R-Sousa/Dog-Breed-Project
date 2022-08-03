import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CurrentUserProvider } from "./context/CurrentUserContext";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <CurrentUserProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CurrentUserProvider>
);
