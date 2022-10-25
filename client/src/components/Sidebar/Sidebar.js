import "./Sidebar.css";
import { animate, motion } from "framer-motion";
import { useState, useRef } from "react";

export default function Sidebar({ show }) {
  return (
    <>
      {show === true ? (
        <motion.div
          animate={{ x: 0 }}
          transition={{ type: "spring" }}
          className="sidebar"
        >
          hi
          <button onClick={() => {}}>close</button>
        </motion.div>
      ) : (
        console.log("j")
      )}
    </>
  );
}
