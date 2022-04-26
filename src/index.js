import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/generalstyle.css";
import { ROUTE_ABOUT, ROUTE_HOME, ROUTE_HOUSING } from "./constant/router";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Housing from "./Pages/Logements";
import Footer from "./components/Footer";
import Page404 from "./Pages/404";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path={ROUTE_HOME} element={<Home />} />
        <Route exact path={ROUTE_ABOUT} element={<About />} />
        <Route exact path={ROUTE_HOUSING} element={<Housing />} />
        <Route exact path="*" element={<Page404 />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
