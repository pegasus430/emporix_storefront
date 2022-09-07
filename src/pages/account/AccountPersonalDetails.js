import React, { useState }  from 'react'
import { Link, Outlet, useParams} from 'react-router-dom'
import AccountLayout from './AccountLayout'

const PersonalDetails = () => {
  return <h1>PersonalDetails</h1>;
};

const AccountPersonalDetails = () => {
    return <AccountLayout pageComponent={<PersonalDetails />} page="Personal Details"/>;
};


export default AccountPersonalDetails;
  