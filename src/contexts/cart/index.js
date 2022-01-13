import { createContext } from "react";
import { useState } from 'react'

export const CartContext = createContext([]);


export function CartProvider({children}) {

  const [cart, setCart] = useState([]);

  function handleAddCart(item){
    setCart([... cart, item])
  }

  return (
    <CartContext.Provider value={{
      cart: cart,
      addItem: handleAddCart
    }}>
      {children}
    </CartContext.Provider>
  )

}