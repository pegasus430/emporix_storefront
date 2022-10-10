import React, { useState }  from 'react'
import AccountLayout from './AccountLayout'
import {GridLayout, Container,Item} from '../../components/Utilities/common'
import CartTable from '../cart/CartTable'
import CartMobileContent from '../cart/CartMobileContent'
import {MediumPrimaryButton} from '../../components/Utilities/button'
import {Link} from 'react-router-dom'
import {DropdownWithLabel} from '../../components/Utilities/dropdown'
import {TextInput} from '../../components/Utilities/input'
import { Divider } from '@mui/material'
import {frequencyOptions} from './config'

const ReplenishmentEditOrders = () => {
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
            <GridLayout className="gap-10">
                <div className="gap-6 lg:flex grid grid-cols-1 items-end p-2 border-b border-[#D2D2D2]">
                    <Item className="lg:w-1/4 w-full">
                        <TextInput label="PO Number" placeholder="Placeholder" value=""/>
                    </Item> 
                    <Item className="lg:w-1/4 w-full">
                        <DropdownWithLabel label="Frequency" placeholder="Weekly" options={frequencyOptions}/>
                    </Item>    
                    
                    <Item className="xl:w-1/2 lg:w-1/3 w-full">
                        <DropdownWithLabel label="Delivery Day" placeholder="First working day" options={[{value:'First working day', label:'First working day'}]}/>
                    </Item>   
                    <Item className="lg:w-1/4 w-full">
                        <Link to="/my-account/replenishment-orders">
                            <MediumPrimaryButton title="Add"/>
                        </Link>
                    </Item>
                        
                </div>
                
                    
            </GridLayout>
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

const AccountReplenishmentEditOrders = () => {
    return (
        <AccountLayout  page="Order Number" detail = "#CMD-2022-0119-001"> <ReplenishmentEditOrders /></AccountLayout>
    )
}
export default AccountReplenishmentEditOrders