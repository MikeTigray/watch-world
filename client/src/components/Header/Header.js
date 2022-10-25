import "./Header.css";
import { useState } from "react";
// import { motion } from "framer-motion";
import { AiOutlineArrowDown } from "react-icons/ai";
import image from "../../assets/images/man-watching.mp4";
import Navigation from "../Navigation/Navigation";
import Sidebar from "../Sidebar/Sidebar";
export default function Header() {
  const [notShow, setShow] = useState();

  return (
    <>
      <div className="video-container">
        <Navigation
          onClick={() => {
            setShow(true);
          }}
        />
        <button className="down">
          <AiOutlineArrowDown />
        </button>
        <video className="video-bg" autoPlay muted loop>
          <source src={image} type="video/mp4" />
        </video>
        <Sidebar show={notShow} />
      </div>
    </>
  );
}
