import React, { useEffect, useState }  from 'react'
import {useParams} from 'react-router-dom'
import './brand.css'
import Layout from "../Layout";
import { Container, GridLayout, Item, LayoutBetween } from '../../components/Utilities/common';
import { PrimaryBlueButton, SecondaryOutlineButton } from '../../components/Utilities/button';
import slider from '../../assets/slider.svg'
import edit from '../../assets/edit.svg'
import del from '../../assets/delete.svg'
import { Box } from '@mui/system';
import { LoadingCircleProgress1 } from '../../components/Utilities/progress';
import BrandService from '../../services/product/brand.service'
import {TextRegular7} from '../../components/Utilities/typography'

const HeaderWrapper = ({children}) => {
    return (
        <Container className="h-[56px] text-[14px] leading-[17px] pt-[23px] font-bold">{children}</Container>
    )
}

const FilterWrapper = ({children}) => {
    return (
        <Container className="items-center w-full border-t border-[#C0D0DF] h-[48px] text-[14px] leading-[16px] font-bold">{children}</Container>
    )
}

const ItemsWrapper = ({children}) => {
    return (
        <Container className="items-center w-full border-t border-[#C0D0DF] h-[48px] text-[14px] leading-[16px] font-bold">{children}</Container>
    )
}

const BrandPage = () => {
    
    const [loading, setLoading] = useState(false)
    const [brand, setBrand] = useState([])

    useEffect(()=> {
        const getBrands = async () => {
            const brands = await BrandService.getBrands()
            setBrand(brands)
            setLoading(false)
        }  
        getBrands()
    }, [])
    return (
        <div className="brand-page-wrapper text-center w-full">
            {loading? <LoadingCircleProgress1 />:
                <GridLayout className="justify-end gap-6 mt-7 max-w-screen-lg m-auto text-right">
                    <div><PrimaryBlueButton title="ADD BRAND"/></div>
                    <LayoutBetween className="items-center">
                        <SecondaryOutlineButton title="DELETE"/>
                        
                        <img src={slider} className="w-[20px]"/>
                    </LayoutBetween>
                    <GridLayout className="mt-[10px] border-[#C0D0DF] border">
                        <HeaderWrapper>
                            <Item className="w-[68px]"></Item>
                            <Item className="w-[56px] ">Image</Item>
                            <Item className="px-6 w-[calc(100%-204px)] text-left">Name</Item>
                            <Item className="w-80px"></Item>
                        </HeaderWrapper>
                        <FilterWrapper>
                            <Item className="w-[68px] text-center px-[24px] py-[14px]">
                                <input type="checkbox"  className="w-5 h-5"/>
                            </Item>
                            <Item className="w-[56px]"></Item>
                            <Item className="px-6 py-2 w-[calc(100%-204px)]">
                                <input type="text" placeholder="Filter By Name" className="px-4 py-2 w-full h-full border border-[#99ACBC]"/>
                            </Item>
                            <Item className="w-80px">
                                <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.69727 12.9302V16L11.0461 14.4186V8.93022L17.7438 1.11624" stroke="#99ACBC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M7.23258 8.55812L13.5582 1.11624H1L7.23258 8.55812Z" stroke="#99ACBC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>

                            </Item>
                        </FilterWrapper>
                        {brand.map((b,key) => (
                            
                            <ItemsWrapper key={key}>
                                <Item className="w-[68px] text-center px-[24px] py-[14px]">
                                    <input type="checkbox"  className="w-5 h-5"/>
                                </Item>
                                <Item className="w-[56px]">
                                    <img src={b.image} className="w-10 h-8"/>
                                </Item>
                                <Item className="px-6 py-2 w-[calc(100%-204px)] text-left">
                                    <TextRegular7>{b.name}</TextRegular7>
                                </Item>
                                <Item className="w-20 flex gap-[14px]">
                                    <img src={edit} />
                                    <img src={del} />
                                </Item>
                            </ItemsWrapper>
                        ))}
                    </GridLayout>

                </GridLayout>
            }
        </div>
    )
}
const Brand = () => {
    const title = `Brands`
    return (
        <Layout title={title}>
            <BrandPage />
        </Layout>
    )
}
export default Brand