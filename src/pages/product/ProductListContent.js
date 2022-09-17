import { CgMenuGridR } from "react-icons/cg"
import { BiMenu } from "react-icons/bi"
import React, { useState , useRef } from 'react'
import { IconContext } from "react-icons"
import { ChevronDownIcon } from '@heroicons/react/solid'
import { HiOutlineArrowLeft, HiOutlineArrowRight} from 'react-icons/hi'
import ReactStars from 'react-stars'
import pen from "../../assets/products/pencil.png"
import Quantity from "../../components/QuantitySelector/quantity"
import { useNavigate } from "react-router-dom";



const products = [
    {
        id : 1,
        stock : "Low", 
        rating : 4, 
        count : 8 ,
        src : "/img/products/chair1.png" ,
        category : "ICA-CT 073BK",
        name : "Jysk Office Chair SKODSBORG",
        price : "93.50",
        list_price : "109.99"
    } ,
    {
        id : 2,
        stock : "In", 
        rating : 4, 
        count : 8 ,
        src : "/img/products/chair2.png" ,
        category : "ICA-CT 073BK",
        name : "Equip Mesh Office Chair",
        price : "89.90",
        list_price : "99.99"
    } ,   
    {
        id : 3,
        stock : "Low", 
        rating : 4, 
        count : 8 ,
        src : "/img/products/chair3.png" ,
        category : "ICA-CT 073BK",
        name : "Jysk Office Chair DALMOSE",
        price : "58.05",
        list_price : "64.50"
    } ,
    {
        id : 4,
        stock : "In", 
        rating : 4, 
        count : 8 ,
        src : "/img/products/chair4.png" ,
        category : "ICA-CT 073BK",
        name : "Jysk Office Chair STAKROGE",
        price : "143.99",
        list_price : "159.99"
    } ,
    {
        id : 5,
        stock : "Low", 
        rating : 4, 
        count : 8 ,
        src : "/img/products/chair5.png" ,
        category : "ICA-CT 073BK",
        name : "Equip Ergonomic Executive Office Chair",
        price : "127.50",
        list_price : "149.99"
    } ,
    {
        id : 6,
        stock : "Ouf Of", 
        rating : 4, 
        count : 8 ,
        src : "/img/products/chair6.png" ,
        category : "ICA-CT 073BK",
        name : "Equip Office Chair, Ribbed Upholstery, High-Back",
        price : "143.99",
        list_price : "159.99"
    } ,
    {
        id : 7,
        stock : "Low", 
        rating : 4, 
        count : 8 ,
        src : "/img/products/comfort_chair.png" ,
        category : "ICA-CT 073BK",
        name : "Comfort Ergo 2-Lever Operator Chairs",
        price : "53.99",
        list_price : "59.99"
    } ,
    {
        id : 8,
        stock : "In", 
        rating : 4, 
        count : 8 ,
        src : "/img/products/chair7.png" ,
        category : "ICA-CT 073BK",
        name : "Techly Office chair with padded seat",
        price : "61.65",
        list_price : "72.50"
    } ,
    {
        id : 9,
        stock : "In", 
        rating : 4, 
        count : 8 ,
        src : "/img/products/chair8.png" ,
        category : "ICA-CT 073BK",
        name : "Kenson 7010 officecomputer chair Padded seat",
        price : "78.20",
        list_price : "92.00"
    } ,
    {
        id : 10,
        stock : "Low", 
        rating : 4, 
        count : 8 ,
        src : "/img/products/chair1.png" ,
        category : "ICA-CT 073BK",
        name : "Jysk Office Chair SKODSBORG",
        price : "93.50",
        list_price : "109.99"
    } ,
    {
        id : 11,
        stock : "In", 
        rating : 4, 
        count : 8 ,
        src : "/img/products/chair2.png" ,
        category : "ICA-CT 073BK",
        name : "Equip Mesh Office Chair",
        price : "89.90",
        list_price : "99.99"
    } ,   
    {
        id : 12,
        stock : "Low", 
        rating : 4, 
        count : 8 ,
        src : "/img/products/chair3.png" ,
        category : "ICA-CT 073BK",
        name : "Jysk Office Chair DALMOSE",
        price : "58.05",
        list_price : "64.50"
    } ,
    {
        id : 13,
        stock : "In", 
        rating : 4, 
        count : 8 ,
        src : "/img/products/chair4.png" ,
        category : "ICA-CT 073BK",
        name : "Jysk Office Chair STAKROGE",
        price : "143.99",
        list_price : "159.99"
    } ,
    {
        id : 14,
        stock : "Low", 
        rating : 4, 
        count : 8 ,
        src : "/img/products/chair5.png" ,
        category : "ICA-CT 073BK",
        name : "Equip Ergonomic Executive Office Chair",
        price : "127.50",
        list_price : "149.99"
    } ,
    {
        id : 15,
        stock : "Ouf Of", 
        rating : 4, 
        count : 8 ,
        src : "/img/products/chair6.png" ,
        category : "ICA-CT 073BK",
        name : "Equip Office Chair, Ribbed Upholstery, High-Back",
        price : "143.99",
        list_price : "159.99"
    } ,
    {
        id : 16,
        stock : "Low", 
        rating : 4, 
        count : 8 ,
        src : "/img/products/comfort_chair.png" ,
        category : "ICA-CT 073BK",
        name : "Comfort Ergo 2-Lever Operator Chairs",
        price : "53.99",
        list_price : "59.99"
    } ,
    {
        id : 17,
        stock : "In", 
        rating : 4, 
        count : 8 ,
        src : "/img/products/chair7.png" ,
        category : "ICA-CT 073BK",
        name : "Techly Office chair with padded seat",
        price : "61.65",
        list_price : "72.50"
    } ,
    {
        id : 18,
        stock : "In", 
        rating : 4, 
        count : 8 ,
        src : "/img/products/chair8.png" ,
        category : "ICA-CT 073BK",
        name : "Kenson 7010 officecomputer chair Padded seat",
        price : "78.20",
        list_price : "92.00"
    } ,
   
]

const EachProduct = (props) => {
    const navigate = useNavigate();
    const HandleProductDetail = () => {
        navigate(`/product/details/${props.item_id}`)
    }
    return (
        <div className="" onClick={HandleProductDetail}>
            <div className='w-full h-3  justify-between hidden lg:flex'>
                <div className={props.stock == "Low" ? "text-[#FFA800] float-right lg:float-none font-inter font-bold text-xs pt-[6px]" : props.stock == "In" ? "text-[#4BCB67] font-inter font-bold text-xs pt-[6px] float-right lg:float-none" : "text-[#F30303] font-inter font-bold text-xs pt-[6px] float-right lg:float-none"}>
                    {props.stock} Stock
                </div>
                <div className='flex h-5 float-right lg:float-none'>
                    <ReactStars size={16} value = {props.rating} color2 = {'#FBB13C'}/>
                    ({props.total_count})
                </div>
            </div>

            <div className=' block float-right lg:hidden'>
                <div className=' flex h-5  float-right'>
                    <ReactStars size={16} value = {props.rating} color2 = {'#FBB13C'}/>
                    ({props.total_count})
                </div> 
                <br />
                <div className={props.stock == "Low" ? "text-[#FFA800] font-inter font-bold text-xs pt-[6px] float-right " : props.stock == "In" ? "text-[#4BCB67] font-inter font-bold text-xs pt-[6px] float-right " : "text-[#F30303] font-inter font-bold text-xs pt-[6px] float-right "}>
                    {props.stock} Stock
                </div>
            </div>

            <div className='pt-10 lg:w-[200px] lg:h-[260px] w-[100px] h-[140px] md:w-[150px] md:h-[200px] items-center mx-auto '>
                <img src={`${props.src}`} className = "mx-auto h-full" />
            </div>
            <div className='mt-2 lg:mt-11 w-full font-inter'>
                <div className='text-left text-xs leading-xs text-[#ACAEB2]'>
                    {props.category}
                </div>
                <div className='mt-2 text-left max-w-[240px] min-h-[60px] lg:h-12 text-sm font-bold'> 
                    {props.name}
                </div>
            </div>
            <div className={props.auth ? "w-full h-[56px] pt-2" : "w-full pt-2 text-left h-[56px] font-bold" } >
                {
                    props.auth ? (
                        <>
                            <div className='text-xs text-[#ACAEB2] w-[117px] text-left'>
                                List Price &euro; <del>{props.list_price} </del>
                            </div>
                            <div className='flex'>
                                <img src = {pen} className="w-4 h-4 mt-1" />
                                <div className='text-base lg:text-xl leading-[24px] font-bold ml-1'>
                                    &euro; {props.price}  
                                    <span className='text-xs font-normal text-[#ACAEB2] ml-4'>(Excl. VAT)</span>
                                </div>
                            </div>
                        </>
                        
                    ):
                    (
                        <div className='text-base  pt-4'>
                           &euro; {props.price} <span className='text-xs font-normal text-[#ACAEB2]'>(Incl. VAT)</span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

const EachProductRow = (props) => {
    return(
        <div className="flex h-full font-inter ">
            <div className="flex-auto w-[15%]">
                <img src={`${props.src}`} className = "my-auto h-[150px]" />
            </div>
            <div className="flex-auto w-[55%]">
                <div className="text-xs font-bold text-[#ACAEB2]">
                    {props.category}
                </div>
                <div className="text-2xl mt-4 font-semibold text-black h-16">
                    {props.name}
                </div>
                <div className="text-sm mt-4  text-black flex">
                    <ReactStars size={16} value = {props.rating} color2 = {'#FBB13C'}/>
                    ({props.total_count})
                </div>
                <div className="text-sm mt-4  text-[#ACAEB2] text-normal">
                     Nibh orci nunc mi aliquam, pulvinar justo, pellentesque dignissim proin. Adipiscing consectetur quis gravida dolor sit est, diam.
                </div>
            </div>
            <div className="flex-auto w-[30%]">
                <div className={props.auth ? "w-full flex justify-between h-[56px] pt-2" : "w-full pt-2 text-left h-[56px] font-bold" }>
                    {
                        props.auth ? (
                            <>
                                <div className='text-[12px] text-[#ACAEB2] w-[117px] text-left'>
                                    List Price &euro; <del>{props.list_price} </del>
                                </div>
                                <div className='flex'>
                                    <img src = {pen} className="w-4 h-4 mt-1" />
                                    <div className='text-[20px] leading-[24px] font-bold ml-1'>
                                        &euro; {props.price}  <br />
                                        <span className='text-[12px] font-normal text-[#ACAEB2]'>(Excl. VAT)</span>
                                    </div>
                                </div>
                            </>
                            
                        ):
                        (
                            <div className='text-base  pt-4'>
                                &#163; {props.price} <span className='text-[12px] font-normal text-[#ACAEB2]'>(Incl. VAT)</span>
                            </div>
                        )
                    }
                </div>
                
                <div className={props.stock == "Low" ? "text-[#FFA800]  font-inter font-bold text-xs lg:pt-[90px] float-right " : props.stock == "In" ? "text-[#4BCB67] font-inter font-bold text-xs mt-[90px] float-right " : "text-[#F30303] font-inter font-bold text-xs mt-[90px] float-right "}>
                    {props.stock} Stock
                </div>
               
                

                <div className="mt-6 lg:flex w-full float-right">
                    <div >
                      <Quantity />
                    </div>
                    <div className="ml-6 h-10 w-40 bg-[#214559] text-white flex items-center" >
                        <div className='mx-auto flex'>
                           
                            <span className='px-4'>  ADD TO CART</span>
                            
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProductListViewSettingBar = ({changeDisplayType, product_list_count, product_list_counts_per_page, changePerPageCount, displayType}) => {
    return (
        <div className="view-setting-wrapper  h-8 mb-12">
            <div className="view-setting-bar gap-6">
                <div className="gap-2">
                    <ul className="setting gap-6 flex justify-between h-[24px] font-inter text-base font-normal">
                        <li className="view-type">
                            <div className="gap-4 flex">
                                <div className="hidden lg:block">View:</div>
                                <div className="cursor-pointer" onClick={()=>changeDisplayType(true)}>

                                    <IconContext.Provider  value={{ size: 24, color: displayType==true? "black": "#828282"}}>
                                        <>
                                            <CgMenuGridR/>
                                        </>
                                    </IconContext.Provider>
                                </div>
                                <div className="cursor-pointer" onClick={()=>changeDisplayType(false)}>
                                    <IconContext.Provider value={{ size: 24, color: displayType==false? "black": "#828282"}}>
                                        <>
                                            <BiMenu />
                                        </>
                                    </IconContext.Provider>
                                </div>
                            </div>
                        </li>
                        <li className="product-result-caption hidden lg:block">Products found: {product_list_count}</li>
                        <li className="product-result-caption  lg:hidden">{product_list_count} Products</li>
                        
                        <li className="per-page hidden xl:block">
                            <div>
                                Per Page:&nbsp;
                                <select className='bg-[white] font-bold' onChange={changePerPageCount}>
                                    {product_list_counts_per_page.map(cnt =>(
                                        <option key={cnt} value = {cnt}>{cnt}</option>
                                    ))}
                                </select>
                            </div>
                        </li>
                        <li className="sort-by">
                            <div className="hidden md:block">
                                Sort by:&nbsp;
                                <select className='bg-[white] font-bold' >
                                    <option value = "">Price from low to high</option>
                                    <option value = ""></option>
                                    <option value = ""></option>
                                </select>
                            </div>
                            <div className="md:hidden  flex">
                                <div className="font-bold">Sort:</div> 
                                <ChevronDownIcon className="ml-1 mt-0 h-6 w-6 font-normal" aria-hidden="true" />
                            </div>
                        </li>
                    </ul>
                    <div className="mt-2 split-line h-0 border-b border-[#DFE1E5] border-solid">
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProductListItems = ({auth, displayType, product_list_count, pageNumber, countPerPage}) => {
    let itemArr = []
    const startIndex = countPerPage*(pageNumber-1)
    const endIndex = countPerPage*pageNumber > product_list_count ? product_list_count-1 : countPerPage*pageNumber-1
    let subItemArr = []
    let ItemArrOnMobile = []

    if(displayType==true){
        
        products.map((item, i) => {
            if(i >= startIndex && i <= endIndex){
                switch((i -startIndex + 1) % 3){
                    case 1:
                        subItemArr.push(<div key={i} className="w-1/3 p-6 ">
                            <EachProduct item_id={item.id} key={i} auth={auth} stock={item.stock}  rating={item.rating} total_count={item.count} src = {item.src}
                                category = {item.category} name={item.name} 
                                price = {item.price} list_price = {item.list_price}  />
                        </div>)
                        break
                    case 2:
                        subItemArr.push(<div key={i}  className="w-1/3  p-6 border-l border-[#DFE1E5] border-solid">
                            <EachProduct item_id={item.id} key={i} auth={auth} stock={item.stock}  rating={item.rating} total_count={item.count} src = {item.src}
                                category = {item.category} name={item.name} 
                                price = {item.price} list_price = {item.list_price}  />
                        </div>)
                        break
                    default:
                        subItemArr.push(<div key={i}  className="w-1/3 p-6 border-l border-[#DFE1E5] border-solid">
                            <EachProduct item_id={item.id} key={i} auth={auth} stock={item.stock}  rating={item.rating} total_count={item.count} src = {item.src}
                                category = {item.category} name={item.name} 
                                price = {item.price} list_price = {item.list_price}  />
                        </div>)
                        itemArr.push(
                            <div key={'row'+i.toString()} className="list-row flex lg:my-12 my-6">
                                {subItemArr}
                            </div>
                        )
                        if(i !== endIndex)
                            itemArr.push(<div key={i} className="lg:my-12 my-6 split-line h-0 border-b border-[#DFE1E5] border-solid"></div>)
                        subItemArr = []
                        break
                }
            }
            

        })
        

        if(subItemArr.length){
            itemArr.push(
                <div key='' className="list-row flex lg:my-12 my-6">
                    {subItemArr}
                </div>
            )
            subItemArr = []
        }

        
        products.map((item, i) => {
            if(i >= startIndex && i <= endIndex){
                switch((i -startIndex + 1) % 2){
                    case 1:
                        subItemArr.push(<div key={i} className="w-1/2 p-2">
                            <EachProduct item_id={item.id} key={i} auth={auth} stock={item.stock}  rating={item.rating} total_count={item.count} src = {item.src}
                                category = {item.category} name={item.name} 
                                price = {item.price} list_price = {item.list_price}  />
                        </div>)
                        break
                    default:
                        subItemArr.push(<div key={i}  className="w-1/2  p-2 border-l border-[#DFE1E5] border-solid">
                            <EachProduct item_id={item.id} key={i} auth={auth} stock={item.stock}  rating={item.rating} total_count={item.count} src = {item.src}
                                category = {item.category} name={item.name} 
                                price = {item.price} list_price = {item.list_price}  />
                        </div>)
                        ItemArrOnMobile.push(
                            <div key={'rowMobile'+i.toString()} className="list-row flex lg:my-12 my-6">
                                {subItemArr}
                            </div>
                        )
                        if(i !== endIndex)
                        ItemArrOnMobile.push(<div key={i} className="lg:my-12 my-6 split-line h-0 border-b border-[#DFE1E5] border-solid"></div>)
                        subItemArr = []
                        break
                }
            }
        
        })

        if(subItemArr.length){
            ItemArrOnMobile.push(
                <div key='mobile' className="list-row flex lg:my-12 my-6">
                    {subItemArr}
                </div>
            )
            subItemArr = []
        }
           
    }else{

         products.map((item, i) => {
            if(i >= startIndex && i <= endIndex){
            itemArr.push(
                <div key={i} className="w-full h-[215px] lg:my-12 my-6 items-center">
                    <EachProductRow key={i} auth={auth} stock={item.stock}  rating={item.rating} total_count={item.count} src = {item.src}
                                category = {item.category} name={item.name} 
                                price = {item.price} list_price = {item.list_price}  />
                </div>
            )
            if(i != endIndex)
            itemArr.push(
                    <div key={'line'+i.toString()} className="lg:my-12 my-6 split-line h-0 border-b border-[#DFE1E5] border-solid"></div>
                )
            }
        
        })
        
    }
    return (
        <>
            <div className={displayType==true? "hidden lg:block": ""} >{itemArr}</div>
            <div className="lg:hidden">{ItemArrOnMobile}</div>
        </>
    )
}

const ProductListPagination = ({changePageNumber, countPerPage, product_list_count, pageNumber}) => {
    let totalPage = Math.round(product_list_count/countPerPage)
    let previous_page_items = []
    let next_page_items = []

    for(let i = pageNumber - 1; i > 1 && i > pageNumber - 3; i--)
        previous_page_items.push( <li key={i} className="cursor-pointer" onClick={()=>changePageNumber(i)}>{i}</li>)

    for(let i = pageNumber + 1; i < totalPage && i < pageNumber + 3; i++)
        next_page_items.push( <li key={i} className="cursor-pointer" onClick={()=>changePageNumber(i)}>{i}</li>)

    return (
        <div className="product-list-pagination items-center h-[24px] text-center w-full mx-auto">
            <div className="text-center items-center flex">
                <ul className="select-none gap-6 mx-auto items-center flex text-[18px] leading-[26px] font-inter text-[#ACAEB2]">
                    <li className="cursor-pointer">
                        <IconContext.Provider value={{ size: 24, color: pageNumber==1? "#ACAEB2": "black"}}>
                            
                                <HiOutlineArrowLeft />
                           
                        </IconContext.Provider>
                    </li>
                    {pageNumber !== 1 &&
                        <li className="cursor-pointer" onClick={()=>changePageNumber(1)}>1</li>
                    }
                    {pageNumber > 4 &&
                        <li>...</li>
                    }
                    {previous_page_items}
                    <li className="font-bold text-black">{pageNumber}</li>
                    {next_page_items}
                    {pageNumber+3 < totalPage &&
                        <li>...</li>
                    }
                    {pageNumber !== totalPage &&
                        <li className="cursor-pointer" onClick={()=>changePageNumber(totalPage)}>{totalPage}</li>
                    }
                    <li className="cursor-pointer">
                        <IconContext.Provider value={{ size: 24, color: pageNumber==totalPage? "#ACAEB2": "black"}}>
                            
                                <HiOutlineArrowRight />
                           
                        </IconContext.Provider>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const ProductListContent = (props) => {
    const [auth, setAuth] = useState(true)
    const product_list_counts_per_page = [6, 9, 10, 15]
    const [displayType, SetDisplayType] = useState(true)
    const [pageNumber, setPageNumber] = useState(1)
    const [countPerPage, setCountPerPage] = useState(product_list_counts_per_page[0])
    const product_list_count = products.length
    
    
    const changeDisplayType = (status) => {
        SetDisplayType(status)
    }
    const changePageNumber = (number) => {
        setPageNumber(number)
    }
    const changePerPageCount = (event) => {
        setPageNumber(1)
        setCountPerPage(event.target.value)
    }
    return (
        <>
            <ProductListViewSettingBar displayType={displayType} changePerPageCount={changePerPageCount} changeDisplayType={changeDisplayType} product_list_count={product_list_count} product_list_counts_per_page={product_list_counts_per_page} />
            <ProductListItems auth = {auth} displayType={displayType} product_list_count={product_list_count} pageNumber={pageNumber} countPerPage={countPerPage} />
            <ProductListPagination changePageNumber={changePageNumber} countPerPage={countPerPage} product_list_count={product_list_count} pageNumber={pageNumber}  />
        </>
    )
}

export default ProductListContent