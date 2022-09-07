import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/home";
import ProductList from "./pages/product";
import Account from './pages/account';
import MyAccount from './pages/account/MyAccount'
import AccountPersonalDetails from './pages/account/AccountPersonalDetails'
import AccountCompanyDetails from './pages/account/AccountCompanyDetails'
import AccountMyOrders from './pages/account/AccountMyOrders'
import AccountReplenishmentOrders from './pages/account/AccountReplenishmentOrders'

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="product/:category" element={<ProductList />} />
				<Route path="my-account" element={<Account />} >
					<Route index element={<MyAccount />} />
					<Route path="personal-details" element={<AccountPersonalDetails />} />
					<Route path="company-details" element={<AccountCompanyDetails />} />
					<Route path="my-orders" element={<AccountMyOrders />} />
					<Route path="replenishment-orders" element={<AccountReplenishmentOrders />} />
				</Route>
				{/*<Route path="contact" element={<Contact />} />
				<Route path="*" element={<NoPage />} /> */}   
				
			</Routes>
		</Router>

		
		
		
	)
}

export default App;
