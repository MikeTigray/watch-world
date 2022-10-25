import "./Sidebar.css";
import { motion } from "framer-motion";

export default function Sidebar({ show }) {
  return (
    <>
      {show === true ? (
        <motion.div
          animate={{ x: 100 }}
          transition={{ type: "spring" }}
          className="sidebar"
        >
          hi
        </motion.div>
      ) : (
        console.log("not true")
      )}
    </>
  );
}
