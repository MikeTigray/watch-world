import "./Navigation.css";
// import { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";

export default function Navigation() {
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
          <a href="google.com">
            <AiOutlineHeart />
            <span>wishlist</span>
          </a>
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
