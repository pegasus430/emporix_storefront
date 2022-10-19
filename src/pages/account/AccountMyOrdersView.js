import React from 'react'
import AccountLayout from './AccountLayout'
import {GridLayout} from '../../components/Utilities/common'
import CartTable from '../cart/CartTable'
import CartMobileContent from '../cart/CartMobileContent'

const MyOrdersView = () => {
    const product = [
        {
            "id": 1,
            "stock": "Low",
            "rating": 4,
            "count": 8,
            "product_count": 1,
            "src": "/img/products/chair1.png",
            "category": "ICA-CT 073BK",
            "name": "Jysk Office Chair SKODSBORG",
            "price": "93.50",
            "list_price": "109.99",
            "sku": "CF085A",
            "estimated_delivery": "23.05.2022",
            "sub_images": [
            "/img/products/hp_printer_sub1.png",
            "/img/products/hp_printer_sub2.png",
            "/img/products/hp_printer_sub3.png"
            ],
            "buy_count": 1
        }
    ]
    
    return (
        <GridLayout className="mt-12 gap-12">
            <div className="pb-6 border-b border-[#D2D2D2]">
                <div className="lg:block hidden">
                    <CartTable products={product}/>
                </div>

                <div className="lg:hidden">
                    <CartMobileContent products={product}/>
                </div>
            </div>
        </GridLayout>
    )
};

const AccountMyOrdersView = () => {
    return (
        <AccountLayout  page="View" detail="#CMD-2022-0119-001"> <MyOrdersView /></AccountLayout>
    )
}
export default AccountMyOrdersView