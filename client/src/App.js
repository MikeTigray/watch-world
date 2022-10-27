// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing/Landing";
// import Main from "./pages/Main/Main";
// import Footer from "./components/Footer/Footer";
// import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* <Landing /> */}
      {/* <Main /> */}
      {/* <Footer /> */}
      {/* <SignUp /> */}
      <SignIn />
    </Router>
  );
}

export default App;
