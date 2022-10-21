// import { a } from "react-router-dom";
import "./Header.css";
import watch from "../../assets/images/watch.mp4";

export default function Header() {
  return (
    <>
      <div className="video-container">
        {/* Navigation */}
        <nav>
          <label>watch-world</label>
          <ul>
            <li>
              <a href="google.com">Cart</a>
            </li>
            <li>
              <a href="google.com">Wishlist</a>
            </li>
          </ul>
        </nav>
        {/* Navigation */}
        <video className="video-bg" autoPlay muted loop>
          <source src={watch} type="video/mp4" />
        </video>
      </div>
    </>
  );
}
