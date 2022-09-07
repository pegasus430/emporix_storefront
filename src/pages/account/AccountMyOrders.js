import React, { useState }  from 'react'
import AccountLayout from './AccountLayout'

const MyOrders = () => {
  return (
    <h1>MyOrders</h1>
  )
};

const AccountMyOrders = () => {
    return <AccountLayout pageComponent={<MyOrders />} page="My Orders"/>;
};

export default AccountMyOrders;