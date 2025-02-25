import React from "react";
import jeans from "../../../assets/img/jeans.jpg";
import shirts from "../../../assets/img/shirts.jpg";
import tshirts from "../../../assets/img/tshirts.jpeg";
import dresses from "../../../assets/img/dresses.jpg";
import joggers from "../../../assets/img/joggers.jpg";
import kurtis from "../../../assets/img/kurtis.jpg";
import SectionHeading from "../SectionHeading/SectionHeading";
import Card from "../../Card/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // 👈 This is required!
import './NewArrival.css'
const items = [
  { title: "Jeans", image: jeans },
  { title: "Shirts", image: shirts },
  { title: "T-Shirts", image: tshirts },
  { title: "Dresses", image: dresses },
  { title: "Joggers", image: joggers },
  { title: "Kurtis", image: kurtis },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4.5 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const NewArrival = () => {
  return (
    <section className="flex flex-col">
      <SectionHeading title="New Arrivals" />
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={false}
        partialVisible={true}
      >
        {items.map((item, index) => (
          <Card key={index} title={item.title} imagePath={item.image} />
        ))}
      </Carousel>
    </section>
  );
};

export default NewArrival;
