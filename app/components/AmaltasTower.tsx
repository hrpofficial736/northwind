"use client";

import { manropeFont } from "@/utils/fonts";
import React, { useState } from "react";
import TowerComponent from "./TowerComponent";
import { AnimatePresence, motion } from "framer-motion";

type TowerProps = {
  name: string;
  description: string;
  image: string;
  pdfLink: string;
};

const AmaltasTower = () => {
  const [current, setCurrent] = useState<number>(0);

  const towersInfo: TowerProps[] = [
    {
      name: "cedar tower",
      description: `Sanctuary comes to life under the creative hand of Mr. Vishal Sharma, Confluence's lead architect.
        Widely admired for merging classic beauty with modern green technology.`,
      image: "/assets/cedar.png",
      pdfLink: "assets/certificates/towerA.pdf",
    },
    {
      name: "banyan tower",
      description: `Sanctuary comes to life under the creative hand of Mr. Vishal Sharma, Confluence's lead architect.
        Widely admired for merging classic beauty with modern green technology.`,
      image: "/assets/banyan.png",
      pdfLink: "assets/certificates/towerb.pdf",
    },
    {
      name: "amaltas tower",
      description: `Sanctuary comes to life under the creative hand of Mr. Vishal Sharma, Confluence's lead architect.
        Widely admired for merging classic beauty with modern green technology.`,
      image: "/assets/amaltas.png",
      pdfLink: "assets/certificates/towerc.pdf",
    },
  ];

  const towers = [
    <TowerComponent towerInfo={towersInfo[0]} />,
    <TowerComponent towerInfo={towersInfo[1]} />,
    <TowerComponent towerInfo={towersInfo[2]} />,
  ];

  return (
    <section className="bg-primary p-[64px_24px] lg:p-[120px_36px] relative w-full z-[9999] flex flex-col">
      <div
        className={`f-c-row gap-[20px] sm:gap-[70px] lg:gap-[120px] ${manropeFont.className}`}
      >
        <button
          onClick={() => {
            setCurrent(0);
          }}
          className={`md:text-[28px] lg:text-[36px] bg-secondary cursor-pointer text-primary rounded-[99px] px-9 py-3 ${
            current !== 0 && "text-secondary border bg-transparent"
          }`}
        >
          3BHK
        </button>
        <button
          onClick={() => {
            setCurrent(1);
          }}
          className={`md:text-[28px] lg:text-[36px] bg-secondary text-primary rounded-[99px] cursor-pointer px-9 py-3 ${
            current !== 1 && "text-secondary border bg-transparent"
          }`}
        >
          4BHK
        </button>
        <button
          onClick={() => {
            setCurrent(2);
          }}
          className={`md:text-[28px] lg:text-[36px] bg-secondary text-primary rounded-[99px] cursor-pointer px-9 py-3 ${
            current !== 2 && "text-secondary border bg-transparent"
          }`}
        >
          4.5BHK
        </button>
      </div>

      {/* Towers */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="w-full f-c-row"
        >
          {towers[current]}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default AmaltasTower;
