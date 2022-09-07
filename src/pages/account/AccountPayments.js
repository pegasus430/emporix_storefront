import React, { useState }  from 'react'
import AccountLayout from './AccountLayout'

const Payments = () => {
  return <h1>Payments</h1>;
};

const AccountPayments = () => {
    return <AccountLayout pageComponent={<Payments />} page="Payments"/>;
};

export default AccountPayments;