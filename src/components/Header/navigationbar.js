import React, { useState } from 'react'
import { AiOutlineMenu,AiOutlineClose, AiOutlineSearch , AiOutlineMail, AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-scroll'
import logo from '../../assets/atom.png'
import AccountMenu from './accountmenu'
import { HiOutlineUserCircle } from "react-icons/hi"
import { ChevronRightIcon , ChevronLeftIcon } from '@heroicons/react/solid'
import Drawer from '../Utilities/drawer/drawer'

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


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [auth, setAuth] = useState(true)
    const [displaySubItems, setDisplaySubItems] = useState(false)
	  const [title, setTitle] = useState('')
	  const [subMenuItems, setSubMenuItems] = useState([])

    const ParentBoard = () =>{
      	return (
          	<>
            	<div className='pt-12 items-center '>
                    {
                      auth ? 
                      <div className='h-[75px] border-y w-full justify-between flex text-[#565759] text-center items-center font-inter '>
                          <div className='flex'>
                              <HiOutlineUserCircle size={25} />
                              <div className='pl-2'>Jack White</div>
                          </div>
                          <div>
                            <AiOutlineMail size = {20} />
                          </div>
                      </div>
                      : 
                      
                        <div className='bg-[#214559] w-full h-12 text-sm  text-center items-center text-white'>
                            <div className='pt-3'>LOGIN | REGISTER</div>
                        </div>
                    }
              </div>
              <div className='w-full'>
                      <ul >
                        {
                            menu_list.map((item , index) => <ParentMenu key={index} item = {item} />)
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
			  <li 
				  key = {item.title} 
				  className=" flex justify-between pb-4  text-base text-slate-400"
				  onClick = {() => parentMenuClicked(item.title, item.items)}
			  >
				 {item.title}
				 
				 <ChevronRightIcon className =  {item.items.length? 'h-8 w-8' : 'hidden' } />
			  </li>
		
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
    // create a function for toggle mobile nav
    const handleNavOpen = () =>{
        setOpen(!open)
    }

    // create a function for toggle mobile nav
    const handleNavClose = () =>{
        setOpen(false)
    }

  return (
    <>
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
                (!auth)?
              
                <ul className='flex'>
                  <li className='px-2'><a className='hover:text-[#FBB13C]'>Login</a></li> |
                  <li className='px-2'><a className='hover:text-[#FBB13C]'>Sign Up</a></li>
                </ul>
                :
                <ul className='flex'>
                  <li className='px-4'><AiOutlineMail size={20} /></li> |
                  <li className='px-4 flex'>
                    <AiOutlineShoppingCart size = {20} />
                    
                    <div className='pl-[17.5px] text-white flex'>
                        &euro; 768.47
                    </div>
                  </li> |
                  <li className='px-4 flex'>
                    <AccountMenu name = "Jack White" />
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
                        <img src={logo} className="w-[37px]"></img>
                        <div className='px-4 text-[25px] font-medium items-center'><span>atom</span></div>
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
                  <img src={logo} ></img>
                  <p className='font-medium text-xl px-3 pt-1'>atom</p>

          </div>
      
          <div className='mobile_only text-white pr-[30px]'>
              <AiOutlineSearch size={20} />
          </div>
          
          <Drawer >
          </Drawer>
      </header>
      
    </>
   
  )
}

export default Navbar