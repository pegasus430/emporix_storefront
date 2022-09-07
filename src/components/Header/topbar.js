import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navigationbar'
import logo from '../../assets/atom.png'
import nav_bg from '../../assets/nav_bg.png'
import { ChevronDownIcon } from '@heroicons/react/solid'
import "./topbar.css"

const menu_list = [
	{
	   "title" : "Shop",
	   "items" : [
		  {
			"title" : "Seating",
			"items" : [
			   {
				'title': 'Office Chairs',
				'items' : [
				  {
					  "title" : "Executive Office Chairs" ,
					  "items" : []
				  },
				  {
					  "title" : "Computer Office Chairs" ,
					  "items" : []
				  },
				  {
					  "title" : "Mesh Office Chairs" ,
					  "items" : []
				  },
				  {
					  "title" : "Draughtsman Chairs" ,
					  "items" : []
				  },
				],
			   } ,
			   {
				'title': 'Meeting Chairs',
				'items' : [
				  {
					  "title" : "Meeting & Boardroom Chairs" ,
					  "items" : []
				  },
				  {
					  "title" : "Occasional Seating" ,
					  "items" : []
				  },
				  {
					  "title" : "Stacking Chairs" ,
					  "items" : []
				  },
				  {
					  "title" : "Waiting Room Chairs" ,
					  "items" : []
				  },
				],
			   } ,
			   {
				'title': 'Ergonomic Chairs',
				'items' : [
				  {
					  "title" : "Bariatric Office Chairs" ,
					  "items" : []
				  },
				  {
					  "title" : "Posture Chairs" ,
					  "items" : []
				  },
				  {
					  "title" : "Kneeling Chairs" ,
					  "items" : []
				  },
				],
			   } ,
			   {
				'title': 'Armchairs and Stools',
				'items' : [
				  {
					  "title" : "Armchairs" ,
					  "items" : []
				  },
				  {
					  "title" : "Stools" ,
					  "items" : []
				  },
				  {
					  "title" : "Industrial Stools" ,
					  "items" : []
				  },
				],
			   } ,
			]
		  },
		  {
			"title" : "Desk And Workspaces",
			"items" : [
			  {
				  "title" : "title" ,
				  "items" : []
			  }
			]
		  },
		  {
			"title" : "Office Storage",
			"items" : [
			  {
				  "title" : "title" ,
				  "items" : []
			  }
			]
		  },
		  {
			"title" : "Paper Envelopes & Mailing",
			"items" : [
			  {
				  "title" : "title" ,
				  "items" : []
			  }
			]
		  },
		  {
			"title" : "Printers, Ink and Toner",
			"items" : [
			  {
				  "title" : "title" ,
				  "items" : []
			  }
			]
		  },
	   ]
	   
	},
	{
	  "title"  : "Services" ,
	  "items" : [
		{
		  "title" : "title"  , 
		  "items" : []
		}
	  ]
	} ,
	{
	  "title"  : "Brands" ,
	  "items" : [
		{
		  "title" : "title"  , 
		  "items" : []
		}
	  ]
	} ,
	{
	  "title"  : "About Us" ,
	  "items" : [
		{
		  "title" : "title"  , 
		  "items" : []
		}
	  ]
	} ,
	{
	  "title"  : "Quick Order" ,
	  "items" : []
	} 
  ]

const Logo = () => {
	return (
		<Link to={"/"} className="flex">
			<div className='w-[37px]'><img src={logo}  className="w-[37px]" /></div>
			<div className='px-4 text-white text-[25px] font-medium items-center'><span>atom</span></div>
					
		</Link>
	)
}

const MegaNav = () => {
	const [showMegaMenuContent, setShowMegaMenuContent] = useState(false)
	const onShowMegaMenu = () => setShowMegaMenuContent(true)

	const handleMegaMenu = () => {
		setShowMegaMenuContent(!showMegaMenuContent)
	}

	return (
		<div className="dropdown flex text-base" >
			
			<button className="dropbtn flex pt-2 pr-2 md:pr-8 xl:pr-12 hover:text-[#FBB13C]" onMouseOver={onShowMegaMenu} onMouseOut={() =>setShowMegaMenuContent(false)}>
				<div>Shop</div>
				<ChevronDownIcon className="ml-2 mt-1 h-5 w-5" aria-hidden="true" />
			</button>

			<button className="dropbtn flex pt-2 pr-2 md:pr-8 xl:pr-12 hover:text-[#FBB13C]" onMouseOver={onShowMegaMenu} onMouseOut={() =>setShowMegaMenuContent(false)}>
				<div>Services</div>
				<ChevronDownIcon className="ml-2 mt-1 h-5 w-5" aria-hidden="true" />
			</button>

			<button className="dropbtn flex pt-2 pr-2 md:pr-8 xl:pr-12 hover:text-[#FBB13C]" onMouseOver={onShowMegaMenu} onMouseOut={() =>setShowMegaMenuContent(false)}>
				<div>Brands</div>
				<ChevronDownIcon className="ml-2 mt-1 h-5 w-5" aria-hidden="true" />
			</button>

			<button className="dropbtn flex pt-2 pr-2 md:pr-8 xl:pr-12 hover:text-[#FBB13C]" onMouseOver={onShowMegaMenu} onMouseOut={() =>setShowMegaMenuContent(false)}>
				<div>About Us</div>
				<ChevronDownIcon className="ml-2 mt-1 h-5 w-5" aria-hidden="true" />
			</button>

			<button className="dropbtn flex pt-2 pr-2 md:pr-8 xl:pr-12 hover:text-[#FBB13C]" >
				<div>Quick Order</div>
				
			</button>
			{
				showMegaMenuContent ?
			
				<div className="dropdown-content" onMouseOver={onShowMegaMenu} onClick={() => setShowMegaMenuContent(false)} onMouseLeave={() => setShowMegaMenuContent(false)}>
					
					<div className="row w-full h-full flex">
					<div className="h-full w-[24%] bg-gradient-to-b bg-[#5F8FAA] bg-[#87ABBF]">
						<div className='pl-[72px] pt-[72px]'>
							<ul className=' text-white text-base font-bold'>

								<li className='pb-6 hover:text-[#FBB13C]'>Seating</li>
								<li className='pb-6 hover:text-[#FBB13C]'>Desk And Workspaces</li>
								<li className='pb-6 hover:text-[#FBB13C]'>Office Storage</li>
								<li className='pb-6 hover:text-[#FBB13C]'>Paper Envelopes &#38; Mailing</li>
								<li className='pb-6 hover:text-[#FBB13C]'>Printers, Ink and Toner</li>
								
							</ul>
						</div>
						
					</div>
					<div className="h-full w-[76%] grid grid-cols-4">
						<div>
							<div className='pl-[72px] pt-[72px]'>
								<ul className=' text-black text-base'>
									<li className='pb-4 hover:text-[#FBB13C] font-bold'>Office Chairs</li>
									<li className='pb-4 hover:text-[#FBB13C]'>Executive Office Chairs</li>
									<li className='pb-4 hover:text-[#FBB13C]'>Computer Office Chairs</li>
									<li className='pb-4 hover:text-[#FBB13C]'>Mesh Office Chairs</li>
									<li className='pb-4 hover:text-[#FBB13C]'>Draughtsman Chairs</li>
								</ul>
							</div>
						</div>
						<div>
							<div className='pl-[72px] pt-[72px]'>
								<ul className=' text-black text-base'>
									<li className='pb-4 hover:text-[#FBB13C] font-bold'>Meeting Chairs</li>
									<li className='pb-4 hover:text-[#FBB13C]'>Metting &#38; Boardroom Chairs</li>
									<li className='pb-4 hover:text-[#FBB13C]'>Occasional Seating</li>
									<li className='pb-4 hover:text-[#FBB13C]'>Stacking Chairs</li>
									<li className='pb-4 hover:text-[#FBB13C]'>Waiting Room chairs</li>
								</ul>
							</div>
						</div>
						<div>
							<div className='pl-[72px] pt-[72px]'>
								<ul className=' text-black text-base'>
									<li className='pb-4 hover:text-[#FBB13C] font-bold'>Ergonomic Chairs</li>
									<li className='pb-4 hover:text-[#FBB13C]'>Bariatric Office Chairs</li>
									<li className='pb-4 hover:text-[#FBB13C]'>Posture Chairs</li>										
									<li className='pb-4 hover:text-[#FBB13C]'>Kneeling Chairs</li>
								</ul>
							</div>
						</div>
						<div>
							<div className='pl-[72px] pt-[72px]'>
								<ul className=' text-black text-base'>
									<li className='pb-4 hover:text-[#FBB13C] font-bold'>Armchairs and Stools</li>
									<li className='pb-4 hover:text-[#FBB13C]'>Armchairs</li>
									<li className='pb-4 hover:text-[#FBB13C]'>Stools</li>
									<li className='pb-4 hover:text-[#FBB13C]'>Industrial Stools</li>
								</ul>
							</div>
						</div>
					</div>
					</div>
				</div> : null
			}
		</div> 
	)
}

const TopNav = ({title}) => {
	const nav_title_condition = title !="" && title != "home" ? true : false

	return (
		<div  className= { title == 'home' ?  "hidden md:flex w-full md:h-36 absolute z-10" : 
				title == ""	? "": "hidden md:flex w-full md:h-60 absolute z-10 nav-background-title"
		}>
			<div className='px-10 pt-[76px] w-full  flex xl:px-24 justify-between'>
							
					<Logo />

					<MegaNav />
				
				<div className='hidden lg:flex'>
					<form className="nosubmit">
						<input className="nosubmit lg:w-[250px] xl:w-[360px]" type="search" placeholder="Search product or category" />
					</form>
				</div>
			</div>
			{
				nav_title_condition && (
					<div className=' md:absolute mt-[176px] ml-24 text-white font-inter font-bold text-[32px]'>
						{title}
					</div>
				)
			}
		</div>
	)
}

const Topbar = ({title}) => {
	
  	return (

		<>
			<Navbar />
			<TopNav title = {title} />
		</>
       

    
  )
}

export default Topbar