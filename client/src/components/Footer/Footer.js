import "./Footer.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { TfiPinterest } from "react-icons/tfi";
import { TfiTwitter } from "react-icons/tfi";

export default function Footer() {
  return (
    <footer>
      <div className="section-wrapper">
        <div className="section-inner">
          <h3>Brands</h3>
          <ul>
            <li>
              <a
                href="https://www.fossil.com/en-us/ "
                target="_blank"
                rel="noreferrer"
              >
                Fossil
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.fossil.com/en-us/ "
                target="_blank"
                rel="noreferrer"
              >
                Rolex
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.casio.com/us/"
                target="_blank"
                rel="noreferrer"
              >
                Casio
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.citizenwatch.com/us/en/  "
                target="_blank"
                rel="noreferrer"
              >
                Citizen
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.armaniexchange.com/us/unisex/new-arrivals_section"
                target="_blank"
                rel="noreferrer"
              >
                Armani Exchange
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.michaelkors.com/"
                target="_blank"
                rel="noreferrer"
              >
                Michael Kors
              </a>
            </li>
            <li>
              {" "}
              <a
                href="https://www.gucci.com/us/en/"
                target="_blank"
                rel="noreferrer"
              >
                Gucci
              </a>
            </li>
          </ul>
        </div>
        <div className="section-inner">
          <h3>Channels</h3>
          <ul>
            <li>
              <i>
                <AiOutlineFacebook />
              </i>
              Facebook
            </li>
            <li>
              <AiOutlineInstagram />
              Instagram
            </li>
            <li>
              <TfiTwitter /> Twitter
            </li>
            <li>
              <AiOutlineYoutube /> YouTube
            </li>
            <li>
              <TfiPinterest /> Pinterest
            </li>
            <li>
              <AiOutlineLinkedin /> LinkedIn
            </li>
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
