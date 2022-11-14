import React, { useState, useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu,AiOutlineClose, AiOutlineSearch , AiOutlineMail, AiOutlineShoppingCart } from 'react-icons/ai'
import { useSelector } from "react-redux"
import logo from '../../assets/atom.png'
import Badge from '@mui/material/Badge';
import AccountMenu from './accountmenu'
import { HiOutlineUserCircle } from "react-icons/hi"
import { ChevronRightIcon , ChevronLeftIcon } from '@heroicons/react/solid'
import LayoutContext from '../../pages/context'
import { LargePrimaryButton } from '../Utilities/button'
import {pageMenuSelector} from "../../redux/slices/pageReducer"
import { tenantSelector } from '../../redux/slices/authReducer'
import {login_url, home_url, add_tenant_to_url} from '../../services/service.config'
import {cartListSelector} from '../../redux/slices/cartReducer'

const Navbar = () => {
	
	const { user: currentUser } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false)
    
  const [displaySubItems, setDisplaySubItems] = useState(false)
	const [title, setTitle] = useState('')
	const [subMenuItems, setSubMenuItems] = useState([])

	const {setShowCart} = useContext(LayoutContext)
  const menuList = useSelector(pageMenuSelector)
  const tenant = useSelector(tenantSelector)

    const ParentBoard = () =>{
      	return (
          	<>
            	<div className='pt-12 items-center '>
                    {
                      currentUser ? 
                      <div className='h-[75px] border-y w-full justify-between flex text-[#565759] text-center items-center font-inter '>
                          <div className='flex'>
                              <HiOutlineUserCircle size={25} />
                              <div className='pl-2'>{currentUser.username}</div>
                          </div>
                          <div>
                            <AiOutlineMail size = {20} />
                          </div>
                      </div>
                      : 
                      
                        <div className='bg-[#214559] w-full h-12 text-sm  text-center items-center text-white'>
                            <Link to={login_url()}>
								<LargePrimaryButton className='' title = "LOGIN | REGISTER"></LargePrimaryButton>
							</Link>
                        </div>
                    }
              </div>
              <div className='w-full'>
                      <ul >
                        {
                            menuList.map((item , index) => <ParentMenu key={index} item = {item} />)
                        }
                      </ul>
              </div>
              <div className='w-full h-[59px] border-y flex justify-between items-center mt-6 font-inter text-base'>
                Language
                <select className='text-[#214559] appearance-none'>
                  <option value = "Engish">English</option>
                  <option value = "Italian">Italian</option>
                  <option value = "French">French</option>
                          
                </select>

              </div>
              <div className='w-full h-[59px] border-y flex justify-between items-center'>
                  Currency
                  <select className='text-[#214559] appearance-none'>
                    <option value = "Euro">&euro;</option>
                    <option value = "Dollar">&#36;</option>
                  </select>
              </div>
        	</>   
      )
    }

    const ParentMenu = (props) => {
      const item = props.item
      
      return (
        <>
          <li 
              key = {item.title} 
              className=" flex justify-between py-6 border-b last:border-b-0 text-2xl hover:text-slate-400"
              onClick = {() => parentMenuClicked(item.title, item.items)}
          >
             {item.title}
             
             <ChevronRightIcon className =  {item.items.length ? 'h-8 w-8' : 'hidden' } />
          </li>
    
        </>
      )
    }

	const SubMenu = (props) => {
		const item = props.item
		return (
			<>
      {
        !item.items.length? 
        <Link to={add_tenant_to_url(item.url)}>
          <li 
            key = {item.title} 
            className=" flex justify-between pb-4  text-base text-slate-400"
            onClick = {() => parentMenuClicked(item.title, item.items)}
          >
            {item.title}
          
       
          </li>
        </Link>:
          <li 
          key = {item.title} 
          className=" flex justify-between pb-4  text-base text-slate-400"
          onClick = {() => parentMenuClicked(item.title, item.items)}
          >
            {item.title}
        
          <ChevronRightIcon className =  { 'h-8 w-8'  } />
          </li>
      }
			  
		
			</>
		  )
	}

	const SubBoard = () => {
		
		return (
			<>
				<div className='w-full flex text-center items-center border-b pt-[50px] pb-6 text-4' onClick={() => setDisplaySubItems(false)}>
					<ChevronLeftIcon className =  'h-8 w-8 pr-1' />
					Back
				</div>
				<div className='pt-6 text-left text-black text-xl'>
					{title}
				</div>
				<div className='pt-12 px-6'>
					<ul>
						{
							subMenuItems.map((item, index) => <SubMenu key={index} item = {item} />)
						}
					</ul>
				</div>
			</>
		)
	}

    const parentMenuClicked = (title, items) => {
      
      if (items.length){
        setTitle(title)
        setDisplaySubItems(true)
        setSubMenuItems([...items])
      }

    }
	const handleOpenCart = () => {
		
		setShowCart(true)
	}
    // create a function for toggle mobile nav
    const handleNavOpen = () =>{
        setOpen(!open)
    }

    // create a function for toggle mobile nav
    const handleNavClose = () =>{
        setOpen(false)
    }
	const cartList = useSelector(cartListSelector)
  const [cartTotal, setCartTotal] = useState(0)
  const [cartTotalPrice, setCartTotalPrice] = useState(0)

  useEffect(()=>{
    setCartTotal(cartList.length)
    let totalPrice = 0
    
    cartList.map(cart => {
      totalPrice += cart.product.price.totalValue * cart.quantity
    })
    totalPrice = Math.trunc(totalPrice * 100) / 100
    setCartTotalPrice(totalPrice)
  }, [cartList])

  return (
    <header className='header'>
        {/* Dektop language and currency selection */}
        <div className='desktop_only_flex font-inter text-sm text-white'>
            <div>
                Language: 
                <select className='bg-[#214559]'>
                    <option value = "Engish">English</option>
                    <option value = "Italian">Italian</option>
                    <option value = "French">French</option>
                    
                </select>
            </div>
            <div className='ml-[22px]'>
                Currency: 
                <select className='bg-[#214559]'>
                    <option value = "Euro">&euro;</option>
                    <option value = "Dollar">&#36;</option>
                    
                    
                </select>
            </div>
            
        </div>
        
        {/* Dektop navigation selection */}
        <div className='desktop_only_flex font-inter font-normal text-sm text-white'>
            {
              (!currentUser)?
            
              <ul className='flex'>
                <li className='px-4 flex'>
                  {
                    cartTotal!==0?
                    <Badge badgeContent={cartTotal} color="warning">
                      <AiOutlineShoppingCart size = {20} onClick={handleOpenCart}/>
                    </Badge>:
                    <AiOutlineShoppingCart size = {20} onClick={handleOpenCart}/>
                  }
                  <div className='pl-3 text-white flex'>
                      &euro; {cartTotalPrice}
                  </div>
                </li>
                <li className='px-2'><a className='hover:text-[#FBB13C]' href={`/${tenant}/login`}>Login</a></li> |
                <li className='px-2'><a className='hover:text-[#FBB13C]' href={`/${tenant}/signup`}>Sign Up</a></li>
              </ul>
              :
              <ul className='flex'>
                <li className='px-4'><AiOutlineMail size={20} /></li> |
                <li className='px-4 flex'>
                  {
                    cartTotal!==0?
                    <Badge badgeContent={cartTotal} color="warning">
                      <AiOutlineShoppingCart size = {20} onClick={handleOpenCart}/>
                    </Badge>:
                    <AiOutlineShoppingCart size = {20} onClick={handleOpenCart}/>
                  }
                    
                    
                  <div className='pl-[17.5px] text-white flex'>
                      &euro; {cartTotalPrice}
                  </div>
                </li> |
                <li className='px-4 flex'>
                  <AccountMenu name = {currentUser.username} />
                </li> 
              </ul>
            
            }
            
        </div>

        {/* mobile menu selection */}
        <div  className='mobile_only_flex pl-[30.25px]  text-white cursor-pointer'>
            {
                (!open) ? <AiOutlineMenu size={27.5} onClick={handleNavOpen}/> : null
            }
            {/* absolut mobile navigation */}
            <div className={(!open) ? 'hidden' : ' text-black absolute top-0 left-0 w-full  h-screen bg-white px-6 py-12  text-center font-medium overflow-y-auto'}>
               <div className='h-10 justify-between flex' > 
                  <div className='flex'>
                    <Link to={login_url()} className='flex' >
                      <img src={logo} className="w-[37px]"></img>
                      <div className='px-4 text-[25px] font-medium items-center'><span>atom</span></div>
                    </Link>
                  </div>
                  <div className='flex text-center pt-2' onClick={handleNavOpen}>
                      <span className = "pr-4">Close</span>              
                      <AiOutlineClose  size={25}/>
                  </div>
                  
               </div>
               {
                !displaySubItems ? <ParentBoard />: <SubBoard />
               }
               
            </div>

        </div>

        <div className='mobile_only_flex text-white'>
            <Link to={home_url()} className='flex'>
                <img src={logo} ></img>
                <p className='font-medium text-xl px-3 pt-1'>atom</p>
             </Link>
        </div>
		
        <div className='mobile_only text-white pr-[30px]'>
            <AiOutlineSearch size={20} />
        </div>

    </header>
  )
}

export default Navbar