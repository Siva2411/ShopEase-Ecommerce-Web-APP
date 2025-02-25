import React, { useState, useEffect } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import "./PriceFilter.css";
const PriceFilter = () => {
  const [priceRange, setPriceRange] = useState({
    min: 10,
    max: 100,
  });
  const [sliderValues, setSliderValues] = useState([10, 100]);
  useEffect(() => {
    setSliderValues([priceRange.min, priceRange.max]);
  }, [priceRange]);
  return (
    <div className="flex flex-col w-full mt-2 border-b-[2px] border-gray-100 p-2">
      <h2 className="text-[18px] text-gray-600 w-full">
        Price
      </h2>
      <div className="flex flex-col p-4">
        <RangeSlider
          min={10}
          max={500}
          values={sliderValues}
          onInput={(values) =>
            setPriceRange({
              min: values[0],
              max: values[1],
            })
          }
          className={"custom-range-slider"}
        />
        <div className="flex justify-between flex-nowrap mt-2">
          <div className="border rounded-lg h-8 mt-4 max-w-[50%] w-[40%] flex items-center">
            <p className="pl-4 text-gray-600">$</p>{" "}
            <input
              type="number"
              value={priceRange?.min}
              className="outline-none px-4 text-gray-600"
              min={0}
              max="499"
              disabled
              placeholder="min"
            />
          </div>
          <div className="border rounded-lg h-8 mt-4 max-w-[50%] w-[40%] flex items-center">
            <p className="pl-4 text-gray-600">$</p>{" "}
            <input
              type="number"
              value={priceRange?.max}
              className="outline-none px-4 text-gray-600"
              min={0}
              max="500"
              disabled
              placeholder="max"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
