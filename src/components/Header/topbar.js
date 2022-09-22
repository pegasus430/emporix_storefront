import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navigationbar'
import logo from '../../assets/atom.png'
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
					  "items" : [],
					  'url' : '/product/seating'
				  },
				  {
					  "title" : "Computer Office Chairs" ,
					  "items" : [],
					  'url' : '/product/seating'
				  },
				  {
					  "title" : "Mesh Office Chairs" ,
					  "items" : [],
					  'url' : '/product/seating'
				  },
				  {
					  "title" : "Draughtsman Chairs" ,
					  "items" : [],
					  'url' : '/product/seating'
				  },
				],
				'url' : '/product/seating'
			   } ,
			   {
				'title': 'Meeting Chairs',
				'items' : [
				  {
					  "title" : "Meeting & Boardroom Chairs" ,
					  "items" : [],
					  'url' : '/product/seating'
				  },
				  {
					  "title" : "Occasional Seating" ,
					  "items" : [],
					  'url' : '/product/seating'
				  },
				  {
					  "title" : "Stacking Chairs" ,
					  "items" : [],
					  'url' : '/product/seating'
				  },
				  {
					  "title" : "Waiting Room Chairs" ,
					  "items" : [],
					  'url' : '/product/seating'
				  },
				],
				'url' : '/product/seating'
			   } ,
			   {
				'title': 'Ergonomic Chairs',
				'items' : [
				  {
					  "title" : "Bariatric Office Chairs" ,
					  "items" : [],
					  'url' : '/product/seating'
				  },
				  {
					  "title" : "Posture Chairs" ,
					  "items" : [],
					  'url' : '/product/seating'
				  },
				  {
					  "title" : "Kneeling Chairs" ,
					  "items" : [],
					  'url' : '/product/seating'
				  },
				],
				'url' : '/product/seating'
			   } ,
			   {
				'title': 'Armchairs and Stools',
				'items' : [
				  {
					  "title" : "Armchairs" ,
					  "items" : [],
					  'url' : '/product/seating'
				  },
				  {
					  "title" : "Stools" ,
					  "items" : [],
					  'url' : '/product/seating'
				  },
				  {
					  "title" : "Industrial Stools" ,
					  "items" : [],
					  'url' : '/product/seating'
				  },
				],
				'url' : '/product/seating'
			   } ,
			],
			'url' : '/product/seating'
		  },
		  {
			"title" : "Desk And Workspaces",
			"items" : [
			  {
				  "title" : "title" ,
				  "items" : []
			  }
			],
			'url' : '/product/desk_workspace'
		  },
		  {
			"title" : "Office Storage",
			"items" : [
			  {
				  "title" : "title" ,
				  "items" : []
			  }
			],
			'url' : '/product/storage'
		  },
		  {
			"title" : "Paper Envelopes & Mailing",
			"items" : [
			  {
				  "title" : "title" ,
				  "items" : []
			  }
			],
			'url' : '/product/paper_mail'
		  },
		  {
			"title" : "Printers, Ink and Toner",
			"items" : [
			  {
				  "title" : "title" ,
				  "items" : []
			  }
			],
			'url' : '/product/printer_ink_toner'
		  },
	   ]
	   
	},
	{
	  "title"  : "Services" ,
	  "items" : [
		{
		  "title" : "service1"  , 
		  "items" : []
		},
		{
			"title" : "service2"  , 
			"items" : []
		  },
		  {
			"title" : "service3"  , 
			"items" : []
		  },
		  {
			"title" : "service4"  , 
			"items" : []
		  },
	  ]
	} ,
	{
	  "title"  : "Brands" ,
	  "items" : [
		{
		  "title" : "Brands1"  , 
		  "items" : []
		},
		{
			"title" : "Brands2"  , 
			"items" : []
		},
		{
			"title" : "Brands3"  , 
			"items" : []
		  },
		  {
			"title" : "Brands4"  , 
			"items" : []
		  },
	  ]
	} ,
	{
	  "title"  : "About Us" ,
	  "items" : [
		{
		  "title" : "title1"  , 
		  "items" : []
		},
		{
			"title" : "title2"  , 
			"items" : []
		},
		{
			"title" : "title3"  , 
			"items" : []
		},
		{
			"title" : "title4"  , 
			"items" : []
		},
	  ]
	} ,
	{
	  "title"  : "Quick Order" ,
	  "items" : [],
	  'url': 'quick_order'
	} 
  ]

const Logo = () => {
	return (
		<Link to={"/"} className="flex">
			<div className='w-[37px]'><img src={logo} alt={"Logo"} className="w-[37px]" /></div>
			<div className='px-4 text-white text-[25px] font-medium items-center'><span>atom</span></div>			
		</Link>
	)
}

const MegaNav = () => {
	const [showMegaMenuContent, setShowMegaMenuContent] = useState(false)
	const [subMenuItems, setSubMenuItems] = useState([])
	const [showMegaMenuRightContent, setShowMegaMenuRightContent] = useState(false)
	const [subMenuMegaContent, setSubMenuMegaContent] = useState([])
	const onShowMegaMenu = () => setShowMegaMenuContent(true)
	const overMenuItem = (items) => {
		setSubMenuItems(items)
		setShowMegaMenuContent(true)
	}
	

	return (
		<div className="dropdown flex text-base" >
			{
				menu_list.map((item, index) => 
				<button key = {index} className="mega_menu_dropbtn"   onMouseOver={item.items.length? () => overMenuItem(item.items) : null } onMouseOut={() => {setSubMenuMegaContent([]); setShowMegaMenuContent(false)}} >
					<Link to={!item.items.length ? `/${item.url}` : '/'}>

						<div>{item.title}</div>
					</Link>
					
					<ChevronDownIcon className={ item.items.length ? "ml-2 mt-1 h-5 w-5": 'hidden'} aria-hidden="true" />
					</button>
				)
			}
			{
				showMegaMenuContent ?
			
				<div className="header-mega_dropdown-content" onMouseOver={onShowMegaMenu} onClick={() => setShowMegaMenuContent(false)} onMouseLeave={() => setShowMegaMenuContent(false)}>
					
					<div className="row w-full h-full flex">
						<div className="h-full w-[24%] mega_content_bg">
							<div className='pl-[72px] pt-[72px]'>
								<ul className=' text-white text-base font-bold'>

								{
									subMenuItems.map((item, index) => 
										<Link to={`${item.url}`}>
											<li key = {index} className='mega_content_category_li' onMouseOver = {() => {setSubMenuMegaContent(item.items); setShowMegaMenuRightContent(true)}} onMouseLeave = {() => {  setShowMegaMenuRightContent(false)} }>{item.title}</li>
										</Link>
										
										
									)
								}

									
								</ul>
							</div>
							
						</div>
						<div className="h-full w-[76%] grid grid-cols-4" onMouseOver={() => setShowMegaMenuRightContent(true)}>
							{
								showMegaMenuRightContent ?
								subMenuMegaContent.map((item, index) => 
									<div key = {index} className='pl-[72px] pt-[72px]'>
										<ul className=' text-black text-base'>
											<li className='mega_content_sub_cat_li font-bold'>{item.title}</li>
											{
												item.items.map((eachItem, index) => 
													<Link to={`${eachItem.url}`}>
														<li key={index} className='mega_content_sub_cat_li'>{eachItem.title}</li>
													</Link>
													
												)
											}
											
										</ul>
									</div>
								): null

							}
						
						</div>
					</div>
				</div> : null
			}
		</div> 
	)
}

const TopNav = ({title}) => {
	const nav_title_condition = title !=="" && title !== "home" ? true : false

	return (
		<div  className= { title === 'home' ?  "desktop_only_flex w-full md:h-36 absolute z-10" : 
				title === ""	? "nav-background-title desktop_only_flex h-36": "desktop_only_flex w-full md:h-60 absolute z-10 nav-background-title"
		}>
			<div className='px-10 pt-[76px] w-full  flex xl:px-24 justify-between h-36'>
							
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
	console.log('nav')
  	return (

		<>
			<Navbar />
			<TopNav title = {title} />
		</>
       

    
  )
}

export default Topbar