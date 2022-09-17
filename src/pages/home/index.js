import React from "react";
import Topbar from "../../components/Header/topbar";
import About from "./About"
import Service from "./Service";
import Category from "./Category";
import Product from "./Product";
import Subscribe from "./Subscribe"
import Footer from "../../components/Footer";


const Home = () => {
    return (
        <>
            <Topbar title={'home'} />
            <About />
            <Service />
            <Category />
            <Product />
            <Subscribe />
            <Footer />
        </>
        
    )
}

export default Home;