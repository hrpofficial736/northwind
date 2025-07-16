"use client";

import { AnimatePresence, motion } from "framer-motion";
import Cross from "@/components/icons/Cross";
import React, { RefObject, useEffect, useState } from "react";

const Navigation = ({
  show,
  setShow,
  ref,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  ref: RefObject<HTMLDivElement | null>;
}) => {
  useEffect(() => {
    setShow(show);
  }, [show]);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
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
            y: -200,
          }}
          transition={{
            duration: 0.3,
            type: "tween",
          }}
          className={`absolute z-[9999] flex flex-col justify-between pl-3 lg:pl-20 pr-5 py-4 inset-0 bg-[url("/assets/nav-logo.svg")] w-full h-full bg-secondary bg-right-top bg-no-repeat`}
        >
          <div
            onClick={() => setShow(false)}
            className="self-start lg:self-end p-2 rounded-xl cursor-pointer"
          >
            <Cross />
          </div>

          {/* Elements */}
          <div className="flex flex-col gap-[12px] lg:gap-[16px] border-primary self-start">
            <div onClick={() => {
                setShow(false);
               
              }} className="uppercase font-boskaMedium text-[32px] lg:text-[64px] text-primary cursor-pointer">
              home
            </div>
            <div
              onClick={() => {
                setShow(false);
                document.getElementById("about-architect")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="uppercase font-boskaMedium text-[32px] lg:text-[64px] text-primary cursor-pointer"
            >
              about architect
            </div>

            <div className="uppercase font-boskaMedium text-[32px] lg:text-[64px] text-primary cursor-pointer">
              about developer
            </div>
            <div
              onClick={() => {
                setShow(false);
               document.getElementById("connect-with-us")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="uppercase font-boskaMedium text-[32px] lg:text-[64px] text-primary cursor-pointer"
            >
              connect with us
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navigation;
