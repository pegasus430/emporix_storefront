import React , { useState, useRef, useContext} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {TextInputOnly} from '../../components/Utilities/input'
import {getCartList, cartAccountSelector} from '../../redux/slices/cartReducer'
import {messageSelector} from '../../redux/slices/messageReducer'
import productService from "../../services/product/product.service";
import cartService from "services/cart.service";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useDispatch, useSelector } from "react-redux";
import priceService from "services/product/price.service";
import LayoutContext from 'pages/context'
import { CurrencyBeforeValue } from "components/Utilities/common";
import './quickorder.css'

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
const CartItem = ({item, codeHandler, quantityHandler, feature, focusHanlder, blurHandler, activeFocusCode, removeHandler}) => {
    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            className = 'text-base'
        >
            <TableCell component="th" scope="row" className="!py-6">
                { feature==='action'?
                    <TextInputOnly 
                        value={item.code} 
                        action={codeHandler} 
                        placeholder="Enter Code"
                        className = 'border max-w-[160px]' 
                    />:
                    <TextInputOnly
                        value={item.code}
                        className = 'border max-w-[160px]' 
                    />
                }
                
            </TableCell>
            <TableCell align="left" className="!py-6 !font-bold w-[250px]">
                {item.name}
            </TableCell>
            <TableCell align="left" className='!py-6'>
                <TextInputOnly 
                    value =  {item.quantity} 
                    action = {(value) => quantityHandler(value, item.code, feature)}
                    onFocus = {() => {
                        if(focusHanlder !== undefined) focusHanlder(item.code)
                    }}
                    onBlur = {() => {
                        if(blurHandler !== undefined) blurHandler(item.code)
                    }}
                    className = 'border max-w-[56px] '
                    autoFocus={activeFocusCode === item.code ? true: false}
                />
            </TableCell>
            <TableCell align="left" className='!py-6'>
                {item.price.totalValue ? CurrencyBeforeValue(item.price.totalValue): null}
            </TableCell>
            <TableCell align="left" className='!py-6'>
                    {item.price.totalValue ? CurrencyBeforeValue(Math.trunc(item.price.totalValue * item.quantity * 100) / 100): null}
            </TableCell>
            <TableCell align="left" className='!py-6' onClick={()=>removeHandler(item.code)}>
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
    // Add Product state
    const [addProduct, setAddProduct] = useState({
        code: "",
        name: "",
        quantity: 1,
        id: Math.random(),
        price: {
            
        }
    })
    const {setShowCart} = useContext(LayoutContext)
    const isLoading = useRef(false)
    const activeFocusCode = useRef(null)
    // Tempo product list to add cart.
    const [tempoProductList, setTempoProductList] = useState([])
    // Notification message
    const [openNotification , setOpenNotification] = useState(false)
    const message = useSelector(messageSelector);
    const cartAccount = useSelector(cartAccountSelector)
    // Dispatch function
    const dispatch = useDispatch()
    // Notification handle close
    const handleClose = () => {
        setOpenNotification(false);
    };
    // Handle Code Change
    const handleCodeChange = async (code) => {
        if(isLoading.current) return
        const res = await productService.getProductsWithCode([code])
        if(res.length > 0){
            const price = await priceService.getPriceWithProductIds([res[0]['id']])
            if(price.length){
                setAddProduct({
                    ...addProduct,
                    quantity: 1,
                    name: '',
                    id: Math.random()
                })
                const matchProduct = tempoProductList.filter(product => product.code===code)
                if(!matchProduct.length)
                    setTempoProductList([
                        ...tempoProductList,
                        {
                            ...addProduct,
                            code: res[0]['id'],
                            name: res[0]['name'],
                            yrn: res[0]['yrn'],
                            price: price[0]
                        }
                    ])
            }
        }else{
            if(addProduct.name !== '')
                setAddProduct({
                    ...addProduct,
                    name: '',
                    price: {}
                })
        }
    }
    // Handle Quantity Change
    const handleQuantityChange = (quantity, code, feature) => {
        if(feature === 'action'){
            setAddProduct({
                ...addProduct,
                quantity: quantity
            })
        }else{
            const newTempoProductList = tempoProductList.map(product => {
                if(product.code === code) {
                    return {
                        ...product,
                        quantity: quantity
                    }
                }
                return product
            })
            setTempoProductList(newTempoProductList)
        }
    }
    const handleFocus = (code) => {
        activeFocusCode.current = code

    }
    const handleBlur = () => {
        activeFocusCode.current = null
    }
    const handleRemove = (code) => {
        const newTempoProductList = tempoProductList.filter(product => product.code !== code)
        setTempoProductList(newTempoProductList)
    }
    const clearProductList = () => {
        setTempoProductList([])
    }
    const addProductsToCart = async () => {
        await cartService.addMultipleProductsToCart(cartAccount.id, tempoProductList)
        dispatch(getCartList(cartAccount.id))
        setShowCart(true)
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
                <span className="pr-8 cursor-pointer" onClick={clearProductList}>Clear List</span>
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
                            {tempoProductList.map((tempoProduct) => 
                                    <CartItem 
                                        feature="row" 
                                        key={Math.random()} 
                                        item = {tempoProduct} 
                                        quantityHandler={handleQuantityChange} 
                                        focusHanlder={handleFocus} 
                                        blurHandler={handleBlur}
                                        activeFocusCode={activeFocusCode.current}
                                        removeHandler={handleRemove}
                                    />
                                )
                            }
                            {tempoProductList.length === 0?
                                <TableRow >
                                    <TableCell colSpan = {6} align="center"  className='font-inter !font-bold text-[14px]'>Empty Cart List</TableCell>
                                </TableRow>: ""
                            }
                            {/* Add Cart Row */}
                            <CartItem key={addProduct.id} feature="action"  item={addProduct} codeHandler={handleCodeChange} quantityHandler={handleQuantityChange}/>
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className="float-right pt-12">
                <button className="quickorder-add-to-cart-btn" onClick={addProductsToCart}>ADD TO CART</button> <br />
                <button className="quickorder-add-to-quote-btn">ADD TO QUOTE</button>             
            </div>
            
        </div>
    )
}

const MobileContent = () => {
    const [quickOrderList , setQuickOrderList ] = useState(list)
    const handleCodeChange = (code) => {
        
    }
    // const handleQuantityChange = () => {
           
    // }

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
                                        { CurrencyBeforeValue(item.unitPrice) }
                                    </span>
                                </div>
                                <div className="pl-6">
                                    <span className="font-bold text-sm">
                                        Total Price
                                    </span><br />
                                    <span className=" tex-sm">
                                        { CurrencyBeforeValue(item.total) }
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