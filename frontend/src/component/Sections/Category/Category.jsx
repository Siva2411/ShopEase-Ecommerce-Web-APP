import React from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import Carousel from "react-multi-carousel";
import Card from "../../Card/Card";
const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4.5 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};
function Category({ title, data }) {
  return (
    <div className="flex flex-col">
      <SectionHeading title={title} />
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={false}
        partialVisible={true}
      >
        {data?.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            imagePath={item.image}
            description={item.description}
            actionArrow={true}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Category;
