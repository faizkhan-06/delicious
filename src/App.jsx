import React from "react";
import Pages from "./pages/Pages";
import Category from "./pages/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import Logo from "./components/Logo";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Logo />
        <Search />
        <Category />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
