import "./SignIn.css";
import React from "react";
import { motion } from "framer-motion";
import image from "../../assets/images/signin-1.jpg";
export default function SignIn() {
  return (
    <div className="signin-grid ">
      <div className="image">
        <img src={image}></img>
      </div>
      <motion.div className="signin">
        <h2 className="form-item">Sign-In</h2>
        <form>
          <div className="form-item">
            <label htmlFor="email">Email: </label>
            <input
              placeholder="Email"
              name="email"
              type="email"
              id="email"
              pattern="\w+@\w+\.\w+"
            ></input>
          </div>
          <div className="form-item">
            <label htmlFor="password">Password: </label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="password"
              minLength={6}
            ></input>
          </div>
        </form>
        <div className="form-item">
          <motion.button className="submitBtn">Sign-In</motion.button>
        </div>
      </motion.div>
    </div>
  );
}
