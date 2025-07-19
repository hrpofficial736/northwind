"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import { LeftArrow } from "@/components/icons/LeftArrow";
import VideoCircle from "@/components/icons/VideoCircle";
import useIsMobile from "@/hooks/useIsMobile";
import { AnimatePresence, motion } from "framer-motion";
import { manropeFont } from "@/utils/fonts";
import Image from "next/image";
import React, { RefObject, useState } from "react";
import { useMotionVariants } from "@/utils/motionVariant";
import { useFullImageStore } from "@/stores/useFullImageStore";
import FullImage from "./FullImage";
import WatchSite from "./WatchSite";

const ConstructionUpdates = ({
  ref,
}: {
  ref: RefObject<HTMLDivElement | null>;
}) => {
  const { isMobile } = useIsMobile(1024);       //custom hook without store
  const { setDisplay, display } = useFullImageStore(); //custom hook with store
  const { initialVariant, viewVariant, transitionVariant, viewPortVariant } =
    useMotionVariants();
  const [show, setShow] = useState<boolean>(false);

  const [current, setCurrent] = useState<number>(0);

  const [caraouselIndex, setCaraouselIndex] = useState<number>(0);

  const [showSiteVideo, setShowSiteVideo] = useState<boolean>(false);

  const handlePrev = () => {                                               //handler
    if (caraouselIndex > 0) setCaraouselIndex(caraouselIndex - 1);
  };

  const handleNext = () => {
    if (caraouselIndex < 4) setCaraouselIndex(caraouselIndex + 1);
  };

  const listOfUpdates = [
    [
      " Raft work completed",
      " Basement coloumns completed",
      " Retaining wall completed ",

    ],

    [
      " Raft work completed",
      " Retaining wall in progressRetaining wall in progress",
      " Column work in progress",
,
    ],

    [
      " raft work completed",
      " Retaining wall in progressRetaining wall in progress",
      " basement slab work in progress",
    ],
  ];

  const listOfTowers = ["Amaltas", "Banyan", "Cedar"];
  return (
    <div className={`w-full relative p-[64px_24px] lg:p-[100px_40px] flex flex-col gap-[36px] z-[9999] ${display && "overflow-hidden"}`}>
      <Image
        src={"/assets/background-image.png"}
        fill
        alt="Architect"
        className={`-z-10 ${(display || showSiteVideo) && "brightness-50"}`}
      />
      <div className={`flex flex-col justify-center ${(display || showSiteVideo) && "brightness-50"}`}>
        <motion.h1
          initial={initialVariant}
          whileInView={viewVariant}
          transition={transitionVariant}
          viewport={viewPortVariant}
          className="font-boskaMedium text-primary text-[64px] lg:text-[96px] z-20 leading-none"
        >
          construction updates
        </motion.h1>
        <motion.p
          initial={initialVariant}
          whileInView={viewVariant}
          transition={transitionVariant}
          viewport={viewPortVariant}
          className={`${manropeFont.className} text-[24px] lg:text-[32px] text-primary mt-[12px]`}
        >
          Stay updated on our progress
        </motion.p>
      </div>

      <div className={`${(display || showSiteVideo) && "brightness-50"} w-full flex justify-end gap-1 items-center`}>
        <LeftArrow
          onClick={handlePrev}
          className="text-primary cursor-pointer"
        />
        <div className="w-full lg:w-[25%] overflow-x-hidden flex justify-end">
          <div
            style={{
              transform: `translateX(-${(caraouselIndex / 4) * 100}%)`,
            }}
            className="flex gap-[8px] w-full transition-transform duration-200"
          >
            <Image
              onClick={() => setDisplay("/assets/construction1.jpg")}
              src={"/assets/construction1.jpg"}
              width={isMobile ? 120 : 180}
              height={80}
              className={`rounded-[8px] grayscale-100 cursor-pointer`}
              alt="building-2"
            />
            <Image
              onClick={() => setDisplay("/assets/construction2.jpg")}
              src={"/assets/construction2.jpg"}
              width={isMobile ? 120 : 180}
              height={80}
              className={`rounded-[8px] grayscale-100 cursor-pointer`}
              alt="building-2"
            />
            <Image
              onClick={() => setDisplay("/assets/construction3.jpg")}
              src={"/assets/construction3.jpg"}
              width={isMobile ? 120 : 180}
              height={80}
              className={`rounded-[8px] grayscale-100 cursor-pointer`}
              alt="building-3"
            />
            <Image
              onClick={() => setDisplay("/assets/construction4.jpg")}
              src={"/assets/construction4.jpg"}
              width={isMobile ? 120 : 180}
              height={80}
              className={`rounded-[8px] grayscale-100 cursor-pointer`}
              alt="building-3"
            />
          </div>
        </div>
        <LeftArrow
          onClick={handleNext}
          className="rotate-180 text-primary cursor-pointer"
        />
      </div>

      <div className={`py-[24px] h-[264px] ${(display || showSiteVideo) && "brightness-50"}`}>
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
                  Amaltas
                </div>
                <div
                  onClick={() => {
                    setCurrent(1);
                    setShow(false);
                  }}
                  className="hover:bg-input/80 w-full f-c-row p-2 cursor-pointer"
                >
                  Banyan
                </div>
                <div
                  onClick={() => {
                    setCurrent(2);
                    setShow(false);
                  }}
                  className="hover:bg-input/80 w-full f-c-row p-2 cursor-pointer rounded-b-2xl"
                >
                  Cedar
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

      <div className={`${(display || showSiteVideo) && "brightness-50"} flex flex-col items-center md:flex-row md:justify-center gap-5 mt-[200px] w-full`}>
        <PrimaryButton
          text="Sign up for updates"
          onTap={() => {
            document
              .getElementById("connect-with-us")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className={`p-[20px_40px] max-lg:w-full lg:p-[20px_40px] text-[20px] lg:text-[24px] hover:bg-primary/80 durantion:200 ${manropeFont.className} bg-primary text-secondary
          `}
        />
        <SecondaryButton
          text="Watch site video"
          icon={<VideoCircle />}
          onTap={()=>{
            setShowSiteVideo(true)
          }}
          className={`p-[20px_40px] max-lg:w-full lg:p-[20px_40px] text-[20px] lg:text-[24px] ${manropeFont.className} text-primary bg-transparent border
           border-primary`}
        />
      </div>
      <FullImage />
      <WatchSite display={showSiteVideo} setDisplay={setShowSiteVideo} />
    </div>
  );
};

export default ConstructionUpdates;
