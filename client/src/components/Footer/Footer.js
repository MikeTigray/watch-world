import "./Footer.css";
import { AiOutlineArrowUp } from "react-icons/ai";
export default function Footer() {
  return (
    <footer>
      <div className="section-wrapper">
        <div className="section-inner">
          <h3>Brands</h3>
          <ul>
            <li>Fossil</li>
            <li>Rolex</li>
            <li>Casio</li>
            <li>Citizen</li>
            <li>Armani Exchange</li>
            <li>Michael Kors</li>
            <li>Gucci</li>
          </ul>
        </div>
        <div className="section-inner">
          <h3>Channels</h3>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>YouTube</li>
            <li>Pinterest</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
      <div className="personal">
        <p>
          <em>Message</em> : World-Watch is not a real website. It was developed
          for educational purposes and I do not profit from any of the items or
          watches on the website.
        </p>
      </div>
      <button className="up">
        <AiOutlineArrowUp />
      </button>
    </footer>
  );
}
