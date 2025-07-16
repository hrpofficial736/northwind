"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import { LeftArrow } from "@/components/icons/LeftArrow";
import VideoCircle from "@/components/icons/VideoCircle";
import useIsMobile from "@/hooks/useIsMobile";
import { AnimatePresence, motion } from "framer-motion";
import { manropeFont } from "@/utils/fonts";
import Image from "next/image";
import React, { useState } from "react";

const ConstructionUpdates = () => {
  const { isMobile } = useIsMobile(1024);
  const [show, setShow] = useState<boolean>(false);

  const [current, setCurrent] = useState<number>(0);

  const [caraouselIndex, setCaraouselIndex] = useState<number>(0);

   const handlePrev = () => {
    if (caraouselIndex > 0) setCaraouselIndex(caraouselIndex - 1);
  };

  const handleNext = () => {
    if (caraouselIndex < 4) setCaraouselIndex(caraouselIndex + 1);
  };

  const listOfUpdates = [
    [
      "Tower 1: Structure work in Tower A completed",
      "Tower 1: Landscape & pool deck work ongoing",
      "Tower 1: Basement mechanical work started",
    ],

    [
      "Tower 2: Structure work in Tower A completed",
      "Tower 2: Landscape & pool deck work ongoing",
      "Tower 2: Basement mechanical work started",
    ],

    [
      "Tower 3: Structure work in Tower A completed",
      "Tower 3: Landscape & pool deck work ongoing",
      "Tower 3: Basement mechanical work started",
    ],
  ];

  const listOfTowers = ["Tower 1", "Tower 2", "Tower 3"];
  return (
    <div className="w-full relative p-[64px_24px] lg:p-[100px_40px] flex flex-col gap-[36px] z-[9999]">
      <Image
        src={"/assets/background-image.png"}
        fill
        alt="Architect"
        className="-z-10"
      />
      <div className="flex flex-col justify-center">
        <h1 className="font-boskaMedium text-primary text-[64px] lg:text-[96px] z-20 leading-none">
          construction updates
        </h1>
        <p
          className={`${manropeFont.className} text-[24px] lg:text-[32px] text-primary mt-[12px]`}
        >
          Stay updated on our progress
        </p>
      </div>

      <div className="w-full flex justify-end gap-1 items-center">
          <LeftArrow onClick={handlePrev} className="text-primary cursor-pointer" />
        <div className="w-full lg:w-[25%] overflow-x-hidden flex justify-end">
          <div style={{
            transform: `translateX(-${(caraouselIndex / 4) * 100}%)`
          }} className="flex gap-[8px] w-full transition-transform duration-200">
            <Image
              src={"/assets/construction1.jpg"}
              width={isMobile ? 120 : 180}
              height={80}
              className="rounded-[8px] grayscale-100"
              alt="building-2"
            />
            <Image
              src={"/assets/construction2.jpg"}
              width={isMobile ? 120 : 180}
              height={80}
              className="rounded-[8px] grayscale-100"
              alt="building-2"
            />
            <Image
              src={"/assets/construction3.jpg"}
              width={isMobile ? 120 : 180}
              height={80}
              className="rounded-[8px] grayscale-100"
              alt="building-3"
            />
            <Image
              src={"/assets/construction4.jpg"}
              width={isMobile ? 120 : 180}
              height={80}
              className="rounded-[8px] grayscale-100"
              alt="building-3"
            />
          </div>
        </div>
          <LeftArrow onClick={handleNext} className="rotate-180 text-primary cursor-pointer" />
      </div>

      <div className="py-[24px] h-[264px]">
        <div className="backdrop-blur-[40px] max-w-[629px] p-[20px_20px] rounded-[12px] border border-input text-primary relative">
          <h1 className={`${manropeFont.className} text-[24px] lg:text-[32px]`}>
            Latest Update
          </h1>

          <div
            onClick={() => setShow(!show)}
            className={`rounded-full p-3 mt-[24px] max-w-[250px] f-c-row gap-3 backdrop-blur-3xl cursor-pointer text-[20px] bg-input ${manropeFont.className} font-[500]`}
          >
            {listOfTowers[current]}
            <LeftArrow
              className={`text-primary -rotate-90 mb-1 ${
                show && "rotate-90 mt-[10px] mb-0"
              }`}
            />
          </div>

          <AnimatePresence>
            {show && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  type: "tween",
                  duration: 0.2,
                }}
                className={`bg-input ${manropeFont.className} f-c-col mt-[10px] rounded-2xl max-w-[250px]`}
              >
                <div
                  onClick={() => {
                    setCurrent(0);
                    setShow(false);
                  }}
                  className="hover:bg-input/80 w-full f-c-row p-2 cursor-pointer rounded-t-2xl"
                >
                  Tower 1
                </div>
                <div
                  onClick={() => {
                    setCurrent(1);
                    setShow(false);
                  }}
                  className="hover:bg-input/80 w-full f-c-row p-2 cursor-pointer"
                >
                  Tower 2
                </div>
                <div
                  onClick={() => {
                    setCurrent(2);
                    setShow(false);
                  }}
                  className="hover:bg-input/80 w-full f-c-row p-2 cursor-pointer rounded-b-2xl"
                >
                  Tower 3
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <ul
            className={`mt-[24px] list-disc text-primary text-[20px] lg:text-[24px] ${manropeFont.className} ml-5`}
          >
            {listOfUpdates[current].map((update, index) => {
              return <li key={index}>{update}</li>;
            })}
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-center gap-5 mt-[100px] lg:mt-[72px] w-full">
        <PrimaryButton
          text="Sign up for updates"
          className={`p-[20px_40px] max-lg:w-full lg:p-[20px_40px] text-[20px] lg:text-[24px] ${manropeFont.className} bg-primary text-secondary
          `}
        />
        <SecondaryButton
          text="Watch site video"
          icon={<VideoCircle />}
          className={`p-[20px_40px] max-lg:w-full lg:p-[20px_40px] text-[20px] lg:text-[24px] ${manropeFont.className} text-primary bg-transparent border
           border-primary`}
        />
      </div>
    </div>
  );
};

export default ConstructionUpdates;
