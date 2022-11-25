import "./Sidebar.css";
import { motion } from "framer-motion";
import { useState } from "react";

// import { useState, useRef } from "react";

export default function Sidebar({ onClick, show }) {
  return (
    <>
      <motion.div data-isshown={show} className="sidebar">
        hi
        <button onClick={onClick}>close</button>
      </motion.div>
    </>
  );
}
