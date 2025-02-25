import React, { useState } from "react";
// "sizes":["S","M","L","XL","XXL"]
const SizeFilter = ({ sizes }) => {
  const [appliedSizes, setAppliedSizes] = useState([]);
  const btnClickHandle = (item) => {
    if (
      appliedSizes?.length > 0 &&
      appliedSizes?.find((size) => size === item)
    ) {
      setAppliedSizes((sizes) => {
        return appliedSizes.filter((size) => size !== item);
      });
    } else {
      setAppliedSizes([...appliedSizes, item]);
    }
  };
  return (
    <div className="flex flex-col p-2">
      <h2 className="text-[16px] text-gray-600">Sizes</h2>
      <div className="flex flex-wrap gap-4">
        {sizes?.map((size, index) => {
          return (
            <button
              className="border rounded border-gray-300 w-[50px] px-2 text-center cursor-pointer hover:scale-105"
              key="index"
              onClick={()=>btnClickHandle(size)}
              style={{
                background:`${appliedSizes?.includes(size)?'#000':'#fff'}`,
                color:`${appliedSizes?.includes(size)?'#fff':'#000'}`
              }}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SizeFilter;
