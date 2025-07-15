"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { manropeFont } from '@/utils/fonts';


type TowerProps = {
  name: string;
  description: string;
  image: string;
};

const TowerComponent = (towerInfo: TowerProps) => {
  return (
    <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 10.3,
        ease: "easeInOut"
      }} className="self-center flex items-center justify-between w-[80%] h-[700px] mt-[32px]">
        <div style={{
          backgroundImage: `url("${towerInfo.image}")`
        }} className="w-[1400px] h-[600px] bg-cover bg-right" />

        <div className="flex flex-col gap-10">
          <h1
            className={`font-boskaMedium text-secondary text-[64px] leading-[120%] lg:text-[96px]`}
          >
            {towerInfo.name}
          </h1>
          <p className={`${manropeFont.className} text-[24px]`}>
            {towerInfo.description}
          </p>
        </div>
      </motion.div>
  )
}

export default TowerComponent
