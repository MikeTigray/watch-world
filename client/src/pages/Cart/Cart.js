import React from "react";
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

        <div className="">
          <div className="shoppinglist"></div>
          <div className="shoppinglist"></div>
          <div className="shoppinglist"></div>
          <div className="shoppinglist"></div>
          <div className="shoppinglist"></div>
          <div className="shoppinglist"></div>
          <div className="shoppinglist"></div>
        </div>

        {/* Payment */}
        <div className="payment-container">pay now</div>
      </div>
    </div>
  );
}
