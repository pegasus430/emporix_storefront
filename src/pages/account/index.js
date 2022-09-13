import React from "react"
import Topbar from "../../components/Header/topbar"
import Footer from "../../components/Footer"
import AccountPage from "./AccountPage"
import { useSelector } from "react-redux"
import { Navigate } from 'react-router-dom'

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

    const { user: currentUser } = useSelector((state) => state.auth);
    if (!currentUser) {
        return <Navigate  to="/login" />;
    }

    const title = "Welcome Back, " + currentUser.username
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