import React, { useState }  from 'react'
import AccountMenu from './AccountMenu'
import AccountSubTitle from './AccountSubTitle'

const AccountLayout = ({pageComponent, page}) => {
    return (
        <div className="content-wrapper">
           <div className="account-menu-items-left-panel left-menu-panel">
               <AccountMenu page={page}/>
            </div>
            <div className="account-page-content content-panel pl-6">
                <AccountSubTitle title={page}/>
                {pageComponent}
            </div>
        </div>
    )
}

export default AccountLayout