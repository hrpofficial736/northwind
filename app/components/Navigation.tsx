"use client";

import { AnimatePresence, motion } from "motion/react";
import Cross from "@/components/icons/Cross";
import React, { useEffect, useState } from "react";

const Navigation = ({
  show,
  setShow,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    setShow(show);
  }, [show]);
  return (
    <AnimatePresence>
        {show && <motion.div
      initial={{
        opacity: 0,
        y: -200,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -200
      }}
      transition={{
        duration: 0.3,
        type: "tween",
      }}
      className={`absolute z-[9999] flex flex-col justify-between pl-20 pr-5 py-4 inset-0 bg-[url("/assets/nav-logo.svg")] w-full h-full bg-secondary bg-right bg-no-repeat`}
    >
      <div
        onClick={() => setShow(false)}
        className="self-end p-2 bg-radial from-text/20 to-transparent ring-primary ring-2 rounded-xl cursor-pointer"
      >
        <Cross />
      </div>

      {/* Elements */}
      <div className="flex flex-col gap-[16px] border-primary self-start">
        <h1 className="uppercase font-boskaMedium text-[64px] text-primary cursor-pointer">
          home
        </h1>
        <h1 className="uppercase font-boskaMedium text-[64px] text-primary cursor-pointer">
          amenities
        </h1>
        <h1 className="uppercase font-boskaMedium text-[64px] text-primary cursor-pointer">
          about architect
        </h1>
        <h1 className="uppercase font-boskaMedium text-[64px] text-primary cursor-pointer">
          about developer
        </h1>
        <h1 className="uppercase font-boskaMedium text-[64px] text-primary cursor-pointer">
          connect with us
        </h1>
      </div>
    </motion.div>}
    </AnimatePresence>
  );
};

export default Navigation;
