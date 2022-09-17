import React, { useState } from 'react'
import ReactStars from 'react-stars'
import pen from "../../assets/products/pencil.png"

const Product = (props) => {
    
    return (
        <div className="mx-3">
            <div className='w-full h-3 flex justify-between '>
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
export default Product