import React from "react"
import Topbar from "../../components/Header/topbar"
import Footer from "../../components/Footer"
import AccountPage from "./AccountPage"

const MobileAccountBar = () => {
    return (
        <div className="mobile-bar-wrapper mobile_only">
            <div className="mobile-bar" >
                <span>Welcome Back, Jack</span>
            </div>
        </div>
    )
}
const Account = () => {
    const title = "Welcome Back, Jack"
    return (
        <div className="min-w-[375px]">
            <Topbar title={title} />
            <MobileAccountBar />
            <AccountPage page_info={title}/>
            <Footer />
        </div>
        
    )
}

export default Account;