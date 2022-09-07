import React, { useState } from 'react'
import Delivery from "../../assets/Delivery.png"
import Shipping from "../../assets/free-shipping.png"
import Gift from "../../assets/gift.png"
import Warranty from "../../assets/warranty.png"

const Service = () => {
  
	const EachService = (props) => {
		return (
			<div className='text-white text-left md:text-center md:items-center'>
				<div className='w-full'><img src={props.src} className = "w-12 h-12 md:w-16 md:h-16 md:mx-auto"></img> </div>
				<div className='font-semibold text-[18px] md:text-[20px] leading-[24px] pt-6'>{props.title}</div>
				<div className='font-inter font-normal text-[14px] leading-[24px] md:text-[16px] pt-2 md:pt-4 text-left'>
					{props.content}
				</div>
			</div>
		)
	}

  	return (
		<div className = "home_service">
			
			<div>
				<EachService src = {Shipping} title="Free Shipping" content = "Free delivery on qualifying orders of &#163;50+" />
			</div>
			<div>
				<EachService src = {Delivery} title="Fast Delivery" content = "Magna massa acet turca tratto at fames." />
			</div>
			<div>
				<EachService src = {Gift} title="Loyalty Reward" content = "Tellus ornare at consequat ipsum, non labortis." />
			</div>
			<div>
				<EachService src = {Warranty} title="Extend Warranty" content = "Extend your warranty on selected items." />
			</div>
		</div>
    
  	)
}

export default Service