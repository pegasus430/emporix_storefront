import React from "react";
import {useParams} from 'react-router-dom'
import Topbar from "../../components/Header/Topbar";
import Footer from "../../components/Footer";
import ProductPage from "./ProductPage";

const ProductList = () => {
    const {category } = useParams()
    // console.log( category)
    return (
        <div className="min-w-[375px]">
            <Topbar title={category} />
            <ProductPage />
            <Footer />
        </div>
        
    )
}

export default ProductList;