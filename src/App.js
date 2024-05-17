import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import ListPage from "./pages/ListPage/ListPage";
import { connect } from "react-redux";

import "./reset.css";
import "./common.css";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/list/:user" element={<ListPage />} />
      </Routes>
    </div>
  );
};

export default connect()(App);
