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
import categoryService from "../../services/product/category.service";

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
            
            /* Add Category Infromation */
            const category= await categoryService.getRetrieveAllCategoriesWithResoureceId(product_id)
            
            let categoies = await categoryService.getAllParentCategories(category.data[0]['id'])
            categoies = categoies.data
            categoies.push(category.data[0])
            let root_category, sub_category
            let child_categories = {}
            
            for(let c in categoies){
                if(categoies[c].parentId === undefined) root_category = categoies[c]
                else child_categories[categoies[c].parentId] = categoies[c]
            }
            let product_category = []
            product_category.push(root_category.name)
            
            let loop = 0
            while(loop < 2){
                sub_category = child_categories[root_category.id]
                if(sub_category === undefined) break
                root_category = sub_category
                product_category.push(sub_category.name)
                loop++
            }

            res = res.data[0]
            res.src = (res.media[0]==undefined?"":res.media[0]['url'])
            
            let stock, stockLevel = 0
            if(availability['k'+res.id] === undefined) stock = "Ouf Of"
            else{
                stockLevel = parseInt(availability['k'+res.id]['stockLevel'])
                if(stockLevel < min_product_in_stock_count) stock = "Low"
                else stock = "In"
            }
                
            res.category = product_category
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