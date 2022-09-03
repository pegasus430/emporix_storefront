import React, { useState , useRef } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const SideFilterContent = (props) => {
    console.log("sdfasdf")
    console.log(props)
    const sidebarClass = props.isOpen ? "sidebarFilter open h-screen" : 'sidebarFilter h-screen'
    return (
        <div className={sidebarClass}>
                
                <button onClick={props.toggleSidebar} >close</button>
        </div>
    )
}

export default SideFilterContent