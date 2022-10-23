// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing/Landing";
import Main from "./pages/Main/Main";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Landing />
      {/* <Main /> */}
      <Footer />
    </div>
  );
}

export default App;
