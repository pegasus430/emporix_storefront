import React, { useState } from 'react'
import Slider from "react-animated-slider"
import ReactStars from 'react-stars'
import pen from "../../assets/products/pencil.png"
import hp_laser_printer from "../../assets/products/hp_laser_printer.png"
import comfort_chair from "../../assets/products/comfort_chair.png"
import pc_stand from "../../assets/products/pc_stand.png"
import stapler from "../../assets/products/stapler.png"

import "react-animated-slider/build/horizontal.css";
import './slider-animation.css'
import './product.css'

const EachProduct = (props) => {
    
    return (
        <div>
            <div className='w-full h-3 flex justify-between'>
                <div className={props.stock == "Low" ? "text-[#FFA800] font-inter font-bold text-[12px] pt-[6px]" : "text-[#4BCB67] font-inter font-bold text-[12px] pt-[6px]"}>
                    {props.stock} Stock
                </div>
                <div className='flex h-5'>
                    <ReactStars size={16} value = {props.rating} color2 = {'#FBB13C'}/>
                    ({props.total_count})
                </div>
            </div>
            <div className='pt-[47px] w-[260px] h-[240px] items-center mx-auto '>
                <img src={props.src} className = "h-full mx-auto" />
            </div>
            <div className='mt-11 w-full font-inter'>
                <div className='text-left text-[12px] leading-[12px] text-[#ACAEB2]'>
                    {props.category}
                </div>
                <div className='mt-2 text-left max-w-[240px] text-base font-bold'> 
                    {props.name}
                </div>
            </div>
            <div className={props.auth ? "w-full flex justify-between h-[56px] pt-2" : "w-full pt-2 text-left h-[56px] font-bold" } >
                {
                    props.auth ? (
                        <>
                            <div className='text-[12px] text-[#ACAEB2] w-[117px] text-left'>
                                List Price &euro; <del>{props.list_price} </del>
                            </div>
                            <div className='flex'>
                                <img src = {pen} className="w-4 h-4 mt-1" />
                                <div className='text-[20px] leading-[24px] font-bold ml-1'>
                                    &euro; {props.price}  <br />
                                    <span className='text-[12px] font-normal text-[#ACAEB2]'>(Incl. VAT)</span>
                                </div>
                            </div>
                        </>
                        
                    ):
                    (
                        <div className='text-base  pt-4'>
                            &#163; {props.price} <span className='text-[12px] font-normal text-[#ACAEB2]'>(Incl. VAT)</span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

const products = [
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

const ProductTitle = (props) => {
    return (
        <>
            {/* for dektop content */}
             <div className='hidden md:block md:pt-24 font-inter font-bold text-2xl text-center'>
                {!props.auth ? "Products For You" : "Browse Popular Products" }
            </div>

            {/* for mobile content */}
            <div className=' md:hidden pt-12 font-inter font-bold text-2xl text-center'>
                {!props.auth ? "Products For You" : "Browse Popular Products" }
            </div>
        </>
    )
}

const Product = () => {

    const [auth, setAuth] = useState(true)

  	return (
    	<div className = "home_product">
			
            <ProductTitle auth =  {auth} />
            
            {/* for mobile panel */}
            <div className='pt-12 md:hidden px-6 w-full  text-black max-w-md mx-auto'>
                
                <Slider className="slider-wrapper">
                    {products.map((item, index) => (
                        <div key={index} className="slider-content" >
                            <div className='w-full h-3 flex justify-between'>
                                <div className={item.stock == "Low" ? "text-[#FFA800] font-inter font-bold text-[12px] pt-[6px]" : "text-[#4BCB67] font-inter font-bold text-[12px] pt-[6px]"}>
                                    {item.stock} Stock
                                </div>
                                <div className='flex h-5'>
                                    <ReactStars size={16} value = {item.rating} color2 = {'#FBB13C'}/>
                                    ({item.count})
                                </div>
                            </div>
                            <div className='pt-[47px] w-[260px] h-[240px] items-center mx-auto '>
                                <img src={item.src} className = "h-full mx-auto" />
                            </div>
                            <div className='mt-11 w-full font-inter'>
                                <div className='text-left text-[12px] leading-[12px] text-[#ACAEB2]'>
                                    {item.category}
                                </div>
                                <div className='mt-2 text-left w-[240px] text-base font-bold'> 
                                    {item.name}
                                </div>
                            </div>
                            <div className={auth ? "w-full flex justify-between h-[56px] pt-2" : "w-full pt-2 text-left h-[56px] font-bold" } >
                                {
                                    auth ? (
                                        <>
                                            <div className='text-[12px] text-[#ACAEB2] w-[117px] text-left'>
                                                List Price <del>&euro; {item.list_price} </del>
                                            </div>
                                            <div className='flex'>
                                                <img src = {pen} className="w-4 h-4 mt-1" />
                                                <div className='text-[20px] leading-[24px] font-bold ml-1'>
                                                    &euro; {item.price}  <br />
                                                    <span className='text-[12px] font-normal text-[#ACAEB2]'>(Incl. VAT)</span>
                                                </div>
                                            </div>
                                        </>
                                        
                                    ):
                                    (
                                        <div className='text-base  pt-4'>
                                            &#163; {item.price} <span className='text-[12px] font-normal text-[#ACAEB2]'>(Incl. VAT)</span>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    ))} 
                </Slider>
                
            </div>

            {/* for desktop panel */}
            <div className='hidden md:pt-9 max-w-screen-2xl mx-auto md:px-[5%] lg:px-[10%] w-full md:h-[456px] md:grid md:grid-cols-4 md:gap-x-6 text-black'>
                {
                    products.map((item, index) => (
                            <EachProduct key={index} auth={auth} stock={item.stock}  rating={item.rating} total_count={item.count} src = {item.src}
                                category = {item.category} name={item.name} 
                                price = {item.price} list_price = {item.list_price} />
                        )
                    )
                }
                
            </div>
    	</div>
    
  	)
}

export default Product