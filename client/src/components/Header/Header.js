import "./Header.css";
// import { motion } from "framer-motion";
import { AiOutlineArrowDown } from "react-icons/ai";
import image from "../../assets/images/man-watching.mp4";
import Navigation from "../Navigation/Navigation";
export default function Header() {
  return (
    <>
      <div className="video-container">
        <Navigation />
        <button className="down">
          <AiOutlineArrowDown />
        </button>
        <video className="video-bg" autoPlay muted loop>
          <source src={image} type="video/mp4" />
        </video>
      </div>
    </>
  );
}
