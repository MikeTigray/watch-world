import "./Main.css";
import Carousel from "../../components/Carousel/Carousel";
export default function Main() {
  return (
    <>
      <div className="container">
        <h2>
          {" "}
          Watch-World watches are crafted with scrupulous attention to detail.
        </h2>
        <p>
          Explore the W-W collection of prestigious, high-precision timepieces.
          We offer a wide assortment of Classic and Professional watch models to
          suit any wrist. Discover the broad selection of W-W watches to find a
          perfect combination of style and functionality.
        </p>
      </div>
      <Carousel />
    </>
  );
}
