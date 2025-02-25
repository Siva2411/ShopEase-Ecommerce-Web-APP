import React from "react";
import Favorite from "../../component/common/Favorite";
import { Link } from "react-router-dom";
const ProductCard = ({ id,title, thumbnail, description, price, brand }) => {
  return (
    <div className="flex flex-col p-2 hover:scale-105 relative w-[280px]">
      <Link to={`/prouductDetail/${id}`}>
        <img
          src={thumbnail}
          className="rounded-lg h-[320px] w-full cursor-pointer object-cover object-center"
          alt={title}
        />
      </Link>

      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col gap-1">
          <p className="text-[16px] p-1">{title}</p>
          {description && (
            <p className="text-[12px] px-1 text-gray-600">{brand}</p>
          )}
        </div>
        <p className="text-[18px] text-gray-600 p-2">${price}</p>
      </div>
      <button className="absolute top-2 right-2 p-2 cursor-pointer">
        <Favorite />
      </button>
    </div>
  );
};

export default ProductCard;
