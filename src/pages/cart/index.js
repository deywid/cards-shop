import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { CartContext } from '../../contexts/cart'
import { Table, THead, TImage } from "./styles";

function Cart() {

  const { cart, removeItem } = useContext(CartContext)

  return (
    <>
      <Table>
        <thead>
          <tr>
            <THead>Item</THead>
            <THead>Nome</THead>
            <THead>Preço</THead>
            <THead>Remover</THead>
          </tr>
        </thead>
        <tbody>
          {cart.map(item =>
            <tr key={item.idCard}>
              <td>
                <TImage
                  src={item.card_images[0].image_url_small}
                  alt="card preview"
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
      </Table>
    </>
  )
}

export default Cart;