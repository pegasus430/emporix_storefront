import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/home";


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        
      </Routes>
    </Router>

      
      
    
  )
}

export default App;
