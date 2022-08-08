import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

const RouterApp: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="dogList" element={<Home />}>
        <Route path=":breed" element={<Home />} />
      </Route>
    </Routes>
  </Router>
);

export default RouterApp;
