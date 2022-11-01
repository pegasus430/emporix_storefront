import React , { useState} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {TextInputOnlyWithEnterKey, TextInputOnly} from '../../components/Utilities/input'
import {cartProductSelector, putCartProduct, clearCart, cartAccountSelector} from '../../redux/slices/cartReducer'
import {messageSelector, setMessage} from '../../redux/slices/messageReducer'
import {availabilityDataSelector} from '../../redux/slices/availabilityReducer'
import productService from "../../services/product/product.service";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import {min_product_in_stock_count} from '../../constants/page'
import './quickorder.css'
import { useDispatch, useSelector } from "react-redux";
const list = [
    {
        code : '01-460-05860',
        name : 'Jysk Office Chair sKODSBORG',
        quantity : '10' ,
        unitPrice: '12.90',
        total : '129.00'
    },
    {
        code : '01-460-05860',
        name : 'Office Desk  sKODSBORG',
        quantity : '10' ,
        unitPrice: '12.90',
        total : '129.00'
    },
    {
        code : '',
        name : '',
        quantity : '' ,
        unitPrice: '',
        total : ''
    }
]
const CartItem = ({item, handleCodeChange, handleQuantityChange, feature}) => {
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            className = 'text-base'
        >
            <TableCell component="th" scope="row" className=' !py-6'>
                {
                    feature==="action"?
                        <TextInputOnly value={item.code} action={handleCodeChange}  placeholder="Enter Code" className = 'border max-w-[160px]' />:
                        <TextInputOnlyWithEnterKey value={item.code} action={handleCodeChange}  placeholder="Enter Code" className = 'border max-w-[160px]' />
                }
            </TableCell>
            <TableCell align="left" className='!py-6 !font-bold w-[250px]'>
                {item.name}
            </TableCell>
            <TableCell align="left" className='!py-6'>
                {
                    feature==="action"?
                        <TextInputOnly value =  {item.buy_count} action = {(value) => handleQuantityChange(value, item)} className = 'border max-w-[56px] ' />:
                        <TextInputOnlyWithEnterKey value =  {item.buy_count} action = {(value) => handleQuantityChange(value, item)} className = 'border max-w-[56px] ' />
                }
                    
            </TableCell>
            <TableCell align="left" className='!py-6'>
                {item.list_price ? "€ " + item.list_price: null}
            </TableCell>
            <TableCell align="left" className='!py-6'>
                    {item.list_price ? "€ " + Math.trunc(item.list_price * item.buy_count * 100) / 100: null}
            </TableCell>
            <TableCell align="left" className='!py-6'>
                {
                    item.code?
                    <span className="underline font-bold">
                        X
                    </span> : null
                }
                
            </TableCell>
        </TableRow>
    )
}
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const DesktopContent = () => {
   
    const cartProductList = useSelector(cartProductSelector)
    const [code, setCode] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [addProduct, setAddProduct ]=  useState({
        yrn : '' ,
        code : code,
        name : '',
        src : '',
        buy_count : quantity,
        unitPrice: '',
        price : '' ,
        total : '' , 
        stock : '',
        estimated_delivery : "",
        product_count : '',
        rating : ''
    })

    const [openNotification , setOpenNotification] = useState(false)
    const message = useSelector(messageSelector);
    const cartAccount = useSelector(cartAccountSelector)
    const dispatch = useDispatch()
    const handleClose = () => {
        setOpenNotification(false);
    };
    const availability = useSelector(availabilityDataSelector)

    
    const clearCartAction = () => {
        dispatch(clearCart())
        dispatch(setMessage(`All carts are removed succesfully.`))
        setOpenNotification(true);
    }
    const handleCodeChange = () => {

    }

    

    const AddQuickCodeChange = async (value) => {
        setCode(value)

        let res = await productService.getProductsWithCode([value])

        if(res.data.length === 0){
            dispatch(setMessage(`The product is not existed.`))
            setOpenNotification(true);
            return
        }
        // Get first product
        res = res.data[0]
        let src = (res.media[0]==undefined?"":res.media[0]['url'])
        // let price = res.price
        // let unitPrice = res.list_price
        let price = "123.22"
        let unitPrice = "123.44"
        let buy_count = quantity
        
        let stock, stockLevel = 0
        if(availability['k'+res.id] === undefined) stock = "Out Of"
        else{
            stockLevel = parseInt(availability['k'+res.id]['stockLevel'])
            if(stockLevel < min_product_in_stock_count) stock = "Low"
            else stock = "In"
        }
        stock = stock
        let estimated_delivery = "23.05.2022"
        let product_count = stockLevel
        let rating = 4

        setAddProduct({
            yrn : res.yrn,
            code : value,
            name : res.name,
            src : src,
            buy_count : quantity,
            unitPrice: unitPrice,
            price : price ,
            total : '' , 
            stock : stock,
            estimated_delivery : estimated_delivery,
            product_count : product_count,
            rating : rating
        })

    }

    const handleQuantityChange = (value, item) => {
        let new_item = {...item}
        new_item['buy_count'] = value
        dispatch(putCartProduct(cartAccount.id,new_item))
    }
    const addCartProduct =  () => {
        console.log("add cart product")
        console.log(addProduct)
        dispatch(putCartProduct(cartAccount.id, addProduct))
    }
    return (
        <div className="desktop_only">
            <Snackbar
                open={openNotification}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin = {{vertical:"top", horizontal: "right"}}
            >
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
            <div className="float-right underline text-base font-medium text-[#377395]">
                <span className="pr-8 cursor-pointer" onClick={()=>clearCartAction()}>Clear List</span>
                <span>Order list</span>
            </div>
            <div className="pt-[58px]">
                <TableContainer  >
                    <Table sx={{ minWidth: 650 }}  >
                        <TableHead >
                            <TableRow className='!py-2'>
                                <TableCell align="left" className='font-inter !font-bold text-[14px]'>Code</TableCell>
                                <TableCell align="left" className='font-inter !font-bold text-[14px]'>Item</TableCell>
                                <TableCell align="left" className='font-inter !font-bold text-[14px]'>Quantity</TableCell>
                                <TableCell align="left" className='font-inter !font-bold text-[14px]'>Unit Price</TableCell>
                                <TableCell align="left" className='font-inter !font-bold text-[14px]'>Total</TableCell>
                                <TableCell align="left" ></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                               
                                Object.keys(cartProductList).map((key, index) => 
                                    <CartItem feature="row" key={Math.random()} item = {cartProductList[key]} handleCodeChange={handleCodeChange} handleQuantityChange={handleQuantityChange}/>
                                )
                            }
                            {
                                Object.keys(cartProductList).length === 0?
                                    <TableRow >
                                        <TableCell colSpan = {6} align="center"  className='font-inter !font-bold text-[14px]'>Empty Cart List</TableCell>
                                    </TableRow>: ""
                            }
                            {/* Add Cart Row */}
                            <CartItem feature="action" key="add" item={addProduct} handleCodeChange={AddQuickCodeChange} handleQuantityChange={setQuantity}/>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className="float-right pt-12">
                <button className="quickorder-add-to-cart-btn" onClick={addCartProduct}>ADD TO CART</button>  <br />
                <button className="quickorder-add-to-quote-btn">ADD TO QUOTE</button>             
            </div>
            
        </div>
    )
}

const MobileContent = () => {
    const [quickOrderList , setQuickOrderList ] = useState(list)
    const handleCodeChange = () => {

    }
    const handleQuantityChange = () => {

    }

    const MobileQuickOrderCell = ({item}) => {
        return (
            <div className="w-full pt-10">
                <div className="flex gap-2">
                    <input value = {item.code} onChange = {handleCodeChange} className = "border p-1 w-[72%]" placeholder="Enter Code"/>
                    <input value = {item.quantity} onChange = {handleCodeChange} className = "border p-1 w-[25%]"  />
                </div>
                {
                    item.code ? 
                    <div>
                        <div className="pt-4 font-bold text-base">
                            {item.name}
                        </div>
                        <div className="flex justify-between pt-4">
                            <div className="flex">
                                <div>
                                    <span className="font-bold text-sm">
                                        Unit Price
                                    </span><br />
                                    <span className="tex-sm">
                                        &euro; {item.unitPrice}
                                    </span>
                                </div>
                                <div className="pl-6">
                                    <span className="font-bold text-sm">
                                        Total Price
                                    </span><br />
                                    <span className=" tex-sm">
                                        &euro; {item.total}
                                    </span>
                                </div>
                                
                            </div>
                            <div className="items-center">
                                <span className="underline font-bold">
                                    X
                                </span>
                            </div>
                        </div>
                    </div> : 
                    null
                }
                
            </div>
        )
    }
    return (
        <div className="mobile_only">
            
            <div className="">
               <div className="border-b flex justify-between pr-10 pb-2 font-bold text-sm">
                    <span>Code</span>
                    <span>Quantity</span>
               </div>
               {
                    quickOrderList.map((item, index) => 
                        <MobileQuickOrderCell item = {item} key = {index} />
                    )
                    
               }
            </div>
            <div className="float-left underline text-base font-medium text-[#377395] mt-10">
                <div>Clear List</div> 
                <div className="mt-6">Order list</div>
            </div>
            <div className="w-full pt-12">
                <button className="quickorder-add-to-cart-btn" >ADD TO CART</button>  <br />
                <button className="quickorder-add-to-quote-btn">ADD TO QUOTE</button>             
            </div>
            
        </div>
    )
}

const QuickOrderContent = () => {

    return (
        <div className='md:w-2/3'>
            <DesktopContent />
            <MobileContent />
        </div>
    )
}


export default QuickOrderContent;