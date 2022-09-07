import React, { useState }  from 'react'
import { Link, Outlet, useParams} from 'react-router-dom'
import AccountLayout from './AccountLayout'

const MyAccountContent = () => {
  return (
    <h1>MyAccountContent</h1>
  )
}

const MyAccount = () => {
    return <AccountLayout pageComponent={<MyAccountContent />} page="My Account"/>;
}

export default MyAccount
  