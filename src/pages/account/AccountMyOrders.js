import React, { useState }  from 'react'
import AccountLayout from './AccountLayout'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import classNames from 'classnames';

const myOdersList = [
    {
      order_number : '#CMD-2022-0119-001' ,
      status : 'SHIPPED' ,
      total : '2,569.25' ,
      created : '19 Jan. 2022'
    },
    {
      order_number : '#CMD-2022-0119-002' ,
      status : 'DELIVERED' ,
      total : '2,569.25' ,
      created : '19 Jan. 2022'
    },
    {
      order_number : '#CMD-2022-0119-003' ,
      status : 'SHIPPED' ,
      total : '2,569.25' ,
      created : '19 Jan. 2022'
    },
    {
      order_number : '#CMD-2022-0119-004' ,
      status : 'SHIPPED' ,
      total : '2,569.25' ,
      created : '19 Jan. 2022'
    },
]

const Status = ({width, height, color, title}) => {
  return (
    <div style = {{width : `${width}px` , height : `${height}px` ,  fontSize:'10px', backgroundColor : classNames(title =="SHIPPED" ? `rgba(255, 168 , 0, 0.2)` : `rgba(75, 203, 103, 0.2)`) ,  color: `${color}`  , padding: '8px 16px' , fontWeight: 'bold' , borderRadius: '24px' , display: 'flex' , alignItems:'center' }}>
        <div style={{ width: "8px" , height: '8px' , marginRight : '8px',  backgroundColor: `${color}` , borderRadius: '50px' }}>
           
        </div>
        {title}
    </div>
  )
}

const OrderItem = ({order_number, status, created,  total}) => {
  return (
    <div className='py-6 border-t border-[#D7DADE]'>
        <div className='flex justify-between'>
          <Status width={108} height = {24} title = {status} color={ status == "SHIPPED" ?'#FFA800' : '#4BCB67'} />
            <div className='flex'>
                <div className='font-inter font-semibold text-[14px] underline'>
                    View
                </div>
                <div className='font-inter font-semibold text-[14px] underline ml-6'>
                    Invoice
                </div>
            </div>
        </div>
        <div className='pt-2 font-bold'>
          {order_number} 
        </div>
        
        <div className='font-inter pt-2'>
          &euro; {total}
        </div>

        <div className='pt-2'>
          {created}
        </div>
    </div>
  )
}

const MyOrders = () => {
  return (
    <div className='md:mt-[60px]'> 
      <TableContainer className='desktop_only' >
          <Table sx={{ minWidth: 650 }}  >
            <TableHead >
              <TableRow className='!py-6'>
                <TableCell align="left" className='font-inter !font-bold text-base'>Order Number</TableCell>
                <TableCell align="left" className='font-inter !font-bold text-base'>Status</TableCell>
                <TableCell align="left" className='font-inter !font-bold text-base'>total</TableCell>
                <TableCell align="left" className='font-inter !font-bold text-base'>Created</TableCell>
                <TableCell align="left" ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {myOdersList.map((row , index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" className='!font-bold !py-6'>
                    {row.order_number}
                  </TableCell>
                  <TableCell align="left" className='!py-6'>
                    <Status width={108} height = {36} title = {row.status} color={ row.status == "SHIPPED" ?'#FFA800' : '#4BCB67'} />
                  </TableCell>
                  <TableCell align="left" className='!py-6'>&euro; {row.total}</TableCell>
                  <TableCell align="left" className='!py-6'>{row.created}</TableCell>
                  <TableCell align="left" className='!py-6'>
                    
                      <div className='flex'>
                          <div className='font-inter font-semibold text-[14px] underline'>
                              View
                          </div>
                          <div className='font-inter font-semibold text-[14px] underline ml-6'>
                              Invoice
                          </div>
                      </div>
                    
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
      </TableContainer>

      <div className='mobile_only'>
          {
             myOdersList.map((rows, index) => 
              <OrderItem key={index} order_number={rows.order_number} status = {rows.status} created = {rows.created} total = {rows.total} />
            )
          }
      </div>
    </div>
  )
};

const AccountMyOrders = () => {
    return <AccountLayout pageComponent={<MyOrders />} page="My Orders"/>;
};

export default AccountMyOrders;