import React , { useState, createContext, useContext} from "react";
import {useParams} from 'react-router-dom'

import ProductPage from "./ProductPage";
import ProductDetailPage from './ProductDetailPage';
import PageTemplate from "../pageTemplate";
import products from './products'

const ProductList = () => {
    const {category } = useParams()

    return (
        <PageTemplate title={category}>
            <ProductPage />
        </PageTemplate>
    )
}

export const ProductDetails = () => {
    const {product_id} = useParams()

    return(
        <PageTemplate title={""}>
            <ProductDetailPage product={products[product_id-1]}/>
        </PageTemplate>
    )
}

export default ProductList;