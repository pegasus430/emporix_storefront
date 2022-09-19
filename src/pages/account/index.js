import React from "react"
import AccountPage from "./AccountPage"
import { useSelector } from "react-redux"
import { Navigate } from 'react-router-dom'
import PageTemplate from "../pageTemplate";

const MobileAccountBar = ({title}) => {
    return (
        <div className="mobile-bar-wrapper mobile_only">
            <div className="mobile-bar" >
                <span>{title}</span>
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
        <PageTemplate title={title}>
            <MobileAccountBar title = {title} />
            <AccountPage page_info={title}/>
        </PageTemplate>
    )
}

export default Account;