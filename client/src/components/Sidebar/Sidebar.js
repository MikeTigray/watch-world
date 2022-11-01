import "./Sidebar.css";
import { motion } from "framer-motion";
import { useState } from "react";

// import { useState, useRef } from "react";

export default function Sidebar({ onClick, show }) {
  return (
    <>
      <motion.div
        data-isshown={show}
        animate={{ x: 0 }}
        transition={{ duration: 5 }}
        className="sidebar"
      >
        hi
        <button onClick={onClick}>close</button>
      </motion.div>
    </>
  );
}
