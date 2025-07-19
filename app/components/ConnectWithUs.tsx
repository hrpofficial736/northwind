"use client";

import { manropeFont } from "@/utils/fonts";
import React from "react";
import Form from "./Form";
import { useMotionVariants } from "@/utils/motionVariant";
import { motion } from "framer-motion";

const ConnectWithUs = () => {
  const { initialVariant, viewVariant, viewPortVariant, transitionVariant } = useMotionVariants();
  return (
    <div id="connect-with-us" className="w-full lg:h-[709px] bg-secondary relative p-[64px_24px] lg:p-[120px_40px] flex flex-col lg:flex-row gap-[36px]">
      <div className="flex flex-col lg:w-[40%] lg:text-center">
        <motion.h1 initial={initialVariant}
          whileInView={viewVariant}
          transition={transitionVariant}
          viewport={viewPortVariant} className="font-boskaMedium text-primary text-[64px] lg:text-[96px] z-20 leading-none">
          connect<br /> with us
        </motion.h1>
        <motion.p
        initial={initialVariant}
          whileInView={viewVariant}
          transition={transitionVariant}
          viewport={viewPortVariant}
          className={`${manropeFont.className} text-[24px] lg:text-[32px] text-primary mt-[12px]`}
        >
          Let&apos;s Talk About Your<br className="max-lg:hidden" /> Rare Living Address
        </motion.p>
      </div>

      <Form />
    </div>
  );
};

export default ConnectWithUs;
