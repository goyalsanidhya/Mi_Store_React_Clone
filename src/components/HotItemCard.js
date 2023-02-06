import React from 'react'
import "../styles/HotItemCard.css"

const HotItemCard = ({name, price, image, index}) => {
  return (
    <div className="hotItemCard">
      <img src={image} alt={`${index} Product`} />
      <p>{name}</p>
      <span>{price}</span>
    </div>
  )
}

export default HotItemCard