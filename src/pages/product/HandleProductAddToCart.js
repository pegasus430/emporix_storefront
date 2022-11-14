import { cartProductKey } from '../../constants/localstorage'

const HandleProductAddToCart = (product, action, quantitiy) => {
    let cartProductList = localStorage.getItem(cartProductKey)
    cartProductList = cartProductList === null? {}: JSON.parse(cartProductList)
    const CartID = `Cart${product.id}`
    product.quantity = quantitiy

    if(cartProductList[CartID] === undefined){
        cartProductList[CartID] = product
    }else{
        cartProductList[CartID].quantity += product.quantity
    }
    
    localStorage.setItem(cartProductKey, JSON.stringify(cartProductList))
    action(true)
}
export default HandleProductAddToCart