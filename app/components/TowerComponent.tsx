"use client";

import React from "react";
import { manropeFont } from "@/utils/fonts";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import { useState } from "react";


type TowerProps = {
  towerInfo: {
    name: string;
    description: string;
    image: string;
    pdfLink:string;
  };
};



const TowerComponent = ({ towerInfo }: TowerProps) => {

  const [clicked, setClicked] = useState<boolean>(false);
  


  return (
    <div className="flex flex-col gap-[40px]">
      <div
      
      className="self-center flex flex-col lg:gap-20 lg:flex-row items-center justify-between w-full 2xl:w-[90%] mt-[32px]"
    >
      <div
        style={{
          backgroundImage: `url("${towerInfo.image}")`,
        }}
        className="w-[400px] lg:w-[900px] xl:w-[600px] h-[620px] bg-cover bg-center"
      />

      <div className="flex flex-col gap-10 px-[10px]">
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
     <div className="flex flex-col items-center md:flex-row md:justify-center gap-5 mt-[28px] lg:mt-[32px] w-full px-[10px]">
              <PrimaryButton
                text="Express Interest"
                onTap={() => {
                  setClicked(!clicked)
                  document.getElementById("connect-with-us")?.scrollIntoView({behavior:"smooth"})
                }}
                className={`p-[20px_40px] max-lg:w-full lg:p-[20px_40px] text-[20px] lg:text-[24px] hover:bg-secondary/80 duration-200 ${
                  manropeFont.className
                } ${
                  clicked ? "bg-primary text-secondary" : "bg-secondary text-primary"
                }`}
              />
              <SecondaryButton
                onTap={() => {
                  setClicked(!clicked)
                  window.open(towerInfo.pdfLink,"_blank")
                }}
                
                text="View Floor Plan"
                className={`p-[20px_40px] max-lg:w-full lg:p-[20px_40px] text-[20px] lg:text-[24px] hover:bg-amber-200/20 duration-200${
                  manropeFont.className
                } ${
                  clicked ? "bg-secondary text-primary" : "bg-primary text-secondary"
                } border-secondary`}
              />
            </div>
    </div>
    
  );
};

export default TowerComponent;
