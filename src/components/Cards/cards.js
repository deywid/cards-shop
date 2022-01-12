import React from "react";

function Card({ name, image, type}) {

  return (

    <div className='item-card'>
      <img 
      className='item-card-photo'
      src={image} 
      alt='foto da carta' />
      <span className="item-card-name">{name}</span>
      <span className="item-card-type">{type}</span>
    </div>
  )
} 

export default Card;