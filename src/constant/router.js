// Global variables for Routes

// export const ROUTE_HOME = "/";
// export const ROUTE_ABOUT = "/about/";
// export const ROUTE_HOUSING = "/housing/:id";
// export const ROUTE_404 = "/*";

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Housing from "../Pages/Housings";
import Page404 from "../Pages/404";

const routesPath = (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/housing/:id" element={<Housing />}></Route>
    <Route path="*" element={<Page404 />} />
  </Routes>
);

export default routesPath;
