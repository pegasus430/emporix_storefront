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
			
			<button className="mega_menu_dropbtn" onMouseOver={onShowMegaMenu} onMouseOut={() =>setShowMegaMenuContent(false)}>
				<div>Shop</div>
				<ChevronDownIcon className="ml-2 mt-1 h-5 w-5" aria-hidden="true" />
			</button>

			<button className="mega_menu_dropbtn" onMouseOver={onShowMegaMenu} onMouseOut={() =>setShowMegaMenuContent(false)}>
				<div>Services</div>
				<ChevronDownIcon className="ml-2 mt-1 h-5 w-5" aria-hidden="true" />
			</button>

			<button className="mega_menu_dropbtn" onMouseOver={onShowMegaMenu} onMouseOut={() =>setShowMegaMenuContent(false)}>
				<div>Brands</div>
				<ChevronDownIcon className="ml-2 mt-1 h-5 w-5" aria-hidden="true" />
			</button>

			<button className="mega_menu_dropbtn" onMouseOver={onShowMegaMenu} onMouseOut={() =>setShowMegaMenuContent(false)}>
				<div>About Us</div>
				<ChevronDownIcon className="ml-2 mt-1 h-5 w-5" aria-hidden="true" />
			</button>

			<button className="mega_menu_dropbtn" >
				<div>Quick Order</div>
				
			</button>
			{
				showMegaMenuContent ?
			
				<div className="dropdown-content" onMouseOver={onShowMegaMenu} onClick={() => setShowMegaMenuContent(false)} onMouseLeave={() => setShowMegaMenuContent(false)}>
					
					<div className="row w-full h-full flex">
					<div className="h-full w-[24%] mega_content_bg">
						<div className='pl-[72px] pt-[72px]'>
							<ul className=' text-white text-base font-bold'>

								<li className='mega_content_category_li'>Seating</li>
								<li className='mega_content_category_li'>Desk And Workspaces</li>
								<li className='mega_content_category_li'>Office Storage</li>
								<li className='mega_content_category_li'>Paper Envelopes &#38; Mailing</li>
								<li className='mega_content_category_li'>Printers, Ink and Toner</li>
								
							</ul>
						</div>
						
					</div>
					<div className="h-full w-[76%] grid grid-cols-4">
						<div>
							<div className='pl-[72px] pt-[72px]'>
								<ul className=' text-black text-base'>
									<li className='mega_content_sub_cat_li font-bold'>Office Chairs</li>
									<li className='mega_content_sub_cat_li'>Executive Office Chairs</li>
									<li className='mega_content_sub_cat_li'>Computer Office Chairs</li>
									<li className='mega_content_sub_cat_li'>Mesh Office Chairs</li>
									<li className='mega_content_sub_cat_li'>Draughtsman Chairs</li>
								</ul>
							</div>
						</div>
						<div>
							<div className='pl-[72px] pt-[72px]'>
								<ul className=' text-black text-base'>
									<li className='mega_content_sub_cat_li font-bold'>Meeting Chairs</li>
									<li className='mega_content_sub_cat_li'>Metting &#38; Boardroom Chairs</li>
									<li className='mega_content_sub_cat_li'>Occasional Seating</li>
									<li className='mega_content_sub_cat_li'>Stacking Chairs</li>
									<li className='mega_content_sub_cat_li'>Waiting Room chairs</li>
								</ul>
							</div>
						</div>
						<div>
							<div className='pl-[72px] pt-[72px]'>
								<ul className=' text-black text-base'>
									<li className='mega_content_sub_cat_li font-bold'>Ergonomic Chairs</li>
									<li className='mega_content_sub_cat_li'>Bariatric Office Chairs</li>
									<li className='mega_content_sub_cat_li'>Posture Chairs</li>										
									<li className='mega_content_sub_cat_li'>Kneeling Chairs</li>
								</ul>
							</div>
						</div>
						<div>
							<div className='pl-[72px] pt-[72px]'>
								<ul className=' text-black text-base'>
									<li className='mega_content_sub_cat_li font-bold'>Armchairs and Stools</li>
									<li className='mega_content_sub_cat_li'>Armchairs</li>
									<li className='mega_content_sub_cat_li'>Stools</li>
									<li className='mega_content_sub_cat_li'>Industrial Stools</li>
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
		<div  className= { title == 'home' ?  "desktop_only_flex w-full md:h-36 absolute z-10" : 
				title == ""	? "nav-background-title desktop_only_flex h-36": "desktop_only_flex w-full md:h-60 absolute z-10 nav-background-title"
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