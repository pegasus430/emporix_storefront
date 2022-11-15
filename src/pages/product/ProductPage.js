import React, { useState }  from 'react'
import adjust               from '../../assets/adjust.png'
import MobileFilterpanel    from './MobileFilterPanel'
import SideFilterContent    from './SideFilterContent'
import ProductList          from './ProductList'
import './product.css'

const FilterButton = (props) => {
    return (
        <div className="lg:hidden w-[327px] mb-12 h-12 mx-auto bg-[#214559] text-white flex items-center" onClick={props.onClick}>
            <div className='mx-auto flex'>
                <img src={adjust} className="w-4 h-4 mt-1" />
                <span className='px-4'>Filters</span>
                <span>[{props.filtercount}]</span>
            </div>
            
        </div>
    )
}

const ProductPage = () =>  {
    const [showFilterContentForMobile, setShowFilterContentForMobile] = useState(false)
    const [showSideFilterContnet, setShowSideFilterContent] = useState(false)
    const [filterItems, setFilterItems] = useState([])
    
    const setFilterItemFunc = data => {
        setFilterItems(data)
    };
    
    const handleMobileFilterContentClose = () => {
        setShowFilterContentForMobile(false)
    }
    const handleSideFilterContent = () => {
        
        setShowSideFilterContent(!showSideFilterContnet)
    }
    return (
        <>
        {
            showFilterContentForMobile && (
                <MobileFilterpanel closeNav ={handleMobileFilterContentClose} />
            )
        }
        <div className='md:pt-60 pt-20 px-4 md:px-24 pb-12'>
            <div className={`overlay ${showSideFilterContnet ? 'visible' : '' }`} onClick={handleSideFilterContent} />
            <SideFilterContent 
                isOpen={showSideFilterContnet} 
                toggleSidebar={handleSideFilterContent} 
                setFilterItemFunc = {setFilterItemFunc}
            />
            <div className='md:pt-24 pt-12 max-w-screen-xl mx-auto'>
                <FilterButton 
                    filtercount={4} 
                    onClick={() => {  setShowFilterContentForMobile(true)}} 
                />
                <ProductList 
                    handleSideFilterContent={handleSideFilterContent}  
                    filterItems = {filterItems} 
                />
            </div>
        </div>
        </>
    )
}

export default ProductPage

