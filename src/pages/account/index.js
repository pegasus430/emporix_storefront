import React from "react"
import Topbar from "../../components/Header/topbar"
import Footer from "../../components/Footer"
import AccountPage from "./AccountPage"

const Account = () => {
    const title = "Welcome Back, Jack"
    return (
        <div className="min-w-[375px]">
            <Topbar title={title} />
            <AccountPage page_info={title}/>
            <Footer />
        </div>
        
    )
}

export default Account;