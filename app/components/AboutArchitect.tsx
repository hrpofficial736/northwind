"use client";

import { manropeFont } from "@/utils/fonts";
import React from "react";
import { motion } from "framer-motion";
import { useMotionVariants } from "@/utils/motionVariant";

const AboutArchitect = () => {
  const { initialVariant, viewVariant, viewPortVariant, transitionVariant } = useMotionVariants();
  return (
    <div id="about-architect" className="w-full md:h-[906px] relative flex flex-col max-md:flex-col-reverse justify-center bg-input">
      
      <div className="bg-[url('/assets/architect-new.png')] w-full md:h-full min-h-[400px] bg-contain bg-center lg:bg-right bg-no-repeat bg-border" />
      <div className="flex flex-col max-lg:justify-end lg:justify-center md:max-w-[45%] max-md:bg-border p-[64px_24px] md:absolute md:inset-0 md:m-[120px_40px]">
        <motion.h1 initial={initialVariant}
          whileInView={viewVariant}
          transition={transitionVariant}
          viewport={viewPortVariant} className="font-boskaMedium text-primary text-[64px] lg:text-[128px] z-20 leading-none">
          the architect
        </motion.h1>
        <motion.p
        initial={initialVariant}
          whileInView={viewVariant}
          transition={transitionVariant}
          viewport={viewPortVariant}
          className={`${manropeFont.className} text-[24px] lg:text-[40px] text-primary mt-[12px]`}
        >
          Vishal Sharma, Lead Architect
        </motion.p>
        <motion.p
        initial={initialVariant}
          whileInView={viewVariant}
          transition={transitionVariant}
          viewport={viewPortVariant}
          className={`mt-[48px] ${manropeFont.className} text-[20px] lg:text-[30px] text-primary font-[300]`}
        >
          Sanctuary comes to life under the creative hand of Mr. Vishal Sharma,
          Confluence's lead architect. Widely admired for merging classic beauty
          with modern green technology, he designs with a rare feel for space,
          light, and the land that holds them.{" "}
        </motion.p>
      </div>
    </div>
  );
};

export default AboutArchitect;
