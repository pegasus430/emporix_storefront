import React, { useState } from 'react'
import landing_bg from '../../assets/landing_bg.png'
import intro from '../../assets/intro.png'

const About = () => {

  	return (
    	<div style={{backgroundImage : `url(${landing_bg})`  }} className = "home_about">
			<div className='px-6 md:pl-16 pt-[48px] md:pt-[363px]  '>
				<div className='text-[40px] md:text-[56px] font-inter font-semibold leading-[48px] md:leading-[64px]'>
					Tailored <nobr className="text-[#FBB13C]">Office Solutions</nobr><br />
					for your business
				</div>
				<div className='text-[20px] leading-[32px] font-inter font-light pt-[27px] md:max-w-[525px]'>
					Our mission is to offer our customers outstanding service, low prices and quality products on a fast next day service.
				</div>

				<div className='pt-[78px] desktop_only text-sm'>
					<button className='px-6 py-4 border border-white font-bold'>START SHOPPING</button>
				</div>
				
			</div>
			<img src={intro} className= " mt-[60px] hidden xl:block w-[530px] h-[818px] " />
    	</div>
    
  	)
}

export default About