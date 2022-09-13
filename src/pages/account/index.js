import React from "react"
import Topbar from "../../components/Header/topbar"
import Footer from "../../components/Footer"
import AccountPage from "./AccountPage"
import { useSelector } from "react-redux"
import { Navigate } from 'react-router-dom'

const Account = () => {

    const { user: currentUser } = useSelector((state) => state.auth);
    if (!currentUser) {
        return <Navigate  to="/login" />;
    }

    const title = "Welcome Back, " + currentUser.username
    return (
        <div className="min-w-[375px]">
            <Topbar title={title} />
            <AccountPage page_info={title}/>
            <Footer />
        </div>
        
    )
}

export default Account;