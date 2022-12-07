import React from "react";
import { BsTrash } from "react-icons/bs";
import { BiDownArrow } from "react-icons/bi";
import { BiUpArrow } from "react-icons/bi";

import image from "../../assets/images/harry-potter.jpeg";
import "./Cart.css";
export default function Cart() {
  const deleteItemFromCart = () => {};

  return (
    <div>
      <h2 className="shoppingtitle">Shopping Cart</h2>
      <div className="shoppinglist-container">
        <div className="box">
          {/*item  */}
          <div className="shoppinglist">
            <div className="inner-list-item">
              <div className="item-image-container">
                <img src={image} />
              </div>
              <h2>harry potter watch</h2>
            </div>
            <div className="inner-list-item">
              <h3>$650</h3>
              <BsTrash onClick={deleteItemFromCart} />
            </div>
          </div>
          {/*  */}
        </div>

        {/* Payment */}
        <div className="box">
          <div className="payment-container">
            <h3>Card Details</h3>
            <form className="payment-submission">
              <div className="payment-detail">
                <label>Name on Card</label>
                <input />
              </div>
              <div className="payment-detail">
                <label>Card Number</label>
                <input />
              </div>
              <div className="payment-detail">
                <label>Expiration Date</label>
                <input />
              </div>

              <div className="cost-detail">
                <p>Subtotal</p>
                <p>$650</p>
              </div>
              <div className="cost-detail">
                <p>Shipping</p>
                <p>$20</p>
              </div>
              <div className="cost-detail">
                <p>Total</p>
                <p>$670</p>
              </div>
              <button className="checkout-btn">
                <p>$670</p>
                <p>Checkout</p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
