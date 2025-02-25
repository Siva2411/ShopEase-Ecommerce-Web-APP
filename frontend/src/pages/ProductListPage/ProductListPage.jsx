import React from "react";
import FilterIcon from "../../component/common/FilterIcon";
import content from "../../data/content.json";
import { useMemo } from "react";
import Categories from "../../component/Filters/Categories";
import PriceFilter from "../../component/Filters/PriceFilter";
import ColorFilter from "../../component/Filters/ColorFilter";
import SizeFilter from "../../component/Filters/SizeFilter";
import ProductCard from "./ProductCard";
function ProductListPage({ productCategoryType }) {
  const productCategory = useMemo(
    () =>
      content?.categories?.find(
        (category) => category.code === productCategoryType
      ),
    [productCategoryType]
  );
  const products = useMemo(() => {
    return content?.products?.filter(
      (product) => product.category_id == productCategory.id
    );
  }, [productCategoryType]);
  return (
    <div className="flex min-h-screen w-full px-10 py-6 gap-4">
      {/* sidebar Filters */}
      <div className="flex flex-col w-1/5 min-w-[250px] shadow-lg rounded-lg relative z-10">
        <div className="flex justify-between items-center border-b-[2px] p-4 border-solid border-gray-100">
          <h2 className="text-[18px] pl-2 text-gray-600">Filter</h2>
          <FilterIcon />
        </div>
        <div className="flex flex-col w-full border-b-[2px] border-gray-100">
          <h2 className="text-[18px] pl-2 text-gray-600 w-full">Categories</h2>
          <div className="pl-4">
            <Categories types={productCategory?.types} />
          </div>
        </div>
        <PriceFilter />
        <div className="flex w-full">
          <ColorFilter colors={productCategory?.meta_data?.colors} />
        </div>
        <div className="flex w-full">
          <SizeFilter sizes={productCategory?.meta_data?.sizes} />
        </div>
      </div>
      {/* products listing*/}
      <div className="flex flex-col shadow-lg rounded-lg relative z-10 flex-1">
        <h2 className="text-2xl p-2 font-bold">
          {productCategory.description}
        </h2>
        <div className="pt-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 px-2">
          {products?.map((product, index) => {
            const updatedProduct = {
              ...product,
              thumbnail: "/images/category-men-hoodies.png",
            };
            return <ProductCard {...updatedProduct} key={product.id + index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductListPage;
