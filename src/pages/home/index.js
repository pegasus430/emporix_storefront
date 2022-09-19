import React, { useState, createContext, useContext} from "react";
import About from "./About"
import Service from "./Service";
import Category from "./Category";
import Product from "./Product";
import Subscribe from "./Subscribe"
import PageTemplate from "../pageTemplate";

const Home = () => {
    return (
        <PageTemplate title={'home'}>
            <About />
            <Service />
            <Category />
            <Product />
            <Subscribe />
        </PageTemplate>
    )
}

export default Home;