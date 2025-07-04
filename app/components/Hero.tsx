"use client";

import Logo from "@/components/Logo";
import { manropeFont } from "@/utils/fonts";
import React, { useEffect, useRef, useState } from "react";
import RareLiving from "./RareLiving";

const Hero = () => {

 

  return (
    <section
      className="w-full h-[200vh] relative "
    >
      <div className="sticky top-0 h-[120vh] w-full z-0">
        <video
          className="object-fill brightness-[90%]"
          muted
          autoPlay
          loop
          playsInline
          src={"/videos/hero-video.mp4"}
        />
      </div>

      <div className="flex flex-col items-center justify-between inset-0 px-20 py-10 h-[175vh] absolute w-full z-10">
        <div>
          <Logo />
        </div>
        <div className="self-start">
          <h1
            className={`${manropeFont.className} text-[20px] custom580:text-[30px] lg:text-[42px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] text-text`}
          >
            there&apos;s no place like
          </h1>
          <h1 className="font-boskaItalicMedium text-text text-[60px] leading-none custom580:text-[75px] lg:text-[100px] 2xl:text-[128px] ml-20 custom580:ml-40">
            home
          </h1>
        </div>

        <div className="text-right self-end"
        >
          <h1
            className={`${manropeFont.className} text-[20px] custom580:text-[30px] lg:text-[42px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] text-text max-custom580:text-center mr-[20px] custom580:mr-[50px] lg:mr-[180px]`}
          >
            and there&apos;s no home like
          </h1>
          <h1 className="font-boskaItalicMedium text-text text-[60px] custom580:text-[75px] lg:text-[100px] 2xl:text-[128px] leading-none">
            sanctuary
          </h1>
        </div>
      </div>

      <RareLiving />
    </section>
  );
};

export default Hero;
