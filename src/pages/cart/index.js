import React, { useContext } from "react";

import { CartContext } from '../../contexts/cart'

function Cart() {

  const { cart } = useContext(CartContext)

  return (
    <>
      <table className="table-cart">
        <thead>
          <th>Item</th>
          <th>Nome</th>
          <th>Preço</th>
        </thead>
        <tbody>
          {cart.map(item =>
            <tr key={item.id}>
              <td>
                <img
                  src={item.card_images[0].image_url_small}
                  className="table-image"
                  alt="card image"
                />
              </td>
              <td>{item.name}</td>
              <td>{
                new Intl.NumberFormat(
                  'pt-BR',
                  { style: 'currency', currency: 'BRL' }
                ).format(item.card_prices[0].cardmarket_price)
              }</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default Cart;