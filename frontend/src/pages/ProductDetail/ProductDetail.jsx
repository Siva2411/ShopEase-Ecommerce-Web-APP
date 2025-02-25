import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetail = () => {
  const { product } = useLoaderData();
  const [image, setImage] = useState("/images/category-men-hoodies.png");
  const [breadCrumbLinks, setBreadCrumbLink] = useState([]);

  const handleThumbnailClick = (thumbnailUrl) => {
    setImage(thumbnailUrl);  // Update the main image when a thumbnail is clicked
  };
  console.log(product)
  return (
    <>
      <div className="flex flex-col md:flex-row px-10">
        <div className="w-[100%] lg:w-[50%] md:w-[40%]">
          {/* Image */}
          <div className="flex flex-col md:flex-row">
            <div className="w-[100%] md:w-[20%] justify-center h-[40px] md:h-[420px]">
              {/* Stack images */}
              <div className="flex flex-row md:flex-col justify-center h-full">
                {product?.images?.map((item, index) => (
                  <button
                    key={index}
                    className="rounded-lg w-fit p-2 mb-2"
                    onClick={() => handleThumbnailClick(item)} // Set the image on click
                  >
                    <img
                      src={image}  // Use the thumbnail URL
                      className="h-[60px] w-[60px] rounded-lg bg-cover bg-center hover:scale-105 hover:border"
                      alt={"sample-" + index}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full md:w-[80%] flex justify-center md:pt-0 pt-10">
              <img
                src={image} // Display the selected image
                className="h-full w-full max-h-[520px] border rounded-lg cursor-pointer object-cover"
                alt={product?.name}
              />
            </div>
          </div>
        </div>
        <div className="w-[60%] px-10">
          hello
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
