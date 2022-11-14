import React  from "react";
import './quickorder.css'

const QuickOrderSelection = () => {
    return (
        <div className='md:w-[30%] w-full md:pt-0 pt-10'>
            <div className="font-medium text-xl">
                Add from file
            </div>
            <div className="pt-6 text-black">
                File must be in .csv from and include 'Code' and 'QTY' columns.
                <span className="underline font-bold text-base">Download sample</span>
            </div>
            <div className="pt-6">
                <button className="quickorder-selection-btn" > SELECT FILE</button>
            </div>
            <div className="font-medium text-xl pt-12">
                Enter multiple Product Codes
            </div>
            <div className="pt-6">
                <textarea className="w-full h-[126px] p-4 border-black border" placeholder="Text Area"/>
            </div>
            <div className="pt-6 text-sm">
                Use commas or paragraph to separate SKUs.
            </div>
            <div className="pt-6">
                <button className="quickorder-selection-btn" > ADD TO LIST</button>
            </div>
            <div className="mobile_only pt-12">
                <button className="quickorder-add-to-cart-btn" >ADD TO CART</button> 
            </div>
        </div>
    )
}

export default QuickOrderSelection;