import React, { useState, useContext}  from 'react'
import CartContext from '../../../pages/context'
import './drawer.css'

const Drawer = ({children}) => {
    const {isOpen, setIsOpen} = useContext(CartContext)
    return (
        <main className={"fixed overflow-hidden z-50 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (isOpen==true? "transition-opacity opacity-100 duration-500 translate-x-0  "
                    : " transition-all delay-500 opacity-0 translate-x-full  ")}>
            <section className={"drawer-content max-w-[492px] right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
                (isOpen ? " translate-x-0 " : " translate-x-full ")}>
                <article className="relative drawer-content max-w-[492px] p-8 flex flex-col space-y-6 overflow-y-auto h-full">
                    {children}
                </article>
            </section>
            <section className=" w-screen h-full cursor-pointer " onClick={() => { setIsOpen(false);}}></section>
        </main>
    )
}

export default Drawer