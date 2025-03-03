"use client";

// next
import Image from "next/image";

// react
import { useMemo, useRef, useState } from "react";
import clsx from "clsx";

// framer motion
import { LazyMotion, domAnimation, m } from "framer-motion";
import { photos } from "@/app/utils/constants";

const ProductCard = ({ photo, index }) => {
  const message = encodeURIComponent(
    "Hi, I'm interested in this product. Could you tell me more about it?"
  );
  const whatsappLink = `https://api.whatsapp.com/send?phone=+918073212505&text=${message}`;
  return (
    <section id="newArrivals" >
    <LazyMotion features={domAnimation} key={index}>
      <m.article
        className="relative flex w-[180px] m-3 flex-col items-center justify-center gap-[10px] sm:w-[280px] lg:m-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeOut", duration: 0.5, delay: 0 }}
        viewport={{ once: true }}
      >
        <div
          key={index}
          className="relative aspect-[7/10] h-[257px] overflow-hidden rounded-[16px] sm:h-[400px]"
        >
          <Image
            src={photo.src}
            alt="product image"
            fill
            className="object-cover transition-all duration-500"
          />
        </div>
        <h3 className="text-center font-quicksand text-[clamp(20px,8px_+_2vw,22px)] font-bold text-darkPurple transition-all duration-300 hover:text-purple">
          {photo.title}
        </h3>
        <a href={whatsappLink} className="btn">
          Contact Now
        </a>
      </m.article>
    </LazyMotion>
    </section>
  );
};

export default ProductCard;
