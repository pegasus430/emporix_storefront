import React from 'react'
import { useSelector } from 'react-redux'
import { activeCurrencySelector } from 'redux/slices/pageReducer'
import './common.css'

export const LayoutBetween = ({children, className}) => {
    return (
        <div className={"layout-between flex justify-between " + (className? className: "")}>
            {children}
        </div>
    )
}

export const GridLayout = ({children, className}) => {
    return (
        <div className={'grid-layout grid grid-cols-1 ' + (className? className: "")}>
            {children}
        </div>
    )
}

export const Item = ({children, className}) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export const Center = ({children, className}) => {
    return (
        <div className={"text-center grid "+(className)}>
            {children}
        </div>
    )
}
export const Right = ({children, className}) => {
    return (
        <div className={"text-right grid "+(className)}>
            {children}
        </div>
    )
}

export const Container = ({children, className}) => {
    return (
        <div className={'flex ' + (className? className: "")}>
            {children}
        </div>
    )
}
export const MobileMDContainer = ({children}) => {
    return (
        <div className="md:hidden">{children}</div>
    )
}
export const DesktopMDContainer = ({children}) => {
    return (
        <div className="md:block hidden">{children}</div>
    )
}

export const MobileLGContainer = ({children}) => {
    return (
        <div className="lg:hidden">{children}</div>
    )
}
export const DesktopLGContainer = ({children}) => {
    return (
        <div className="lg:block hidden">{children}</div>
    )
}

export const MobileXLContainer = ({children}) => {
    return (
        <div className="xl:hidden">{children}</div>
    )
}
export const DesktopXLContainer = ({children}) => {
    return (
        <div className="xl:block hidden">{children}</div>
    )
}

export const CurrencyBeforeValue = ((value) => {
    const activeCurrency = useSelector(activeCurrencySelector)
    return (
        <>{activeCurrency.symbol} {value}</>
    )
})

export const CurrencyAfterValue = ((value) => {
    const activeCurrency = useSelector(activeCurrencySelector)
    return (
        <>{value} {activeCurrency.symbol}</>
    )
})

export const CurrencyBeforeComponent = ((children) => {
    const activeCurrency = useSelector(activeCurrencySelector)
    return (
        <> {activeCurrency.symbol}</>
    )
})