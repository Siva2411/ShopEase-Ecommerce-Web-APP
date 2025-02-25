import React, { useState } from "react";
export const colorSelector = {
  Purple: "#8434E1",
  Black: "#252525",
  White: "#FFFFFF",
  Gray: "#808080",
  Blue: "#0000FF",
  Red: "#FF0000",
  Orange: "#FFA500",
  Navy: "#000080",
  Grey: "#808080",
  Yellow: "#FFFF00",
  Pink: "#FFC0CB",
  Green: "#008000",
};
const ColorFilter = ({ colors }) => {
  const [appliedColors, setAppliedColors] = useState(
    []
  )
  const toggleColorClick = (item)=>{
    console.log(appliedColors)
    if(appliedColors.length>0 && appliedColors.find((color)=>color===item))
    {
      console.log("unselect")
      setAppliedColors(appliedColors.filter((color)=>color!=item))
    }
    else{
      console.log("select")
      setAppliedColors((appliedColors)=>[...appliedColors,item])
    }
    console.log(appliedColors)
  }
  return (
    <div className="flex flex-col mb-4 p-2 border-b-[2px] border-gray-200 ">
      <p className="text-[16px] text-gray-600 mt-5 mb-5">Colors</p>
      <div className="flex flex-wrap px-2">
        {colors?.map((item,index) => {
          return (
            <div className="flex flex-col mr-2" key={index}>
              <div
                className="w-8 h-8 border rounded-xl mr-4 cursor-pointer hover:scale-110"
                style={{ backgroundColor: colorSelector[item] }}
                onClick={()=>toggleColorClick(item)}
              ></div>
              <p className="text-sm text-gray-400 mb-2" style={{color:appliedColors.includes(item)?"#000":""}}>{item}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ColorFilter;