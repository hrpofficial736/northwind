"use client";

import { manropeFont } from "@/utils/fonts";
import React, { useState } from "react";
import Pool from "@/public/assets/testimonials/pool.svg";
import Water from "@/public/assets/testimonials/water.svg";
import Apartment from "@/public/assets/testimonials/apartment.svg";
import Image from "next/image";

const WhatTheySayAboutUs = () => {
  const [click, setClick] = useState<number>(1);
  return (
    <div className="w-full h-[948px] bg-primary relative p-[64px_24px] lg:p-[120px_40px] gap-[44px] flex flex-col lg:flex-row">
      <div className="lg:w-[30%]">
        <h1 className={"font-boskaMedium text-[64px] lg:text-[96px] text-secondary"}>
          what they say about us
        </h1>
        <p className={`${manropeFont.className} text-[24px] lg:text-[32px]`}>
          Customer Testimonials
        </p>
      </div>

      {/* Images */}
      <div className="flex flex-row gap-5 lg:w-[70%] h-full">
        <div
          onClick={() => setClick(1)}
          className={`rounded-[16px] ${
            click === 1 ? "flex-[2]" : "flex-1"
          } transition-all duration-300 h-full`}
        >
          <Image src={Pool} alt="" className="size-full rounded-[16px] object-cover" />
        </div>
        <div
          onClick={() => setClick(2)}
          className={`rounded-[16px] ${
            click === 2 ? "flex-[2]" : "flex-1"
          } transition-all duration-300`}
        >
          <Image src={Water} alt="" className="size-full rounded-[16px] object-cover"/>
        </div>
        <div
          onClick={() => setClick(3)}
          className={`rounded-[16px] ${
            click === 3 ? "flex-[2]" : "flex-1"
          } transition-all duration-300`}
        >
          <Image src={Apartment} alt="" className="size-full rounded-[16px] object-cover" />
        </div>
      </div>
    </div>
  );
};

export default WhatTheySayAboutUs;
