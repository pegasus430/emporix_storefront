import React from "react"
import AccountPage from "./AccountPage"
import { useSelector } from "react-redux"
import { Navigate } from 'react-router-dom'
import Layout from "../Layout";
import { tenant_key } from "../../constants/localstorage";

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
    const tenant = localStorage.getItem(tenant_key)
    if (!currentUser) {
        return <Navigate  to={`/${tenant}/login`} />;
    }

    const title = "Welcome Back, " + currentUser.username
    
    return (
        <Layout title={title}>
            <MobileAccountBar title = {title} />
            <AccountPage page_info={title}/>
        </Layout>
    )
}

export default Account;