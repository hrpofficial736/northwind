"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Bulb from "@/components/icons/Bulb";
import Cloud from "@/components/icons/Cloud";
import Recycle from "@/components/icons/Recycle";
import SolarPower from "@/components/icons/SolarPower";
import Tree from "@/components/icons/Tree";
import Vent from "@/components/icons/Vent";
import { manropeFont } from "@/utils/fonts";
import React from "react";
import { motion } from "framer-motion";
import { useMotionVariants } from "@/utils/motionVariant";

const SustainablyDesigned = () => {
  const { initialVariant, viewVariant, viewPortVariant, transitionVariant } = useMotionVariants();
  return (
    <div className="w-full lg:h-[1100px] bg-secondary relative p-[88px_24px] lg:p-[120px_40px] flex flex-col gap-[36px]">
      <div className="flex flex-col justify-center">
        <motion.h1 initial={initialVariant}
          whileInView={viewVariant}
          transition={transitionVariant}
          viewport={viewPortVariant} className="font-boskaMedium text-primary text-[64px] lg:text-[96px] z-20 leading-none">
          sustainably designed.
        </motion.h1>
        <motion.p
        initial={initialVariant}
          whileInView={viewVariant}
          transition={transitionVariant}
          viewport={viewPortVariant}
          className={`${manropeFont.className} text-[24px] lg:text-[32px] text-primary mt-[12px]`}
        >
          IGBC platinum pre-certified.
        </motion.p>
      </div>


      <div className="grid grid-cols-2 grid-rows-6 md:grid-cols-6 md:grid-rows-2 gap-[20px] md:gap-[36px] py-[24px] md:max-w-[858px] mx-auto justify-items-center place-items-center">
        <div className="py-[20px] lg:py-[36px] f-c-col gap-[12px] outline-2 outline-border rounded-[8px] text-primary md:col-span-2 w-[150px] custom580:w-[184px] md:w-[200px] lg:w-[260px] max-md:row-span-2">
            <SolarPower />
            <p className={`${manropeFont.className} uppercase text-center max-sm:text-[12px]`}>solar power<br />lightning</p>
        </div>

         <div className="py-[20px] lg:py-[36px] f-c-col gap-[12px] outline-2 outline-border rounded-[8px] text-primary md:col-span-2 w-[150px] custom580:w-[184px] md:w-[200px] lg:w-[260px] max-md:row-span-2 col-span-1">
            <Vent />
            <p className={`${manropeFont.className} uppercase text-center max-sm:text-[12px]`}>low-voc<br />paints</p>
        </div>


         <div className="py-[20px] lg:py-[36px] f-c-col gap-[12px] outline-2 outline-border rounded-[8px] text-primary md:col-span-2 w-[150px] custom580:w-[184px] md:w-[200px] lg:w-[260px] max-md:row-span-2">
            <Cloud />
            <p className={`${manropeFont.className} uppercase text-center max-sm:text-[12px]`}>rainwater<br />harvesting</p>
        </div>


         <div className="py-[20px] lg:py-[36px] f-c-col gap-[12px] outline-2 outline-border rounded-[8px] text-primary md:col-span-2 w-[150px] custom580:w-[184px] md:w-[200px] lg:w-[260px] max-md:row-span-2 max-md:col-span-1">
            <Recycle />
            <p className={`${manropeFont.className} uppercase text-center max-sm:text-[12px]`}>efficient waste<br />management</p>
        </div>


         <div className="py-[20px] lg:py-[36px] f-c-col gap-[12px] outline-2 outline-border rounded-[8px] text-primary md:col-span-2 w-[150px] custom580:w-[184px] md:w-[200px] lg:w-[260px] max-md:row-span-2">
            <Bulb />
            <p className={`${manropeFont.className} uppercase text-center max-sm:text-[12px]`}>energy optimized<br /> layouts</p>
        </div>

        <div className="py-[20px] lg:py-[36px] f-c-col gap-[12px] outline-2 outline-border rounded-[8px] text-primary md:col-span-2 w-[150px] custom580:w-[184px] md:w-[200px] lg:w-[260px] max-md:row-span-2">
            <Tree />
            <p className={`${manropeFont.className} uppercase text-center max-sm:text-[12px]`}>abundant<br />greenery</p>
        </div>
      </div>

      <div className="flex flex-col items-center md:flex-row md:justify-center gap-5 mt-[28px] lg:mt-[32px] w-full">
        <PrimaryButton
          text="View Certification"
          onTap={() => {
            window.open("/assets/certificates/IGBC CERTIFICATE.pdf", "blank")
          }}
          className={`p-[20px_40px] max-md:w-full lg:p-[20px_40px] text-[20px] lg:text-[24px] ${
            manropeFont.className
          } bg-primary text-secondary
          `}
        />
        <SecondaryButton
          text="Green Guidelines PDF"
          onTap={() => {
            window.open("/assets/certificates/IGBC GUIDELINES.pdf", "blank")
          }}
          className={`p-[20px_40px] max-md:w-full lg:p-[20px_40px] text-[20px] lg:text-[24px] ${
            manropeFont.className
          } text-primary bg-transparent border
           border-primary`}
        />
        </div>



    </div>
  );
};

export default SustainablyDesigned;
