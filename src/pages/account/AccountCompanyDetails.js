import React, { useState }  from 'react'
import AccountLayout from './AccountLayout'

const CompanyDetails = () => {
  return <h1>CompanyDetails</h1>;
};

const AccountCompanyDetails = () => {
    return <AccountLayout pageComponent={<CompanyDetails />} page="Company Details"/>;
};


export default AccountCompanyDetails;
  