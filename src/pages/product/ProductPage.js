import React, { useState }  from 'react'
import { Link }             from 'react-router-dom'
import adjust               from '../../assets/adjust.png'
import MobileFilterpanel    from './MobileFilterPanel'
import SideFilterContent    from './SideFilterContent'
import hp_laser_printer     from "../../assets/products/hp_laser_printer.png"
import comfort_chair        from "../../assets/products/comfort_chair.png"
import pc_stand             from "../../assets/products/pc_stand.png"
import stapler              from "../../assets/products/stapler.png"
import ProductList          from './ProductList'

import './product.css'
const categoryMenuList = [
    {
        'title': 'Office Chairs',
        'items' : [
            {
                "title" : "All" ,
                "items" : [], 
                'total' : 280
            },
            {
                "title" : "Executive Office Chairs" ,
                "items" : [], 
                'total' : 23
            },
            {
                "title" : "Computer Office Chairs" ,
                "items" : [], 
                'total' : 23
            },
            {
                "title" : "Mesh Office Chairs" ,
                "items" : [], 
                'total' : 23
            },
            {
                "title" : "Draughtsman Chairs" ,
                "items" : [], 
                'total' : 23
            },
        ],
        'toal' : 280

    } ,
    {
        'title': 'Meeting Chairs',
        'items' : [
        {
                "title" : "Meeting & Boardroom Chairs" ,
                "items" : [], 
                'total' : 23
        },
        {
                "title" : "Occasional Seating" ,
                "items" : [], 
                'total' : 23
        },
        {
                "title" : "Stacking Chairs" ,
                "items" : [], 
                'total' : 23
        },
        {
                "title" : "Waiting Room Chairs" ,
                "items" : [], 
                'total' : 23
        },
        ],
        'total' : 242
    } ,
    {
        'title': 'Ergonomic Chairs',
        'items' : [
            {
                "title" : "Bariatric Office Chairs" ,
                "items" : [],
                'total' : 25
            },
            {
                "title" : "Posture Chairs" ,
                "items" : [],
                'total' : 25
            },
            {
                "title" : "Kneeling Chairs" ,
                "items" : [],
                'total' : 25
            },
        ],
        'total' : 343

    } ,
    {
     'title': 'Armchairs and Stools',
     'items' : [
         {
           "title" : "Armchairs" ,
           "items" : [],
           'total' : 25
         },
         {
           "title" : "Stools" ,
           "items" : [],
           'total' : 25
         },
         {
           "title" : "Industrial Stools" ,
           "items" : [],
            'total' : 25
         },
     ],
     'total' : 75
    } ,
 ]

 const category_products = [
    {
        stock : "Low", 
        rating : 4, 
        count : 8 ,
        src : hp_laser_printer ,
        category : "TY2-B#M74A",
        name : "HP LaserJet 1*500-sheet Paper Feeder and Cabinet",
        price : "341.89",
        list_price : "389.50"
    } ,
   
    {
        stock : "In", 
        rating : 4, 
        count : 8 ,
        src : pc_stand ,
        category : "BB2-B3M987",
        name : "RP9 Retail Compact Stand Silver PC Multimedia stand",
        price : "84.89",
        list_price : "94.10"
    } ,
    {
        stock : "In", 
        rating : 4, 
        count : 8 ,
        src : stapler ,
        category : "BB2-B3M987",
        name : "Zenith Plier stapler 548/E Silver",
        price : "27.50",
        list_price : "34.99"
    } ,
    {
        stock : "Low", 
        rating : 4, 
        count : 8 ,
        src : comfort_chair ,
        category : "TY2-B#M74A",
        name : "Comfort Ergo 2-Lever Operator Chairs",
        price : "53.59",
        list_price : "59.99"
    } ,
]

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
        console.log("data" ,data)
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
                    <FilterButton filtercount={4} onClick={() => {  setShowFilterContentForMobile(true)}} />

                    
                <ProductList handleSideFilterContent={handleSideFilterContent} categoryMenuList = {categoryMenuList} filterItems = {filterItems} />

            </div>
        </div>
        </>
    )
}

export default ProductPage

