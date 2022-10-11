import React, { useState, useEffect, useContext} from 'react'
import { Link } from 'react-router-dom'

import Navbar from './navigationbar'
import logo from '../../assets/atom.png'
import { ChevronDownIcon } from '@heroicons/react/solid'
import LayoutContext from '../../pages/context'
import { useSelector } from "react-redux"
import {pageMenuSelector} from "../../redux/slices/pageReducer"
import "./topbar.css"
import { tenant_key } from '../../constants/localstorage'



const Logo = ({onMouseOver, tenant}) => {
	
	return (
		<Link to={`/${tenant}`} className="flex" onMouseOver={onMouseOver}>
			<div className='w-[37px]'><img src={logo} alt={"Logo"} className="w-[37px]" /></div>
			<div className='px-4 text-white text-[25px] font-medium items-center'><span>atom</span></div>			
		</Link>
	)
}

const MegaNav = ({showMegaMenuContent, setShowMegaMenuContent, tenant}) => {
	
	const [subMenuItems, setSubMenuItems] = useState([])
	const [showMegaMenuRightContent, setShowMegaMenuRightContent] = useState(false)
	const [subMenuMegaContent, setSubMenuMegaContent] = useState([])
	const onShowMegaMenu = () => setShowMegaMenuContent(true)
	const overMenuItem = (items) => {
		setSubMenuItems(items)
		if(!showMegaMenuContent) setShowMegaMenuContent(true)
	}
	const hideMegaMenuContent = () => {
		setShowMegaMenuContent(false)
	}
	const menuList = useSelector(pageMenuSelector)
	
	return (
		<div className="dropdown flex text-base" >

			{
				menuList.map((item, index) => 
				<button key = {index} className="mega_menu_dropbtn"   onMouseOver={() => item.items.length !== 0?  overMenuItem(item.items) : hideMegaMenuContent() }  > 
					{/* onMouseOut={() => {setSubMenuMegaContent([]); setShowMegaMenuContent(false)}} */}
					<Link to={!item.items.length? `/${tenant}/${item.url}` : `/${tenant}`}>

						<div>{item.title}</div>
					</Link>
					
					<ChevronDownIcon className={ item.items.length ? "ml-2 mt-1 h-5 w-5": 'hidden'} aria-hidden="true" />
					</button>
				)
			}
			{
				showMegaMenuContent ?
			
				<div className="header-mega_dropdown-content" onMouseEnter={onShowMegaMenu} onClick={() => setShowMegaMenuContent(false)} >
					{/* onMouseLeave={() => setShowMegaMenuContent(false)} */}
					<div className="row w-full h-full flex">
						<div className="h-full w-[24%] mega_content_bg">
							<div className='pl-[72px] pt-[72px] overflow-y-auto max-h-full'>
								<ul className=' text-white text-base font-bold'>

								{
									subMenuItems.map((item, index) => 
										<Link onClick={() => console.log('clicked')} replace key = {index} to={`/${tenant}${item.url}`} >
											<li className='mega_content_category_li' onMouseOver = {() => {setSubMenuMegaContent(item.items); setShowMegaMenuRightContent(true)}} onMouseLeave = {() => {  setShowMegaMenuRightContent(false)} }>{item.title}</li>
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
											<Link to={`/${tenant}${item.url}`}>
												<li className='mega_content_sub_cat_li font-bold'>{item.title}</li>
											</Link>
											{
												item.items.map((eachItem, index) => 
													<Link key={index} to={`/${tenant}${eachItem.url}`}>
														<li  className='mega_content_sub_cat_li'>{eachItem.title}</li>
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
	const [showMegaMenuContent, setShowMegaMenuContent] = useState(false)
	const tenant = localStorage.getItem(tenant_key)

	return (
		<div  className= { title === 'home' ?  "desktop_only_flex w-full md:h-36 absolute z-10" : 
				title === ""	? "nav-background-title desktop_only_flex h-36": "desktop_only_flex w-full md:h-60 absolute z-10 nav-background-title"
		}>
			<div className='px-10 pt-[76px] w-full  flex xl:px-24  h-36'>
				<div className="menu-wrapper flex w-full" onMouseLeave = {() => {  setShowMegaMenuContent(false)} }>
					<div className="flex justify-between w-full h-10">
						<Logo tenant={tenant} onMouseOver={() => setShowMegaMenuContent(false)}/>

						<MegaNav tenant={tenant} showMegaMenuContent={showMegaMenuContent} setShowMegaMenuContent={setShowMegaMenuContent}/>
						
						<div className='hidden lg:flex' onMouseOver={() => setShowMegaMenuContent(false)}>
							<form className="nosubmit">
								<input className="nosubmit lg:w-[250px] xl:w-[360px]" type="search" placeholder="Search product or category" />
							</form>
						</div>
					</div>
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