import { CgMenuGridR } from "react-icons/cg"
import { BiMenu } from "react-icons/bi"
import React, { useState , useRef, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { IconContext } from "react-icons"
import { ChevronDownIcon } from '@heroicons/react/solid'
import { HiOutlineArrowLeft, HiOutlineArrowRight} from 'react-icons/hi'
import ReactStars from 'react-stars'
import pen from "../../assets/products/pencil.png"
import Quantity from "../../components/Utilities/quantity/quantity"
import { useNavigate } from "react-router-dom";
// import products from './products'
import {productLoadingSelector, productIdsSelector, setLoadingStatus, getProductData, productDataSelector} from '../../redux/slices/productReducer'
import {LoadingCircleProgress1} from '../../components/Utilities/progress'
import {max_product_description_length, min_product_in_stock_count} from '../../constants/page'
import {availabilityDataSelector} from '../../redux/slices/availabilityReducer'

import parse from 'html-react-parser'
import { tenantKey } from "../../constants/localstorage"

const EachProduct = (props) => {
    const tenant = localStorage.getItem(tenantKey)
    const navigate = useNavigate();
    const HandleProductDetail = () => {
        navigate(`/${tenant}/product/details/${props.item_id}`)
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
                    {props.code}
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
                                { props.list_price !== ""?
                                    <>List Price &euro; <del>{props.list_price} </del></>:
                                    <span className='text-xs  text-[#F30303] font-bold'>No Price</span>  
                                } 
                                
                            </div>
                            <div className='flex'>
                                { props.price !== ""?
                                    <>
                                        <img src = {pen} className="w-4 h-4 mt-1" />
                                        <div className='text-base lg:text-xl leading-[24px] font-bold ml-1'>
                                            <>&euro; {props.price} <span className='text-xs font-normal text-[#ACAEB2] ml-4'>(Excl. VAT)</span></>
                                        </div>
                                    </>:
                                    <></>
                                }     
                            </div>
                        </>
                        
                    ):
                    (
                        <div className='text-base  pt-4'>
                            { props.list_price !== ""?
                                <>&euro; {props.list_price} <span className='text-xs font-normal text-[#ACAEB2]'>(Incl. VAT)</span></>:
                                <span className='text-xs  text-[#F30303] font-bold'>No Price</span>   
                            } 
                        </div>
                    )
                }
            </div>
        </div>
    )
}

const EachProductRow = (props) => {
    const description = props.description.length > max_product_description_length ? `${props.description.substr(0,max_product_description_length)} ...`:props.description
    return(
        <div className="flex h-full font-inter ">
            <div className="flex-auto w-[15%]">
                <img src={`${props.src}`} className = "my-auto h-[150px]" />
            </div>
            <div className="flex-auto w-[55%]">
                <div className="text-xs font-bold text-[#ACAEB2]">
                    {props.code}
                </div>
                <div className="text-2xl mt-4 font-semibold text-black h-16">
                    {props.name}
                </div>
                <div className="text-sm mt-4  text-black flex">
                    <ReactStars size={16} value = {props.rating} color2 = {'#FBB13C'}/>
                    ({props.total_count})
                </div>
                <div className="text-sm mt-4  text-[#ACAEB2] text-normal">
                     {/* Nibh orci nunc mi aliquam, pulvinar justo, pellentesque dignissim proin. Adipiscing consectetur quis gravida dolor sit est, diam. */}
                    {parse(`<span>${description}</span>`)}
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
                                &#163; {props.list_price} <span className='text-[12px] font-normal text-[#ACAEB2]'>(Incl. VAT)</span>
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

const ProductListItems = ({products, auth, displayType, product_list_count, pageNumber, countPerPage}) => {
    const availability = useSelector(availabilityDataSelector)
    
    let itemArr = []
    let subItemArr = []
    let ItemArrOnMobile = []
    let imgsrc, stock
    if(displayType==true){
        
        products.map((item, i) => {

            imgsrc = item.media[0]==undefined?"":item.media[0]['url']
            if(availability['k'+item.id] == undefined) stock = "Out Of"
            else if(availability['k'+item.id]['stockLevel'] < min_product_in_stock_count) stock = "Low"
            else stock = "In"

            let price = "", list_price = "";
            if(item.price !== undefined){
                list_price = Math.trunc(item.price.totalValue * 100) / 100
                price = list_price
                if(item.price.priceModel !== undefined && item.price.priceModel.includesTax === false){
                    price = Math.trunc(price * 10000 / (100 + item.price.tax.taxRate)) / 100
                }
            }
            switch((i + 1) % 3){
                case 1:
                    subItemArr.push(<div key={i} className="w-1/3 p-6 ">
                        <EachProduct item_id={item.id} key={i} auth={auth} stock={stock}  rating={4} total_count={8} src = {imgsrc}
                            code =  {item.code} name={item.name} 
                            price = {price} list_price = {list_price}  />
                    </div>)
                    break
                case 2:
                    subItemArr.push(<div key={i}  className="w-1/3  p-6 border-l border-[#DFE1E5] border-solid">
                        <EachProduct item_id={item.id} key={i} auth={auth} stock={stock}  rating={4} total_count={8} src = {imgsrc}
                            code =  {item.code} name={item.name} 
                            price = {price} list_price = {list_price}  />
                    </div>)
                    break
                default:
                    subItemArr.push(<div key={i}  className="w-1/3 p-6 border-l border-[#DFE1E5] border-solid">
                        <EachProduct item_id={item.id} key={i} auth={auth} stock={stock}  rating={4} total_count={8} src = {imgsrc}
                            code =  {item.code} name={item.name} 
                            price = {price} list_price = {list_price}  />
                    </div>)
                    itemArr.push(
                        <div key={'row'+i.toString()} className="list-row flex lg:my-12 my-6">
                            {subItemArr}
                        </div>
                    )
                    if(i !== products.length-1)
                        itemArr.push(<div key={i} className="lg:my-12 my-6 split-line h-0 border-b border-[#DFE1E5] border-solid"></div>)
                    subItemArr = []
                    break
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

            let price = "", list_price = "";
            if(item.price !== undefined){
                list_price = Math.trunc(item.price.totalValue * 100) / 100
                price = list_price
                if(item.price.priceModel !== undefined && item.price.priceModel.includesTax === false){
                    price = Math.trunc(price * 10000 / (100 + item.price.tax.taxRate)) / 100
                }
            }

            switch((i + 1) % 2){
                case 1:
                    subItemArr.push(<div key={i} className="w-1/2 p-2">
                        <EachProduct item_id={item.id} key={i} auth={auth} stock={stock}  rating={4} total_count={8} src = {item.src}
                            code = {item.code} name={item.name} 
                            price = {price} list_price = {list_price}  />
                    </div>)
                    break
                default:
                    subItemArr.push(<div key={i}  className="w-1/2  p-2 border-l border-[#DFE1E5] border-solid">
                        <EachProduct item_id={item.id} key={i} auth={auth} stock={stock}  rating={4} total_count={8} src = {item.src}
                            code = {item.code} name={item.name} 
                            price = {price} list_price = {list_price}  />
                    </div>)
                    ItemArrOnMobile.push(
                        <div key={'rowMobile'+i.toString()} className="list-row flex lg:my-12 my-6">
                            {subItemArr}
                        </div>
                    )
                    if(i !== products.length - 1)
                    ItemArrOnMobile.push(<div key={i} className="lg:my-12 my-6 split-line h-0 border-b border-[#DFE1E5] border-solid"></div>)
                    subItemArr = []
                    break
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
            imgsrc = item.media[0]==undefined?"":item.media[0]['url']
            if(availability[item.id] == undefined) stock = "Out Of"
            else if(availability[item.id] < min_product_in_stock_count) stock = "Low"
            else stock = "In"

            let price = "", list_price = "";
            if(item.price !== undefined){
                list_price = Math.trunc(item.price.totalValue * 100) / 100
                price = list_price
                if(item.price.priceModel !== undefined && item.price.priceModel.includesTax === false){
                    price = Math.trunc(price * 10000 / (100 + item.price.tax.taxRate)) / 100
                }
            }
            itemArr.push(
                <div key={i} className="w-full h-[215px] lg:my-12 my-6 items-center">
                    <EachProductRow key={i} auth={auth} stock={stock}  rating={4} total_count={8} src = {imgsrc}
                                code = {item.code} name={item.name} description = {item.description}
                                price = {price} list_price = {list_price}  />
                </div>
            )
            if(i != products.length - 1)
                itemArr.push(
                    <div key={'line'+i.toString()} className="lg:my-12 my-6 split-line h-0 border-b border-[#DFE1E5] border-solid"></div>
                )
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

    if(totalPage < pageNumber) pageNumber = 1

    for(let i = pageNumber - 1; i > 1 && i > pageNumber - 3; i--)
        previous_page_items.unshift( <li key={i} className="cursor-pointer" onClick={()=>changePageNumber(i)}>{i}</li>)
    
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
                    {(pageNumber !== totalPage && totalPage != 0) &&
                        <li className="cursor-pointer" onClick={()=>changePageNumber(totalPage)}>{totalPage}</li>
                    }
                    <li className="cursor-pointer">
                        <IconContext.Provider value={{ size: 24, color: pageNumber==totalPage || totalPage == 0? "#ACAEB2": "black"}}>
                            
                                <HiOutlineArrowRight />
                           
                        </IconContext.Provider>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const ProductListContent = (props) => {
    const { user: currentUser } = useSelector((state) => state.auth);
    const product_list_counts_per_page = [6,9,15]
    const [displayType, SetDisplayType] = useState(true)
    const [pageNumber, setPageNumber] = useState(1)
    const [countPerPage, setCountPerPage] = useState(product_list_counts_per_page[0])
    
    const loading = useSelector(productLoadingSelector)
    const productIds = useSelector(productIdsSelector)
    const products = useSelector(productDataSelector)

    const dispatch = useDispatch()

    useEffect(() => {
        setPageNumber(1)
        dispatch(getProductData(productIds, productIds.length,1, countPerPage))
    }, [productIds])


    const changeDisplayType = (status) => {
        SetDisplayType(status)
    }
    const changePageNumber = async (number) => {
        dispatch(setLoadingStatus(true))
        setPageNumber(number)
        dispatch(getProductData(productIds, productIds.length,number, countPerPage))
    }
    const changePerPageCount = (event) => {
        setPageNumber(1)
        setCountPerPage(event.target.value)
    }

    return (
        <>
            <ProductListViewSettingBar displayType={displayType} changePerPageCount={changePerPageCount} changeDisplayType={changeDisplayType} product_list_count={productIds.length} product_list_counts_per_page={product_list_counts_per_page} />
            {loading?
                <LoadingCircleProgress1 />:
                <>
                    <ProductListItems products = {products} auth = {currentUser ? true : false} displayType={displayType} product_list_count={productIds.length} pageNumber={pageNumber} countPerPage={countPerPage} />
                    <ProductListPagination changePageNumber={changePageNumber} countPerPage={countPerPage} product_list_count={productIds.length} pageNumber={pageNumber}  />
                </>
            }
        </>
    )
}

export default ProductListContent