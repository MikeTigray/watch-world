import "./Navigation.css";
// import { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";

export default function Navigation({ onClick }) {
  return (
    <nav className="nav">
      <label>watch-world</label>

      <ul>
        <li>
          <a href="google.com">
            <AiOutlineShoppingCart />
            <span>cart</span>
          </a>
        </li>
        <li>
          <AiOutlineHeart />
          <button onClick={onClick}>wishlist</button>
        </li>
        <li>
          <a href="google.com">
            <AiOutlineLogin />
            <span>sign-in</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
