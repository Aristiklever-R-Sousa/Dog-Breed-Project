import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

import "./App.scss";

const App: React.FC = () => (
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

export default App;
