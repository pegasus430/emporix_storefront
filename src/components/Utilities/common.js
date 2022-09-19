import React, { useState }  from 'react'
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

export const Container = ({children, className}) => {
    return (
        <div className={'flex ' + (className? className: "")}>
            {children}
        </div>
    )
}