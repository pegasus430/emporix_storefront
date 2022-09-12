import React, { useState }  from 'react'
import AccountMenu from './AccountMenu'
import AccountSubTitle from './AccountSubTitle'

const AccountLayout = ({pageComponent, page}) => {
    return (
        <div className="content-wrapper">
           <div className={page!="Index" ? "account-menu-items-left-panel left-menu-panel": "account-menu-items-left-panel main-left-menu-panel"}>
               <AccountMenu page={page}/>
            </div>
            <div className={page!="Index" ? "account-page-content content-panel md:pl-6":"account-page-content main-content-panel md:pl-6"}>
                {page=="My Account" || page=="Index"? 
                    <>
                        {pageComponent}
                    </>:
                    <>
                        <AccountSubTitle title={page}/>
                        {pageComponent}
                    </>
                    
                }
                
            </div>
        </div>
    )
}

export default AccountLayout