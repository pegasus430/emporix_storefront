import React , { useState, createContext, useContext} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
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

const DesktopContent = () => {
   
    const [quickOrderList , setQuickOrderList ] = useState(list)
    const handleCodeChange = () => {

    }
    const handleQuantityChange = () => {

    }
    return (
        <div className="desktop_only">
            <div className="float-right underline text-base font-medium text-[#377395]">
                <span className="pr-8">Clear List</span>
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
                                <TableCell align="left" className='font-inter !font-bold text-[14px]'>Unite Price</TableCell>
                                <TableCell align="left" className='font-inter !font-bold text-[14px]'>Total</TableCell>
                                <TableCell align="left" ></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                quickOrderList.map((item, index ) => 
                                <TableRow
                                    key = {index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    className = 'text-base'
                                >
                                    <TableCell component="th" scope="row" className=' !py-6'>
                                        <input value = {item.code} onChange = {handleCodeChange} className = 'border max-w-[160px]' />
                                    </TableCell>
                                    <TableCell align="left" className='!py-6 !font-bold w-[250px]'>
                                        {item.name}
                                    </TableCell>
                                    <TableCell align="left" className='!py-6'>
                                        <input value =  {item.quantity} onChange = {handleQuantityChange} className = 'border max-w-[56px] ' /> 
                                        {item.code ? <span className = "text-[#ACAEB2]" >Unit</span> : null}
                                        
                                    </TableCell>
                                    <TableCell align="left" className='!py-6'>
                                        {item.unitPrice ? "€ " + item.unitPrice: null}
                                    </TableCell>
                                    <TableCell align="left" className='!py-6'>
                                          {item.total ? "€ " + item.total: null}
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
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <div className="float-right pt-12">
                <button className="quickorder-add-to-cart-btn" >ADD TO CART</button>  <br />
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