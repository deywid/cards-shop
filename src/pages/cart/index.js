import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { CartContext } from '../../contexts/cart'

function Cart() {

  const { cart, removeItem } = useContext(CartContext)

  return (
    <>
      <table className="table-cart">
        <thead>
          <tr>
            <th>Item</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Remover</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item =>
            <tr key={item.idCard}>
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
              <td>
                <MdDelete 
                  size={30}
                  color="#EC6D08"
                  onClick={() => removeItem(item.idCard)}
                />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default Cart;