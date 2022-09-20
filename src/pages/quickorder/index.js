import React , { useState, createContext, useContext} from "react";
import Layout from "../Layout";
import QuickOrderPage from "./QuickOrderPage";

const QuickOrder = () => {
    const category = 'Quick Order'

    return (
        <Layout title={category}>
            <QuickOrderPage />
        </Layout>
    )
}


export default QuickOrder;