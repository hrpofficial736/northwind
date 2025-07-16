"use client";

import React from "react";
import { manropeFont } from "@/utils/fonts";

type TowerProps = {
  towerInfo: {
    name: string;
    description: string;
    image: string;
  };
};

const TowerComponent = ({ towerInfo }: TowerProps) => {
  return (
    <div
      
      className="self-center flex flex-col gap-5 lg:flex-row items-center justify-between w-[80%] mt-[32px]"
    >
      <div
        style={{
          backgroundImage: `url("${towerInfo.image}")`,
        }}
        className="w-[400px] h-[700px] lg:w-[1000px] lg:h-[800px] bg-cover mr-[150px]"
      />

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
    </div>
  );
};

export default TowerComponent;
