import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Topbar from "./components/Header/topbar";
import About from "./components/About/about"
import Service from "./components/Service/Service";
import Products from "./components/products/Products";
function App() {
  return (
      <>
        <Topbar />
        <About />
        <Service />
        <Products />
      </>
      
    
  )
}

export default App;
