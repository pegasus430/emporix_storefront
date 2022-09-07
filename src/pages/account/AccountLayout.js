import React, { useState }  from 'react'
import { Link, Outlet, useParams} from 'react-router-dom'

const AccountMenu = () => {
    return (
        <>
        </>
    )
}
const AccountLayout = ({pageComponent}) => {
    return (
        <div className="content-wrapper">
           <div className="account-menu-items-left-panel left-menu-panel">
               <AccountMenu />
            </div>
            <div className="account-page-content content-panel">
                {pageComponent}
            </div>
        </div>
    )
}

export default AccountLayout