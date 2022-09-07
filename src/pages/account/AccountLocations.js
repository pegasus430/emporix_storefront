import React, { useState }  from 'react'
import AccountLayout from './AccountLayout'

const Locations = () => {
  return <h1>Locations</h1>;
};

const AccountLocations = () => {
    return <AccountLayout pageComponent={<Locations />} page="Locations"/>;
};

export default AccountLocations;