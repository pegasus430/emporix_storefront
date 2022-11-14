import React, { useState }  from 'react'
import CheckoutCotent from './CheckoutContent'
import CheckoutActionPanel from './CheckoutActionPanel'
import {Link} from 'react-router-dom'

import './checkout.css'

import { homeUrl } from '../../services/service.config'

const FinalCheckout = ({setFinal}) => {
    return (
        <div className='font-inter'>
            <div className='border-b pb-12'>
                <div className='md:flex justify-between'>
                    <div className='font-semibold text-[32px]'>
                        Your Order has been received
                    </div>
                    <div>
                        <button className='bg-[#214559] text-[white] px-6 py-0 h-[50px] text-[14px] leading-[14px] md:w-[400px] w-full'>VIEW INVOICE</button>
                    </div>
                </div>
                <div className='pt-12 text-base'>
                    <span className='font-bold'>
                        Thank you for your purchase!
                    </span><br />
                    <span>
                        Your order number is: 
                        <span className='font-bold'>
                            #80932203-922-00
                        </span>
                    </span>
                    
                </div>
            </div>
            <div className='pt-12 grid md:grid-cols-2 grid-cols-1'>
                <div className='md:border-r md:border-b-0 border-b md:pr-20 pb-12'>
                    <div className='font-semibod text-2xl'>Order Status</div>
                    <div className='pt-6'>
                        <span>You will soon receive an order confirmation e-mail with details of your order and a link to track its progress. </span>
                        <br />
                        <div className='pt-6'>
                            <span>You can check status of your order by using our delivery status feature. </span>
                        </div>
                    </div>

                </div>
                <div className='md:pl-12 md:pt-0 pt-12'>
                    <div className='font-semibod text-2xl'>Support</div>
                    <div className='pt-6'>
                        Primary contacts for any questions
                    </div>
                    <div className='pt-6'>
                        <span>Atom HQ</span> <br />
                        <span>Marsstraße 43,</span> <br />
                        <span>80335 München,</span> <br />
                        <span>Germany</span> <br />
                    </div>  
                    <div className='pt-6'>
                        support@atom.com
                    </div>
                </div>
            </div>
            <div className='pt-12 w-full'>
                <div className=' mx-auto md:w-60  w-full'>
                    <Link to= {homeUrl()} >
                        <button onClick={()=> setFinal(false)} className='bg-[#214559] text-[white] px-6 py-0 h-12 file:text-[14px] leading-[14px] md:w-60 w-full'>BACK TO HOME PAGE</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const CheckoutPage = () => {
    const [status, setStatus] = useState('shipping')
    const [final, setFinal] = useState(false)
    return (
        <div className="checkout-page-wrapper ">
            <div className="checkout-page-content">
                <div className="gap-12 lg:flex grid grid-cols-1">
                    
                    {final===false?
                        <>
                            <CheckoutCotent status={status}/>
                            <CheckoutActionPanel status={status} setStatus={setStatus} setFinal={setFinal}/>
                        </>:
                        <FinalCheckout setFinal={setFinal}/>
                    }    
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage
