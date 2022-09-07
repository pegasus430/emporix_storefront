import React from "react"
import Topbar from "../../components/Header/topbar"
import Footer from "../../components/Footer"
import AccountPage from "./AccountPage"

const MyAccount = () => {
    const category = "welcome"
    return (
        <div className="min-w-[375px]">
            <Topbar title={category} />
            <AccountPage />
            <Footer />
        </div>
        
    )
}

export default MyAccount;