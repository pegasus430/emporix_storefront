import React, { useState }  from 'react'
import AccountLayout from './AccountLayout'

const SavedCarts = () => {
  return <h1>SavedCarts</h1>;
};

const AccountSavedCarts = () => {
    return <AccountLayout pageComponent={<SavedCarts />} page="Saved Carts"/>;
};

export default AccountSavedCarts;