"use client";

import { AnimatePresence, motion } from "framer-motion";
import Cross from "@/components/icons/Cross";
import { manropeFont } from "@/utils/fonts";
import React from "react";
import { useDisclaimerStore } from "@/stores/useDisclaimerStore";

const Disclaimer = () => {
  const { show, setShow } = useDisclaimerStore();
  return (
    <AnimatePresence>
      {show && (
        <motion.div
            initial={{
                opacity: 0
            }} animate={{
                opacity: 1
            }}
            transition={{
                duration: 0.3,
                type: "tween"
            }}
            exit={{
                opacity: 0
            }}
        className="bg-secondary blur-0 backdrop-brightness-200 p-[20px_40px] lg:p-[40px_48px] rounded-2xl flex flex-col absolute z-[9999] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            onClick={() => setShow()}
            className="self-start lg:self-end p-2 rounded-xl cursor-pointer"
          >
            <Cross />
          </div>

          <h1 className="font-boskaMedium text-primary text-[64px] lg:text-[96px] z-20 leading-none max-lg:mt-[32px]">
            disclaimer
          </h1>

          <p className={`${manropeFont.className} text-[20px] lg:text-[24px] mt-[36px] text-primary`}>
            All artistic impressions, specifications, and details are indicative
            and subject to change without prior notice. All details must be
            verified with the developer or authorized representative.
          </p>

          <p className={`${manropeFont.className} text-[20px] lg:text-[24px] mt-[16px] text-primary`}>
            Project developed by Northwind Estates Pvt. Ltd.
            <br />
            RERA No: UPRERAPRJ798312/05/2025
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Disclaimer;
