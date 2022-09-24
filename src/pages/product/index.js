import React , { useState, createContext, useContext} from "react";
import {useParams} from 'react-router-dom'

import ProductPage from "./ProductPage";
import ProductDetailPage from './ProductDetailPage';
import Layout from "../Layout";
import products from './products'
import categoryService from "../../services/product/category.service";
import {product_list_page} from '../../constants/page'

const ProductList = () => {
    const {maincategory, subcategory, category} = useParams()
    const [title, setTitle] = useState('')
    const [categoryMenuList, setCategoryMenuList] = useState([])
    
    return (
        <Layout title={title} page={product_list_page}  data={{maincategory, subcategory, category}} actions={{setTitle, setCategoryMenuList}}>
            <ProductPage categoryMenuList={categoryMenuList}/>
        </Layout>
    )
}

export const ProductDetails = () => {
    const {product_id} = useParams()

    return(
        <Layout title={""}>
            <ProductDetailPage product={products[product_id-1]}/>
        </Layout>
    )
}

export default ProductList;