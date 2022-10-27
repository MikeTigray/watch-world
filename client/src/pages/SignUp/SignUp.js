import "./SignUp.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiSend } from "react-icons/fi";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const target = e.target;
    setFullName(target.value);
  };

  return (
    <motion.div className="signup">
      {" "}
      <h2>Sign-Up</h2>
      <form>
        <div className="">
          {" "}
          <label htmlFor="fullName">Full Name: </label>
          <input
            placeholder="Full name"
            name="fullName"
            type="fullName"
            id="fullName"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          {" "}
          <label htmlFor="email">Email: </label>
          <input
            placeholder="Email"
            name="email"
            type="email"
            id="email"
          ></input>
        </div>
        <div>
          {" "}
          <label htmlFor="password">Password: </label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="password"
          ></input>
        </div>
      </form>
      <div>
        <motion.button className="submitBtn">
          <FiSend />
        </motion.button>
      </div>
      <h1>{fullName}</h1>
    </motion.div>
  );
}
