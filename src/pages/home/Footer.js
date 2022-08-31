import React, { useState } from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import facebook from '../../assets/facebook.png'

const Mobile_footer = () => {
	return (
		<>
			<ul className='md:hidden text-[#FBB13C] font-inter font-bold text-base px-6'>
				<li className='py-4 border-b'>About Us</li>
				<li className='py-4 border-b'>Support</li>
				<li className='py-4 border-b'>My Account</li>
				<li className='py-4 border-b'>Contact</li>
			</ul>
			<div className='md:hidden pt-4 pl-6 text-base text-white font-light'>
				Call Us: +44123645678
			</div>
			<div className='md:hidden pt-6 pl-6  text-white flex'>
				<div>
					<img src={facebook} />
				</div>
				
				<div className="pl-6 mt-[-2px]">
					<AiOutlineInstagram size={30} />
				</div>
				
			</div>
		</>
	)
}

const Dektop_footer = () => {
 return (
	<div className='hidden  md:pt-24 w-[60%] mx-auto md:flex'>
		<div>
			<ul className='font-inter text-[16px] leading-[22px] text-white'>
				<li className='text-[#FBB13C] font-bold '>About Us</li>
				<li className=' font-light pt-4'>Who we are</li>
				<li className=' font-light pt-4'>Quality in the details</li>
				<li className=' font-light pt-4'>Customer Reviews</li>
				
			</ul>
		</div>
		<div className='pl-[11%]'>
			<ul className='font-inter text-[16px] leading-[22px] text-white'>
				<li className='text-[#FBB13C] font-bold '>Support</li>
				<li className=' font-light pt-4'>Delivery</li>
				<li className=' font-light pt-4'>Returns</li>
				<li className=' font-light pt-4'>F.A.Q.</li>
				<li className=' font-light pt-4'>Customer Support</li>
				
			</ul>
		</div>
		<div className='pl-[11%]'>
			<ul className='font-inter text-[16px] leading-[22px] text-white'>
				<li className='text-[#FBB13C] font-bold '>My Account</li>
				<li className=' font-light pt-4'>Sign In</li>
				<li className=' font-light pt-4'>Register</li>
				<li className=' font-light pt-4'>Quick Order</li>
				<li className=' font-light pt-4'>My orders</li>
				
			</ul>
		</div>
		<div className='pl-[11%]'>
			<ul className='font-inter text-[16px] leading-[22px] text-white'>
				<li className='text-[#FBB13C] font-bold '>Contact</li>
				<li className=' font-light pt-4'>Call Us: +44123645678</li>
			</ul>
			<div className='pt-6  text-white flex'>
				<div>
					<img src={facebook} />
				</div>
				
				<div className="pl-6 mt-[-2px]">
					<AiOutlineInstagram size={30} />
				</div>
		
			</div>

		</div>
	</div>
 )
}

const Footer = () => {
  	return (
		<div className = " bg-[#214559] w-full h-[358px] md:h-[342px] border-t-[4px] border-[#FBB13C]">
			<Mobile_footer />
			<Dektop_footer />
			

		</div>
    
  	)
}

export default Footer