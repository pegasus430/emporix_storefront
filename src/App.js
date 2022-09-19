import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import Login from "./pages/Login";
import Home from "./pages/home";
import Cart from './pages/cart';
import Checkout from './pages/checkout';
import ProductList,{ProductDetails} from "./pages/product";
import Account from './pages/account';
import AccountHome from './pages/account/AccountHome'
import MyAccount from './pages/account/MyAccount'
import AccountPersonalDetails from './pages/account/AccountPersonalDetails'
import AccountCompanyDetails from './pages/account/AccountCompanyDetails'
import AccountMyOrders from './pages/account/AccountMyOrders'
import AccountReplenishmentOrders from './pages/account/AccountReplenishmentOrders'
import AccountSavedCarts from './pages/account/AccountSavedCarts'
import AccountLocations from './pages/account/AccountLocations'
import AccountPayments from './pages/account/AccountPayments'
import AccountReviews from './pages/account/AccountReviews'
import { history } from "./helpers/history";
import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

function App() {

	const { user: currentUser } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	useEffect(() => {
		history.listen((location) => {
		  dispatch(clearMessage()); // clear message when changing location
		});
	  }, [dispatch]);

	  const logOut = () => {
		dispatch(logout());
	  };

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="product/:category" element={<ProductList />} />
				<Route path="product/details/:product_id" element={<ProductDetails />} />
				<Route path="login" element={<Login />} />
				<Route path="cart" element={<Cart />} />
				<Route path="checkout" element={<Checkout />} />
				<Route path="my-account" element={<Account />} >
					<Route index element={<AccountHome />} />
					<Route path="account-summary" element={<MyAccount />} />
					<Route path="personal-details" element={<AccountPersonalDetails />} />
					<Route path="company-details" element={<AccountCompanyDetails />} />
					<Route path="my-orders" element={<AccountMyOrders />} />
					<Route path="replenishment-orders" element={<AccountReplenishmentOrders />} />
					<Route path="saved-carts" element={<AccountSavedCarts />} />
					<Route path="locations" element={<AccountLocations />} />
					<Route path="payments" element={<AccountPayments />} />
					<Route path="reviews" element={<AccountReviews />} />
					
				</Route>
				
				{/*<Route path="contact" element={<Contact />} />
				<Route path="*" element={<NoPage />} /> */}   
				
			</Routes>
		</Router>

		
		
		
	)
}

export default App;
