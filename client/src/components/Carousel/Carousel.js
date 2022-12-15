import "./Carousel.css";

import Card from "../Card/Card";

import { QUERY_ALL_WATCHES } from "../../utils/queries";
import { useQuery } from "@apollo/client";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: {
    items: 1,
  },
  568: {
    items: 3,
  },
  700: {
    items: 2,
  },
  1024: {
    items: 4,
    itemsFit: "contain",
  },
};

export default function Carousel() {
  const { loading, error, data } = useQuery(QUERY_ALL_WATCHES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const items = data.watches.map(({ name, price, image }, index) => (
    <Card title={name} key={index} alt={name} image={image} price={price} />
  ));

  console.log(items);
  return (
    <>
      {data ? (
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      ) : (
        error
      )}
    </>
  );
}
