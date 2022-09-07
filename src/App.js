import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/home";
import ProductList from "./pages/product";
import MyAccount from './pages/account';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="product/:category" element={<ProductList />} />
				<Route path="my-account" element={<MyAccount />} />
				{/*<Route path="contact" element={<Contact />} />
				<Route path="*" element={<NoPage />} /> */}   
				
			</Routes>
		</Router>

		
		
		
	)
}

export default App;
