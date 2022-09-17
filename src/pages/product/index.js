import React from "react";
import {useParams} from 'react-router-dom'
import Topbar from "../../components/Header/topbar";
import Footer from "../../components/Footer";
import ProductPage from "./ProductPage";
import ProductDetailPage from './ProductDetailPage';

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

export const ProductDetails = () => {
    const {product_id} = useParams()

    return(
        <div className="min-w-[375px]">
            <Topbar title='' />
            <ProductDetailPage />
            <Footer />
        </div>
    )
}

export default ProductList;