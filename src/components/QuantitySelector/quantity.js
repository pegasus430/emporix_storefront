import React, { useState }  from 'react'
import './quantity.css'

const  Quantity  = () => {
   
    const [val, setVal] = useState(1)

    const increment = () => {
      let newVal = val + 1
      setVal(newVal);
    }
    
    const decrement = () => {
      let newVal
      if (val > 2){
         newVal = val - 1
      }
      else{
         newVal = 1
      }
       
      setVal(newVal);
    }

    return (
      
        <div className="quantity-input">
          <button className="quantity-input__modifier quantity-input__modifier--left" onClick={decrement}>
          &mdash;
          </button>
          <input className="quantity-input__screen" type="text" value={val} readOnly />
          <button className="quantity-input__modifier quantity-input__modifier--right" onClick={increment}>
          &#xff0b;
          </button>  
      </div>  
    
    );
    
  }

  export default Quantity;
  
 