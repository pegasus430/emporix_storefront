import React from 'react'
import AccountLayout from './AccountLayout'
import {GridLayout} from '../../components/Utilities/common'
import CartTable from '../cart/CartTable'
import CartMobileContent from '../cart/CartMobileContent'

const MyOrdersView = () => {
    const product = [
        {
            'id': 1,
            'product': {
               'name': 'Philips GC027/00 fabric shaver',
               'code': '19881197',
               'id': '19881197',
               'src': 'https://res.cloudinary.com/saas-ag/image/upload/icecatimgstage/products/19881197_0540845491.jpeg',
               'price': {
                    'effectiveValue': 2.4,
                    'originalValue': 2.4,
                    'includesTax': false,
                    'totalValue': 2.4
               }
            },
            'quantity': 1
        }
    ]
    return (
        <GridLayout className="mt-12 gap-12">
            <div className="pb-6 border-b border-[#D2D2D2]">
                <div className="lg:block hidden">
                    <CartTable cartList={product}/>
                </div>

                <div className="lg:hidden">
                    <CartMobileContent cartList={product}/>
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