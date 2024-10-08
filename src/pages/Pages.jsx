import React from "react";
import Home from "./Home";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";

const Pages = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element=<Home /> />
        <Route path="/cuisine/:type" element=<Cuisine /> />
        <Route path="/search/:search" element=<Searched /> />
        <Route path="/recipe/:id" element=<Recipe /> />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
