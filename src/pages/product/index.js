import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import ProductPage from "./ProductPage";
import ProductDetailPage from './ProductDetailPage';
import Layout from "../Layout";
import {LoadingCircleProgress1} from '../../components/Utilities/progress'
// import products from './products'
import productService from '../../services/product/product.service'
import {availabilityDataSelector} from '../../redux/slices/availabilityReducer'
import {useSelector} from 'react-redux'
import {min_product_in_stock_count} from '../../constants/page'

const ProductList = () => {
    
    return (
        <Layout title='Product' >
            <ProductPage />
        </Layout>
    )
}

export const ProductDetails = () => {
    const {product_id} = useParams()
    const [product, setProduct] = useState({
        loading: true,
        data: {}
    })
    const availability = useSelector(availabilityDataSelector)

    useEffect(()=> {
        
        const getProduct = async (product_id) => {
            let res = await productService.getProductsWithIds([product_id])
            res = res.data[0]
            
            res.src = (res.media[0]==undefined?"":res.media[0]['url'])
            
            let stock, stockLevel = 0
            if(availability['k'+res.id] === undefined) stock = "Ouf Of"
            else{
                stockLevel = parseInt(availability['k'+res.id]['stockLevel'])
                if(stockLevel < min_product_in_stock_count) stock = "Low"
                else stock = "In"
            }
                

            res.stock = stock
            res.estimated_delivery = "23.05.2022"
            res.price = "127.50"
            res.list_price = "149.99"
            res.sub_images = []
            res.rating = 4
            res.count = 4
            res.product_count = stockLevel
            res.media.map((row,index) => {
                if(!index) return
                res.sub_images.push(row['url'])
                return
            })
            setProduct({
                loading: false,
                data: res
            })
        }
        getProduct(product_id)
    },[])

    return(
        <Layout title={""}>
            {product.loading?
                <LoadingCircleProgress1 />:
                <ProductDetailPage product={product.data}/>
            }
            
        </Layout>
    )
}

export default ProductList;