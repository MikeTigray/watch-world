import "./Carousel.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import image from "../../assets/images/fossil.jpeg";
export default function Carousel() {
  const [width, setWidth] = useState(0);
  const element = useRef();

  useEffect(() => {
    setWidth(element.current.scrollWidth - element.current.offsetWidth);
  }, []);

  return (
    <>
      <motion.div ref={element} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          <motion.div className="image-container">
            <img alt="" src={image}></img>
            {/* <h4>Luther Chronograph </h4> */}
            <div className="info">
              <h4>Luther Chronograph</h4>
              <p>price: $299.00</p>

              <button>Add to cart</button>
              <button>Add to wishlist</button>
            </div>
          </motion.div>
          <motion.div className="image-container">
            <img alt="" src={image}></img>
            {/* <h4>Luther Chronograph </h4> */}
            <div className="info">
              <h4>Luther Chronograph</h4>
              <p>price: $299.00</p>

              <button>Add to cart</button>
              <button>Add to wishlist</button>
            </div>
          </motion.div>
          <motion.div className="image-container">
            <img alt="" src={image}></img>
            {/* <h4>Luther Chronograph </h4> */}
            <div className="info">
              <h4>Luther Chronograph</h4>
              <p>price: $299.00</p>

              <button>Add to cart</button>
              <button>Add to wishlist</button>
            </div>
          </motion.div>
          <motion.div className="image-container">
            <img alt="" src={image}></img>
            {/* <h4>Luther Chronograph </h4> */}
            <div className="info">
              <h4>Luther Chronograph</h4>
              <p>price: $299.00</p>

              <button>Add to cart</button>
              <button>Add to wishlist</button>
            </div>
          </motion.div>
          <motion.div className="image-container">
            <img alt="" src={image}></img>
            {/* <h4>Luther Chronograph </h4> */}
            <div className="info">
              <h4>Luther Chronograph</h4>
              <p>price: $299.00</p>

              <button>Add to cart</button>
              <button>Add to wishlist</button>
            </div>
          </motion.div>
          <motion.div className="image-container">
            <img alt="" src={image}></img>
            {/* <h4>Luther Chronograph </h4> */}
            <div className="info">
              <h4>Luther Chronograph</h4>
              <p>price: $299.00</p>

              <button>Add to cart</button>
              <button>Add to wishlist</button>
            </div>
          </motion.div>
          <motion.div className="image-container">
            <img alt="" src={image}></img>
            {/* <h4>Luther Chronograph </h4> */}
            <div className="info">
              <h4>Luther Chronograph</h4>
              <p>price: $299.00</p>

              <button>Add to cart</button>
              <button>Add to wishlist</button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
