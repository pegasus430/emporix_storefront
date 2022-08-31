import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Topbar from "./components/Header/topbar";
import About from "./components/About/about"
import Service from "./components/Service/Service";
import Category from "./components/category/category";
import Product from "./components/Products/product";
import Subscribe from "./components/Subscribe/subscribe"
import Footer from "./components/Footer/footer";

function App() {
  return (
      <>
        <Topbar />
        <About />
        <Service />
        <Category />
        <Product />
        <Subscribe />
        <Footer />
      </>
      
    
  )
}

export default App;
