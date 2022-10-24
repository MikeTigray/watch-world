import "./Main.css";
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
      <div className="movements">
        <h1>MOVEMENTS</h1>
        <div className="list-container">
          <div className="grid-item">mechanical</div>
          <div className="grid-item">automatic</div>
          <div className="grid-item">quartz</div>
          <div className="grid-item">solar</div>
        </div>
      </div>

      <div className="learn-container">
        <div className="red">Red</div>
      </div>
    </>
  );
}
