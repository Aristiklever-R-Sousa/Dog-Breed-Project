import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import { CurrentUserProvider } from "./context/CurrentUserContext";

const RouterApp: React.FC = () => (
  <Router>
    <CurrentUserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="dogList" element={<Home />}>
          <Route path=":breed" element={<Home />} />
        </Route>
      </Routes>
    </CurrentUserProvider>
  </Router>
);

export default RouterApp;
