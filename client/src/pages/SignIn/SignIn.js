import "./SignIn.css";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function SignIn() {
  return (
    <div className="signin-grid ">
      <div className="image"></div>
      <motion.div className="signin">
        <h2 className="form-item">
          Sign-In /{" "}
          <Link to="/sign-up" className="go-to">
            Go to Sign-Up
          </Link>
        </h2>
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
