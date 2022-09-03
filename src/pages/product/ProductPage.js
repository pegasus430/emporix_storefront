import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import adjust from '../../assets/adjust.png'
import { AiOutlineClose } from 'react-icons/ai'
import MobileFilterpanel from './MobileFilterPanel'
import SideFilterContent from './SideFilterContent'
import './product.css'

const filterItem = [
    {
        'title' : 'Arm Type',
        'items' : [
            'Adjustable Arms',
            'Fixed',
            'No Arms',
            'With Arms',
        ]
    },
    {
        'title' : 'Brand',
        'items' : [
            'Equipe',
            'Jysk',
            'Jenson',
            'Techly',
            'Hermann Miller',
            'Botth'
        ]
    },
    {
        'title' : 'Material',
        'items' : [
            'Leather',
            'Fabric',
            'Faux Leather',
            'Mesh',
        ]
    },
    {
        'title' : 'Back Height',
        'items' : [
            'High',
            'Medium',
        ]
    },
]

const FilterButton = (props) => {
    return (
        <div className="md:hidden w-[327px] h-12 mx-auto bg-[#214559] text-white flex items-center" onClick={props.onClick}>
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
    
    const handleMobileFilterContentClose = () => {
        setShowFilterContentForMobile(false)
    }

    const handleSideFilterContent = () => {
        console.log("clicked")
        setShowSideFilterContent(!showSideFilterContnet)
    }

    return (
        <div className='md:pt-60 pt-20 px-4 md:pl-24'>
            <div className={`overlay ${showSideFilterContnet ? 'visible' : '' }`} onClick={handleSideFilterContent} />

            
            <SideFilterContent isOpen={showSideFilterContnet} toggleSidebar={handleSideFilterContent} />
            <div className='md:pt-24 pt-12 max-w-screen-xl'>
                    <FilterButton filtercount={4} onClick={() => {  setShowFilterContentForMobile(true)}} />

                    {
                        showFilterContentForMobile && (
                            <MobileFilterpanel onClick={handleMobileFilterContentClose} />
                        )
                    }
                <button className='hidden md:block' onClick={handleSideFilterContent}>
                    fitler
                </button>
                

            </div>
        </div>
    )
}

export default ProductPage

