import React from "react";
import { BsTrash } from "react-icons/bs";
import image from "../../assets/images/harry-potter.jpeg";
import "./Cart.css";
export default function Cart() {
  return (
    <div>
      {/* Title */}
      <h2 className="shoppingtitle">Shopping Cart</h2>
      {/* Container for watches and payment */}
      <div className="shoppinglist-container">
        {/* Watches */}

        <div className="box">
          <div className="shoppinglist">
            <div className="inner-list-item">
              <div className="item-image-container">
                <img src={image} />
              </div>
              <h2>harry potter watch</h2>
            </div>
            <div className="inner-list-item">
              <div className="arrows"></div>
              <BsTrash />
            </div>
          </div>
        </div>

        {/* Payment */}
        <div className="box">
          <div className="payment-container">pay now</div>
        </div>
      </div>
    </div>
  );
}
