import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Topbar from "./components/Header/topbar";
import About from "./components/About/about"
import Service from "./components/Service/Service";
function App() {
  return (
      <>
        <Topbar />
        <About />
        <Service />
      </>
      
    
  )
}

export default App;
