import React, { useState }  from 'react'
import AccountLayout from './AccountLayout'

const ReplenishmentOrders = () => {
  return <h1>ReplenishmentOrders</h1>;
};

const AccountReplenishmentOrders = () => {
    return <AccountLayout pageComponent={<ReplenishmentOrders />} page="Replenishment Orders"/>;
};

export default AccountReplenishmentOrders;