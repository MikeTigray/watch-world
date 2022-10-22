import "./Navigation.css";
import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineLogin } from "react-icons/ai";

export default function Navigation() {
  const [cart, setCart] = useState("Cart");

  return (
    <nav>
      <label>watch-world</label>
      <ul>
        <li>
          {/* {window.innerWidth <= 870 ? setCart("less than") : setCart("cart")} */}

          <a
            onChange={() =>
              window.innerWidth <= 870
                ? console.log(window.innerWidth)
                : setCart("boo")
            }
            href="google.com"
          >
            {cart}
          </a>
        </li>
        <li>
          <a href="google.com">
            Wishlist <AiOutlineHeart />
          </a>
        </li>
        <li>
          <a href="google.com">
            Sign-In <AiOutlineLogin />
          </a>
        </li>
      </ul>
    </nav>
  );
}
