import './button.css'

export const LargePrimaryButton = ({title, onClick, className, disabled}) => {
    return (
        <>
            {disabled === "true"?
                <button disabled className={"large-primary-btn " + (className?className:"")} onClick={onClick}>{title}</button>:
                <button className={"large-primary-btn " + (className?className:"")} onClick={onClick}>{title}</button>
            }
        </>
        
    )   
}

export const MediumPrimaryButton = ({title, onClick, className}) => {
    return (
        <button className={"medium-primary-btn " + (className?className:"")} onClick={onClick}>{title}</button>
    )   
}

export const PrimaryBlueButton = ({title, onClick, className}) => {
    return (
        <button className={"primary-blue-btn " + (className?className:"")} onClick={onClick}>{title}</button>
    )   
}

export const SecondaryOutlineButton = ({title, onClick, className}) => {
    return (
        <button className={"secondary-outline-btn " + (className?className:"")} onClick={onClick}>{title}</button>
    )   
}

export const MediumSecondaryButton = ({title, onClick, className}) => {
    return (
        <button className={"medium-secondary-btn " + (className?className:"")} onClick={onClick}>{title}</button>
    )   
}