import {GridLayout} from '../common'
import { useState } from 'react';
import { TextRegular1 } from "../typography";
import './input.css'

export const TextInput = ({label, value, placeholder, action}) => {
    const [inputValue, setInputValue] = useState(value)
    return (
        <GridLayout className="">
            <TextRegular1 className="text-left">{label}</TextRegular1>
            <GridLayout className="mt-2">
                <input value={inputValue} onChange = {
                    (e) => {
                        setInputValue(e.target.value);
                        if(action !== undefined) action(e.target.value)
                    }}  placeholder={placeholder} className="text-input-normal"/>
            </GridLayout>
        </GridLayout>
    )
}
export const TextInputOnly = ({value, placeholder, action}) => {
    const [inputValue, setInputValue] = useState(value)
    return (
        <input value={inputValue} onChange = {
            (e) => {
                setInputValue(e.target.value);
                if(action !== undefined) action(e.target.value)
            }}  placeholder={placeholder} className="text-input-normal"/>
    )
}