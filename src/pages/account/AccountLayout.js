import React, { useState }  from 'react'
import AccountMenu from './AccountMenu'
import AccountSubTitle from './AccountSubTitle'
import photo from '../../assets/photo.png'

const AccountPersonalInfo = () => {
    return (
        <div className="account-personal-info-wrapper">
            <div className="account-personal-info-caption border-bottom-gray">
                <div className="account-personal-info flex">
                    <div className="my-auto  flex w-full justify-between items-center">
                        <span className="inline-block align-middle account-personal-caption">Personal Details</span>
                        <span className="inline-block align-middle account-edit-btn">Edit Profile&nbsp;&nbsp;<span className="profile-edit-btn-arrow">&gt;</span></span>
                    </div>
                    
                </div>
                    
            </div>
            <div className="account-profile">
                <div className="mx-auto flex flex-col gap-8 items-center">
                    <img className="personal-photo" src={photo}/>
                    <div className="profile-info flex gap-4">
                       <div className="profile-items gap-2 flex flex-col justify-items-end">
                            <p>Name</p>
                            <p>Company</p>
                            <p>Phone</p>
                            <p>Email</p>
                        </div>
                        <div className="profile-items-info gap-2 flex flex-col justify-items-start">
                            <p className="font-bold">Jack White</p>
                            <p>Medit Gbmh</p>
                            <p>+49 30 901820</p>
                            <p>jack.white@medit.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const PaymentProgressBar = () => {
    return (
        <div className="w-full h-6 bg-[#E7E9EB] rounded-2xl dark:bg-[#E7E9EB]">
            <div className="h-6 bg-[#FBB13C] rounded-2xl dark:bg-[#FBB13C]" style={{width: '45%'}}></div>
        </div>
    )
}
const PaymentStatus = () => {
    return (
        <ul className="flex flex-col gap-4">
            <li className="payment-title">Total spent in April</li>
            <li className="spent-amount">€ 2,540.28</li>
            <li className="limit-bar-wrapper flex flex-col gap-2">
                <div className="limit-bar">
                    <PaymentProgressBar />
                </div>
                <div className="limit-status-text text-right">
                    Your monthly limit: € 10,000.00
                </div>
            </li>
        </ul>
    )
}

const PaymentInfoDetails = () => {
    return (
        <div className="flex">
            <div className="oustanding flex gap-4 flex-col">
                <div className="payment-title">Oustanding</div>
                <div className="price">€ 1912.21</div>
                
            </div>
            <div className="refunds flex gap-4 flex-col">
                <div className="payment-title">Refunds</div>
                <div className="price">€ 841.96</div>
                
            </div>
        </div>
    )
}
const AccountSummary = () => {
    return (
        <div className="account-summary-wrapper flex flex-col gap-6">
            <div className="account-summary-caption border-bottom-gray">
                <div className="account-summary-info flex">
                    <div className="my-auto  flex w-full justify-between items-center">
                        <span className="inline-block align-middle account-summary-title">Summary</span>
                    </div>
                    
                </div>
                    
            </div>
            <PaymentStatus />
            <PaymentInfoDetails />
        </div>
    )
}

const AccountPersonalDetailsAndSummary = () => {
    return (
        <div className="personal-and-summary-content-wrapper border-bottom-gray">
            <div className="personal-and-summary-content md:flex">
                <AccountPersonalInfo />
                <AccountSummary />
            </div>
        </div>
    )
}
const AccountLayout = ({pageComponent, page}) => {
    return (
        <div className="content-wrapper">
           <div className="account-menu-items-left-panel left-menu-panel">
               <AccountMenu page={page}/>
            </div>
            <div className="account-page-content content-panel pl-6">
                {page=="My Account"? 
                    <>
                        <AccountPersonalDetailsAndSummary />
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