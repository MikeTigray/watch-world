import "./Header.css";
import watch from "../../assets/images/watch.mp4";

export default function Header() {
  return (
    <div className="video-container">
      <h1 className="intro">WATCH - WORLD</h1>
      <video className="video-bg" autoPlay muted loop>
        <source src={watch} type="video/mp4" />
      </video>
    </div>
  );
}
