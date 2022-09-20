import './button.css'

export const LargePrimaryButton = ({title, onClick, className}) => {
    return (
        <button className={"large-primary-btn " + (className?className:"")} onClick={onClick}>{title}</button>
    )   
}