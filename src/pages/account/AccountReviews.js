import React, { useState }  from 'react'
import AccountLayout from './AccountLayout'

const Reviews = () => {
  return <h1>Reviews</h1>;
};

const AccountReviews = () => {
    return <AccountLayout pageComponent={<Reviews />} page="Reviews"/>;
};

export default AccountReviews;