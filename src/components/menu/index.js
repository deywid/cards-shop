import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cart";

function Menu() {

  const {cart} = useContext(CartContext)
  return (
    <nav className="menu">
      <h1 className="menu-title">Epic Cards Shop</h1>
      <span>{cart.length} itens no carrinho</span>
      <ul className="menu-list">
        <li><Link to="/" className="menu-list-item">Home</Link></li>
        <li><Link to="/cart" className="menu-list-item">Cart</Link></li>
        <li><Link to="/about" className="menu-list-item">About</Link></li>
      </ul>
    </nav>

  )
}

export default Menu;