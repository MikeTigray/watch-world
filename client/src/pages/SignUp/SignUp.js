import "./SignUp.css";
import { motion } from "framer-motion";
import { useState } from "react";

export default function SignUp() {
  const [fullName, setFullName] = useState("");

  const handleChange = (e) => {
    const target = e.target;
    setFullName(target.value);
  };

  return (
    <motion.div className="signup">
      <div>
        {" "}
        <h2>Sign-Up</h2>
        <form>
          <label htmlFor="fullName">Full Name: </label>
          <input
            placeholder="Full name"
            name="fullName"
            type="fullName"
            id="fullName"
            onChange={handleChange}
          ></input>
          <label htmlFor="email">Email: </label>
          <input
            placeholder="Email"
            name="email"
            type="email"
            id="email"
          ></input>
          <label htmlFor="password">Password: </label>
          <input
            placeholder="******"
            name="password"
            type="password"
            id="password"
          ></input>
        </form>
      </div>
      <h1> {fullName}</h1>
    </motion.div>
  );
}
