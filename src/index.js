import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ROUTE_ABOUT,
  ROUTE_HOME,
  ROUTE_HOUSING,
  ROUTE_404,
} from "./constant/router";
import "./styles/generalstyle.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Housing from "./Pages/Logements";
import Page404 from "./Pages/404";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path={ROUTE_HOME} element={<Home />} />
        <Route path={ROUTE_ABOUT} element={<About />} />
        <Route exact path={ROUTE_HOUSING} element={<Housing />} />
        <Route path={ROUTE_404} element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
