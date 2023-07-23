
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Category from "./Category";
import Cart from "./Cart";
import Singleproduct from "./Singleproduct";
import Errorpage from "./Errorpage";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Category" element={<Category />}/>
        <Route path="/Cart" element={<Cart />}/>
        <Route path="/Singleproduct" element={<Singleproduct />}/>
        <Route path="/*" element={<Errorpage />}/>
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
