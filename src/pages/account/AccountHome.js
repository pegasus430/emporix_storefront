import {MyAccountContent} from './MyAccount'
import React from 'react'
import AccountLayout from './AccountLayout'

const AccountHome = () => {
    return <AccountLayout pageComponent={<MyAccountContent />} page="Index"/>;
}

export default AccountHome
