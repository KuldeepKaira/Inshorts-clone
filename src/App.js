// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import NewsPage from "./components/NewsPage/NewsPage";
import SideBar from "./components/NavBar/SideBar.js";
import { Fragment } from "react/cjs/react.production.min";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <Fragment>
      <div className="App">
        <SideBar className="sidebar" />
        <NavBar className="navbar" />
        <NewsPage />
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
