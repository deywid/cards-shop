import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const CartContext = createContext([]);

export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  function handleAddCart(card) {

    const newCard = {
      ...card,
      idCard: uuidv4()
    }

    setCart([...cart, newCard])
    localStorage.setItem('cart', JSON.stringify([...cart, card]))
  }


  function handleRemoveItemCart(idCard) {
    const filteredCart = cart.filter(item => {
      if (item.idCard === idCard) {
        return false
      } else {
        return true
      }
    })
    setCart(filteredCart)
    localStorage.setItem('cart', JSON.stringify(filteredCart))
  }

  useEffect(() => {
    function handleGetItensLocalStorage() {
      const storedArray = JSON.parse(localStorage.getItem('cart'));
      setCart(storedArray || []);
    }
    handleGetItensLocalStorage();
  }, [])

  return (
    <CartContext.Provider value={{
      cart: cart,
      addItem: handleAddCart,
      removeItem: handleRemoveItemCart
    }}>
      {children}
    </CartContext.Provider>
  )

}