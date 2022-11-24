import "./SignUp.css";
import { motion } from "framer-motion";
import { useState } from "react";

import image from "../../assets/images/signup-image.jpg";
import { Link } from "react-router-dom";
export default function SignUp() {
  const [fullName, setFullName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const target = e.target;
    setFullName(target.value);
  };

  return (
    <div className="signup-grid">
      <motion.div className="signup">
        <h2 className="form-item">
          Sign-Up /{" "}
          <Link to="/sign-in" className="go-to">
            Go to Sign-In
          </Link>
        </h2>
        <form>
          <div className="form-item">
            <label htmlFor="fullName">Full Name: </label>
            <input
              placeholder="Full name"
              name="fullName"
              type="fullName"
              id="fullName"
              onChange={handleChange}
            ></input>
          </div>
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
          <motion.button className="submitBtn">Sign-Up</motion.button>
        </div>
      </motion.div>
      <div className="image">
        <img src={image}></img>
      </div>
    </div>
  );
}
