import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

import "bootstrap/dist/css/bootstrap.min.css"; // for react-bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; // for bootstrap
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"; // for bootstrap
import Header from "./components/Header";

import './App.css'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
