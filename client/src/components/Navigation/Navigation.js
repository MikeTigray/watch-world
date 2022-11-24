import "./Navigation.css";
// import { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Navigation({ onClick }) {
  return (
    <nav className="nav">
      <label>watch-world</label>

      <ul>
        <li>
          <Link onClick={onClick}>
            <AiOutlineShoppingCart />
            <span>cart</span>
          </Link>
        </li>
        <li>
          <Link>
            {" "}
            <AiOutlineHeart />
            <span>wishlist</span>
          </Link>
        </li>
        <li>
          <Link to="/sign-in">
            <AiOutlineLogin />
            <span>sign-in</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
