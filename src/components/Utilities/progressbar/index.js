import React, { useState, createContext, useContext} from "react"
import { Container } from "../common"

import './progressbar.css'

const ProgressBarContent = () => {
    return (
        <>
            <div className="w-full main-bar"></div>
            <div className="w-full "></div>
        </>
    )
}
export const ProgressBar = ({children, active, className}) => {
    const status = children.map((node) => node.props.status)
    
    return (
        <>
            <Container className="progress-container">
                {children}
            </Container>
            <ProgressBarContent />
        </>
    )
}

export const ProgressBarItem = ({status, title}) => {
    return (
        <div className="progress-bar-item w-full">
            <span>{title}</span>
            <div className="point"></div>
        </div>
    )
}