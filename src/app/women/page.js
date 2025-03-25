import React from "react";
import { womenKurthaPhotos } from "../utils/constants";
import ProductCard from "../components/NewArrivals/ProductCard";
import HeaderPlain from "../components/Navbar/headerPlain";
import CopyRight from "../components/Footbar/copyright";

function Women() {
  return (
    <>
      <HeaderPlain />
      <section className="flex w-full items-center justify-center pb-[48px] pt-[24px] md:pt-[48px]">
      <div className="flex flex-col items-center justify-center gap-[24px] sm:max-w-[95%] md:w-[904px] md:gap-[48px]">
        <h3 className=" font-lora font-bold md:block text-4xl">
          Women
        </h3>
        <div className="grid w-full grid-cols-2 items-start justify-center gap-x-[4px] gap-y-[16px] xs:gap-x-[16px] md:gap-[32px] lg:grid-cols-3">
          {womenKurthaPhotos.map((photo, index) => {
            return <ProductCard photo={photo} key={index} />;
          })}
        </div>
      </div>
      </section>
      <CopyRight/>
    </>
  );
}

export default Women;
