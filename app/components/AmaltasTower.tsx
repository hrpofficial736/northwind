"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import { manropeFont } from "@/utils/fonts";
import Image from "next/image";
import React, { useState } from "react";

const AmaltasTower = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <section className="bg-primary p-[64px_24px] lg:p-[120px_36px] relative h-[1200px] w-full z-[9999]">
      <div className={`f-c-row gap-[48px] ${manropeFont.className}`}>
        <p className="text-[28px] lg:text-[36px] text-secondary/30">3BHK</p>
        <p className="text-[28px] lg:text-[36px] text-">4BHK</p>
        <p className="text-[28px] lg:text-[36px] text-secondary/30">4.5BHK</p>
      </div>
      <h1 className="font-boskaMedium text-[56px] lg:text-[128px] mt-[28px] lg:mt-[32px]">
        amaltas tower
      </h1>

      {/* Fixed Image Grid */}
      <div className="grid grid-cols-2 grid-rows-8 lg:grid-rows-2 gap-5 justify-items-center lg:w-[80%] mx-auto mt-[32px]">
        <div className="row-span-6 max-lg:col-span-2 aspect-[0.8] lg:row-span-2 rounded-xl w-full bg-[url('/assets/building2.jpg')] bg-cover" />
        <div className="row-span-2 max-lg:col-span-1 lg:row-span-1 rounded-xl w-full bg-[url('/assets/building3.jpg')] bg-cover" />
        <div className="row-span-2 max-lg:col-span-1 lg:row-span-1 rounded-xl w-full bg-[url('/assets/building1.jpg')] bg-cover" />
      </div>

      <div className="f-c-col lg:flex-row gap-5 mt-[28px] lg:mt-[32px] w-full">
        <PrimaryButton
          text="Express Interest"
          onTap={() => setClicked(!clicked)}
          className={`p-[20px_40px] w-full lg:p-[20px_40px] text-[20px] lg:text-[24px] ${
            manropeFont.className
          } ${
            clicked ? "bg-primary text-secondary" : "bg-secondary text-primary"
          }`}
        />
        <SecondaryButton
          onTap={() => setClicked(!clicked)}
          text="View Floor Plan"
          className={`p-[20px_40px] w-full lg:p-[20px_40px] text-[20px] lg:text-[24px] ${
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
