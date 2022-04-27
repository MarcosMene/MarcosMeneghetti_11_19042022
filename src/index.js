import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/generalstyle.css";
import {
  ROUTE_ABOUT,
  ROUTE_HOME,
  ROUTE_HOUSING,
  ROUTE_404,
} from "./constant/router";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Housing from "./Pages/Logements";
import Page404 from "./Pages/404";
import Footer from "./components/Footer";

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
