import React from 'react'
import ProductReviewCard from "./ProductReviewCard"
import "../styles/ProductReviews.css"

const ProductReviews = ({productReviews}) => {
  return (
    <div className="productReviews">
    {
        productReviews && productReviews.map((item, index) => (
          <ProductReviewCard index={index} key={item.image} price={item.price} name={item.name} image={item.image} review={item.review} />
        ))            
    }
    </div>
  )
}

export default ProductReviews