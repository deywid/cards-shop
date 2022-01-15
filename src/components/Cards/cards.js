import React, { useContext } from "react";
import { FaCartPlus, FaHeart } from 'react-icons/fa';

import { CartContext } from '../../contexts/cart';

function Card({ data }) {

  const { addItem } = useContext(CartContext)

  return (
    <div className='item-card'>
      <img
        className='item-card-photo'
        src={data.card_images[0].image_url_small}
        alt='foto da carta' />
      <span className="item-card-name">{data.name}</span>
      <span className="item-card-type">{data.type}</span>
      <div className="item-card-buttons">
        <FaCartPlus onClick={() => addItem(data)} />
      </div>
    </div>
  )
}

export default Card;