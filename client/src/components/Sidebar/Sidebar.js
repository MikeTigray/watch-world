import "./Sidebar.css";
import { motion } from "framer-motion";
import { useState } from "react";

// import { useState, useRef } from "react";

export default function Sidebar({}) {
  const [isShown, setIsShown] = useState(true);

  const toggle = () => {
    setIsShown(!isShown);
  };

  return (
    <>
      <motion.div
        data-isshown={isShown}
        animate={{ x: 0 }}
        transition={{ duration: 5 }}
        className="sidebar"
      >
        hi
        <button onClick={toggle}>close</button>
      </motion.div>
    </>
  );
}
