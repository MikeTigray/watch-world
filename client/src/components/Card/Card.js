import "./Card.css";
import React from "react";

export default function Card({ image, title, price }) {
  return (
    <div className="image-container">
      <img alt="" src={image}></img>
      {/* <h4>Luther Chronograph </h4> */}
      <div className="info">
        <h4>{title}</h4>
        <p>price: ${price}</p>

        <button>Add to cart</button>
        <button>Add to wishlist</button>
      </div>
    </div>
  );
}
