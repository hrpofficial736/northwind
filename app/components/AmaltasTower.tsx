"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import { manropeFont } from "@/utils/fonts";
import React, { useState } from "react";
import TowerComponent from "./TowerComponent";
import { AnimatePresence, motion } from "framer-motion";

type TowerProps = {
  name: string;
  description: string;
  image: string;
};

const AmaltasTower = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  const [current, setCurrent] = useState<number>(0);

  const towersInfo: TowerProps[] = [
    {
      name: "amaltas tower",
      description: `Sanctuary comes to life under the creative hand of Mr. Vishal Sharma, Confluence's lead architect.
        Widely admired for merging classic beauty with modern green technology.`,
      image: "/assets/amaltas.png",
    },
    {
      name: "banyan tower",
      description: `Sanctuary comes to life under the creative hand of Mr. Vishal Sharma, Confluence's lead architect.
        Widely admired for merging classic beauty with modern green technology.`,
      image: "/assets/banyan.png",
    },
    {
      name: "cedar tower",
      description: `Sanctuary comes to life under the creative hand of Mr. Vishal Sharma, Confluence's lead architect.
        Widely admired for merging classic beauty with modern green technology.`,
      image: "/assets/cedar.png",
    },
  ];

  const towers = [
    <TowerComponent towerInfo={towersInfo[0]} />,
    <TowerComponent towerInfo={towersInfo[1]} />,
    <TowerComponent towerInfo={towersInfo[2]} />,
  ];

  return (
    <section className="bg-primary p-[64px_24px] lg:p-[120px_36px] relative w-full z-[9999] flex flex-col">
      <div className={`f-c-row gap-[80px] lg:gap-[120px] ${manropeFont.className}`}>
        <p
          onClick={() => {
            setCurrent(0);
          }}
          className={`text-[28px] lg:text-[36px] cursor-pointer ${
            current !== 0 && "text-secondary/30"
          }`}
        >
          3BHK
        </p>
        <p
          onClick={() => {
            setCurrent(1);
          }}
          className={`text-[28px] lg:text-[36px] cursor-pointer ${
            current !== 1 && "text-secondary/30"
          }`}
        >
          4BHK
        </p>
        <p
          onClick={() => {
            setCurrent(2);
          }}
          className={`text-[28px] lg:text-[36px] cursor-pointer ${
            current !== 2 && "text-secondary/30"
          }`}
        >
          4.5BHK
        </p>
      </div>

      {/* Towers */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="w-full f-c-row"
        >
          {towers[current]}
        </motion.div>
      </AnimatePresence>

      <div className="flex flex-col items-center md:flex-row md:justify-center gap-5 mt-[28px] lg:mt-[32px] w-full">
        <PrimaryButton
          text="Express Interest"
          onTap={() => setClicked(!clicked)}
          className={`p-[20px_40px] max-lg:w-full lg:p-[20px_40px] text-[20px] lg:text-[24px] ${
            manropeFont.className
          } ${
            clicked ? "bg-primary text-secondary" : "bg-secondary text-primary"
          }`}
        />
        <SecondaryButton
          onTap={() => setClicked(!clicked)}
          text="View Floor Plan"
          className={`p-[20px_40px] max-lg:w-full lg:p-[20px_40px] text-[20px] lg:text-[24px] ${
            manropeFont.className
          } ${
            clicked ? "bg-secondary text-primary" : "bg-primary text-secondary"
          } border-secondary`}
        />
      </div>
    </section>
  );
};

export default AmaltasTower;
