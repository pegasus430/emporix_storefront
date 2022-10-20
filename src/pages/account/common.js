import classNames from 'classnames';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';

const myOdersList = [
  {
    order_number : 'CMD-2022-0119-001' ,
    status : 'SHIPPED' ,
    total : '2,569.25' ,
    created : '19 Jan. 2022'
  },
  {
    order_number : 'CMD-2022-0119-002' ,
    status : 'DELIVERED' ,
    total : '2,569.25' ,
    created : '19 Jan. 2022'
  },
  {
    order_number : 'CMD-2022-0119-003' ,
    status : 'SHIPPED' ,
    total : '2,569.25' ,
    created : '19 Jan. 2022'
  },
  {
    order_number : 'CMD-2022-0119-004' ,
    status : 'SHIPPED' ,
    total : '2,569.25' ,
    created : '19 Jan. 2022'
  },
]


const OrderItem = ({order_number, status, created,  total}) => {
  return (
    <div className='py-6 border-b border-[#D7DADE]'>
        <div className='flex justify-between'>
          
          <div className=''>
            {order_number} 
          </div>
            <Status width={108} height = {24} title = {status} color={ status == "SHIPPED" ?'#FFA800' : '#4BCB67'} />
        </div>
        
        
        <div className='font-inter pt-4 flex justify-between'>
          <div className=''>&euro; {total}</div>
          <div className=''>
            {created}
          </div>
        </div>

        
    </div>
  )
}

export const MyOrders = ({actions}) => {
  return (
    <div className=''> 
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
                          {actions.map((row_,index) => (
                            <div key={index} className={index > 0 ? 'font-inter font-semibold text-[14px] underline ml-6':'font-inter font-semibold text-[14px] underline'}>
                                <Link to={`${row_.link}${row.order_number}`}>{row_.title}</Link>
                            </div>
                          ))

                          }
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

export const Status = ({width, height, color, title}) => {
    return (
      <div style = {{width : `${width}px` , height : `${height}px` ,  fontSize:'10px', backgroundColor : classNames(title =="SHIPPED" ? `rgba(255, 168 , 0, 0.2)` : `rgba(75, 203, 103, 0.2)`) ,  color: `${color}`  , padding: '8px 16px' , fontWeight: 'bold' , borderRadius: '24px' , display: 'flex' , alignItems:'center' }}>
          <div style={{ width: "8px" , height: '8px' , marginRight : '8px',  backgroundColor: `${color}` , borderRadius: '50px' }}>
             
          </div>
          {title}
      </div>
    )
  }

  const savedCartsList = [
    {
      date : '11/05/2022' ,
      name : 'Basket Name',
      items : '24' ,
      total : '2,569.25'
    } ,
    {
      date : '11/05/2022' ,
      name : 'Basket Name',
      items : '17' ,
      total : '2,569.25'
    } ,
    {
      date : '11/05/2022' ,
      name : 'Basket Name',
      items : '4' ,
      total : '2,569.25'
    } ,
    {
      date : '11/05/2022' ,
      name : 'Basket Name',
      items : '24' ,
      total : '2,569.25'
    } ,
    {
      date : '11/05/2022' ,
      name : 'Basket Name',
      items : '24' ,
      total : '2,569.25'
    } ,
  
  
  ]
  
  const MobileCartItem = ({date, name, items , total}) => {
      return (
        <div className='py-6 border-t border-[#D7DADE]'>
            <div className='flex justify-between'>
                <span>{name}</span>
                <div className=''>
                  {items} items
              </div>
            </div>
            <div className='flex justify-between pt-2'>
              <div className='font-inter font-bold'>
                &euro; {total}
              </div>
              <div className=''>
                {date}
              </div>
            </div>
            
            
        </div>
      )
  }
  
  export const SavedCarts = ({actions}) => {
    return (
      <div className=''> 
        <TableContainer className='desktop_only' >
            <Table sx={{ minWidth: 650 }}  >
              <TableHead >
                <TableRow >
                  <TableCell align="left" className='font-inter !font-bold text-base'>Date</TableCell>
                  <TableCell align="left" className='font-inter !font-bold text-base'>Name</TableCell>
                  <TableCell align="left" className='font-inter !font-bold text-base'>Items</TableCell>
                  <TableCell align="left" className='font-inter !font-bold text-base'>Total</TableCell>
                  <TableCell align="left" ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {savedCartsList.map((row , index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    className='!py-6'
                  >
                    <TableCell component="th" scope="row" className='!py-6' >
                      {row.date}
                    </TableCell>
                    <TableCell align="left" className='!py-6'>{row.name}</TableCell>
                    <TableCell align="left" className='!py-6'>{row.items}</TableCell>
                    <TableCell align="left" className='!py-6'>&euro; {row.total}</TableCell>
                    <TableCell align="left" className='!py-6'>
                      
                      <div className='flex'>
                          {actions.map((row,index) => (
                            <div key={index} className={index > 0 ? 'font-inter font-semibold text-[14px] underline ml-6':'font-inter font-semibold text-[14px] underline'}>
                                {row.title}
                            </div>
                          ))

                          }
                      </div>
                      
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </TableContainer>
  
        <div className='mobile_only'>
            <div className='flex py-[5px] justify-between SavedCarts-Mobile-Header'>
                <div>Date</div>
                <div className=''>Name</div>
            </div>
            {
              savedCartsList.map((rows, index) => 
                <MobileCartItem key={index} name={rows.name} date = {rows.date} items = {rows.items} total = {rows.total} />
              )
            }
        </div>
      </div>
    )
  };

export default Status

