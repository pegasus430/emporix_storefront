import React from "react";
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