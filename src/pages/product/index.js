import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import ProductPage from "./ProductPage";
import ProductDetailPage from './ProductDetailPage';
import Layout from "../Layout";
import {LoadingCircleProgress1} from '../../components/Utilities/progress'
import productService from '../../services/product/product.service'
import priceService from '../../services/product/price.service'
import {availabilityDataSelector} from '../../redux/slices/availabilityReducer'
import {useSelector} from 'react-redux'
import {minProductInStockCount} from '../../constants/page'
import categoryService from "../../services/product/category.service";

const ProductList = () => {
    return (
        <Layout title='Product' >
            <ProductPage />
        </Layout>
    )
}

export const ProductDetails = () => {
    const {productId} = useParams()
    const [product, setProduct] = useState({
        loading: true,
        data: {}
    })
    const availability = useSelector(availabilityDataSelector)

    useEffect(()=> {
        const getProduct = async (productId) => {
            let res = await productService.getProductsWithIds([productId])
            // Get Product's Price.
            let prices = await priceService.getPriceWithProductIds([productId])
            /* Add Category Infromation */
            const category= await categoryService.getRetrieveAllCategoriesWithResoureceId(productId)
            let categoies = await categoryService.getAllParentCategories(category.data[0]['id'])
            categoies = categoies.data
            categoies.push(category.data[0])
            let rootCategory, subCategory
            let childCategories = {}
            
            for(let c in categoies){
                if(categoies[c].parentId === undefined) rootCategory = categoies[c]
                else childCategories[categoies[c].parentId] = categoies[c]
            }

            let productCategory = []
            productCategory.push(rootCategory.name)
            
            let loop = 0
            while(loop < 2){
                subCategory = childCategories[rootCategory.id]
                if(subCategory === undefined) break
                rootCategory = subCategory
                productCategory.push(subCategory.name)
                loop++
            }

            res = res[0]
            res.src = (res.media[0] === undefined? '':res.media[0]['url'])
            let stock, stockLevel = 0

            if(availability['k'+res.id] === undefined) stock = "Out Of"
            else{
                stockLevel = parseInt(availability['k'+res.id]['stockLevel'])
                if(stockLevel < minProductInStockCount) stock = "Low"
                else stock = "In"
            }

            // Set price...
            if(prices.length > 0) res.price = prices[0]

            res.category = productCategory
            res.stock = stock
            res.estimatedDelivery = "23.05.2022"
            res.subImages = []
            res.rating = 4
            res.count = 4
            res.productCount = stockLevel
            res.media.map((row,index) => {
                if(!index) return
                res.subImages.push(row['url'])
                return
            })
            
            setProduct({
                loading: false,
                data: res
            })
            
        }
        getProduct(productId)
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