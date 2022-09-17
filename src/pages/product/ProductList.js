import React, { useState , useRef } from 'react'
import ProductListContent from './ProductListContent'
import ProductListFilterPanel from './ProductListFilterPanel'

const ProductList = ({handleSideFilterContent , categoryMenuList ,filterItems }) => {
    return (
        <div className="flex lg:space-x-12 ">
            <div className="flex-auto lg:w-[23%] hidden lg:block" >
                <ProductListFilterPanel handleSideFilterContent = {handleSideFilterContent } categoryMenuList = {categoryMenuList} filterItems = {filterItems} />
            </div>
            <div className="flex-auto lg:w-[77%] w-full">
                <ProductListContent />
            </div>
            

        </div>
    )
}

export default ProductList