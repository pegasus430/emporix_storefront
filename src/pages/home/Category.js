import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import landing_bg from '../../assets/landing_bg.png'
import intro from '../../assets/intro.png'
import desk from '../../assets/category/desk.png'
import seating from '../../assets/category/seating.png'
import storage from '../../assets/category/storage.png'
import printer from '../../assets/category/printer.png'
import { PrinterIcon } from '@heroicons/react/solid'
const EachCategory = (props) => {
    return (
        <div>
            <img src = {props.src} className="w-full h-[240px]" />
            <div className='pl-6 pt-6 font-inter font-semibold text-[20px] leading-[32px]'>
                {props.title}
            </div>
            <div className="px-6 pt-[10px] font-normal text-base">
                {props.content}
            </div>
        </div>
    )
}

const Category = () => {

  	return (
    	<div className = "home_category">
			<div className='desktop_only md:pt-24 font-inter font-bold text-2xl text-center'>
                Explore our products
            </div>
            <div className='desktop_only md:pt-4 font-inter font-normal text-base text-center'>
                Browse our catalogue and find the right product for you
            </div>
            <div className='home_cat_content' >
                <Link to={`product/Seating`}>
                    <EachCategory src = {seating} title="Seating" content = "Tellus ornare at consequat ipsum,non lobortis" />
                </Link>
                
                <EachCategory src = {desk} title="Desk and Workspaces" content = "Tellus ornare at consequat ipsum,non lobortis" />
                <EachCategory src = {storage} title="Storage" content = "Tellus ornare at consequat ipsum,non lobortis" />
                <EachCategory src = {printer} title="Printers, Ink and Toner" content = "Tellus ornare at consequat ipsum,non lobortis" />
            </div>

    	</div>
    
  	)
}

export default Category