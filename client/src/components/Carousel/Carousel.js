import "./Carousel.css";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Card from "../Card/Card";
import image1 from "../../assets/images/fossil.jpeg";
import image2 from "../../assets/images/Gen6.jpeg";
import image3 from "../../assets/images/harry-potter.jpeg";
import { QUERY_ALL_WATCHES } from "../../utils/queries";
import { useQuery } from "@apollo/client";

// const watches = [image1, image2, image3];

export default function Carousel() {
  const { loading, error, data } = useQuery(QUERY_ALL_WATCHES);

  const [width, setWidth] = useState(0);
  const element = useRef();

  // useEffect(() => {
  //   setWidth(element.current.scrollWidth - element.current.offsetWidth);
  // }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      <motion.div ref={element} className="carousel">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          {data
            ? data.watches.map(({ name, price, brand, image }, index) => (
                <Card
                  key={index}
                  image={`../../assets/images/fossil.jpeg`}
                  price={price}
                  title={name}
                />
              ))
            : loading}
        </motion.div>
      </motion.div>
    </>
  );
}
