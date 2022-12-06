import "./Carousel.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Card from "../Card/Card";
import image1 from "../../assets/images/fossil.jpeg";
import image2 from "../../assets/images/Gen6.jpeg";
import image3 from "../../assets/images/harry-potter.jpeg";

const watches = [image1, image2, image3];

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
          {watches.map((image) => (
            <Card image={image} price={299.0} title={"luther chronograph"} />
          ))}
        </motion.div>
      </motion.div>
    </>
  );
}
