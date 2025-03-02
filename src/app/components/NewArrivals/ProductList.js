"use client";

import { useMediaQuery } from "react-responsive";
import ProductCard from "./ProductCard";
import { photos } from "@/app/utils/constants";

const ProductList = () => {
  const isLg = useMediaQuery({ query: "(min-width: 1024px)" });
  return (
    <div className="grid w-full grid-cols-2 items-start justify-center gap-x-[4px] gap-y-[16px] xs:gap-x-[16px] md:gap-[32px] lg:grid-cols-3">
      {photos.map((photo, index) => {
        return <ProductCard photo={photo} key={index}/>;
      })}
    </div>
  );
};

export default ProductList;
