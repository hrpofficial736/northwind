"use client";

import { LeftArrow } from "@/components/icons/LeftArrow";
import { useMotionVariants } from "@/utils/motionVariant";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ImageGallery = () => {
  const [current, setCurrent] = useState<number>(0);
  const { initialVariant, viewVariant, transitionVariant, viewPortVariant } =
    useMotionVariants();

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
    <div className="w-full relative p-[64px_24px] lg:p-[200px_36px] bg-primary flex flex-col gap-[32px]">
      <div className="flex flex-col justify-center">
        <motion.h1
          initial={initialVariant}
          whileInView={viewVariant}
          viewport={viewPortVariant}
          transition={transitionVariant}
          className="font-boskaMedium text-secondary text-[48px] leading-[120%] lg:text-[96px]"
        >
          Take A look
          <br /> Inside Sanctuary
        </motion.h1>
      </div>

      <div className="flex items-center gap-[22px] w-full h-[240px] md:h-[300px] lg:h-[600px] overflow-x-hidden">
        <div
          onClick={handlePrev}
          className={`rounded-[99px] z-[9999] w-[60px] h-[55px] f-c-row border-[1px] ${
            current === 0 ? "border-border" : "border-[#322907]"
          } cursor-pointer`}
        >
          <LeftArrow
            className={`${current === 0 ? "text-border" : "text-[#322907]"}`}
          />
        </div>
        <div className="overflow-x-hidden rounded-[24px] h-full w-full">
          <div
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
            className="flex transition-transform duration-600 w-[100%] h-full ease-in-out"
          >
            {images.map((image, index) => {
              return (
                <div
                  key={index}
                  style={{
                    backgroundImage: `url('${image}')`,
                  }}
                  className={`rounded-[24px] z-10 shrink-0 w-full bg-cover bg-center`}
                />
              );
            })}
          </div>
        </div>
        <div
          onClick={handleNext}
          className={`rounded-[99px] w-[60px] h-[55px] f-c-row border-[1px] ${
            current === images.length - 1 ? "border-border" : "border-[#322907]"
          } cursor-pointer`}
        >
          <LeftArrow
            className={`${
              current === images.length - 1 ? "text-border" : "text-[#322907]"
            } text-3xl rotate-180`}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
