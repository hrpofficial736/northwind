"use client";

import { LeftArrow } from "@/components/icons/LeftArrow";
import React, { useState } from "react";

const ImageGallery = () => {
  const [current, setCurrent] = useState<number>(0);

  const images = [
    "/assets/gallery1.jpg",
    "/assets/gallery2.jpg",
    "/assets/gallery3.jpg",
    "/assets/gallery4.jpg",
    "/assets/gallery5.jpg",
  ];

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const handleNext = () => {
    if (current < images.length - 1) setCurrent(current + 1);
  };

  return (
    <div className="w-full relative p-[64px_24px] lg:p-[80px_36px] bg-primary flex flex-col gap-[32px]">
      <div className="flex flex-col justify-center">
        <h1 className="font-boskaMedium text-secondary text-[64px] leading-[120%] lg:text-[96px]">
          take a look
          <br /> inside sanctuary
        </h1>
      </div>

      <div className="flex gap-[22px] w-full h-[240px] md:h-[300px] lg:h-[600px] overflow-x-hidden">
        <div
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
          className="flex transition-transform duration-600 ease-in-out w-full"
        >
          {images.map((image, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundImage: `url('${image}')`,
                }}
                className={`rounded-[24px] shrink-0 w-full bg-cover bg-center`}
              />
            );
          })}
        </div>
      </div>

      <div className="flex w-full h-20 justify-end gap-2 py-5">
        <div
          onClick={handlePrev}
          className={`rounded-[99px] w-[75px] h-full f-c-row border-[1px] ${current === 0 ? "border-border" : "border-[#322907]"} cursor-pointer`}
        >
          <LeftArrow className={`${current === 0 ? "text-border" : "text-[#322907]"}`} />
        </div>

        <div
          onClick={handleNext}
          className={`rounded-[99px] w-[170px] h-full f-c-row border-[1px] ${current === images.length - 1 ? "border-border" : "border-[#322907]"} cursor-pointer`}
        >
          <LeftArrow className={`${current === images.length - 1 ? "text-border" : "text-[#322907]"} text-3xl rotate-180`} />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
