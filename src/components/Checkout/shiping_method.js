import React, { useState }  from 'react'
import BpRadio from './radio'
import './checkout.css'

const ShippingMethod = ({active, shippingmode, date, price}) => {

    const [shipingActive, setShippingActive] = useState(active)
    return (
        
            <div className={shipingActive ? 'shipping_method_selected' : 'shipping_method'} >
                <div className='flex justify-between w-full'>
                    <div className='flex'>
                        <BpRadio onClick={() => setShippingActive(!shipingActive)} />
                        <div className='pt-2 md:pt-0'>
                            <div className=' font-bold text-base '>
                                {shippingmode} <span className='underline font-semibold text-[14px]'>+info</span>
                            </div>
                            <div className='desktop_only font-normal color-[#818385] pt-2'>
                                Expected arrival on: {date}
                            </div>
                        </div>
                    </div>
                    
                    <div className=' font-medium text-xl pt-2 md:pt-0'>
                        {price}
                    </div>
                </div>

                <div className='mobile_only font-normal color-[#818385] pt-2'>
                    Expected arrival on: {date}
                </div>
            </div>

            
        
        
    )
}

export default ShippingMethod