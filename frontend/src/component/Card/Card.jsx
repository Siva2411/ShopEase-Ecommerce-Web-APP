import React from "react";
import ArrowIcon from "../common/ArrowIcon";
function Card({ title, imagePath, description, actionArrow }) {
  return (
    <div className="flex flex-col p-8">
      <img
        src={imagePath}
        className="rounded-lg bg-cover bg-center w-[220px] h-[220px] max-w-[100%] max-h-[220px] hover:scale-105 cursor-pointer "
        width="200px"
        height="220px"
        alt={title}
      />
      <div className="flex flex-wrap justify-between w-[220px] max-w-[220px] items-center">
        <div className="flex flex-col gap-1">
          <p className="text-[16px] p-1 font-semibold">{title}</p>
          {description && (
            <p className="text-[14px] px-2 font-medium text-gray-400-50">
              {description}
            </p>
          )}
        </div>
        {actionArrow && (
          <span className="cursor-pointer pr-2 items-center">
            <ArrowIcon />
          </span>
        )}
      </div>
    </div>
  );
}

export default Card;
