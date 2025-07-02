import Logo from "@/components/Logo";
import { manropeFont } from "@/utils/fonts";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/videos/hero-video.mp4"
        className="object-fill "
      />

      <Logo
        className="
          absolute z-10 
          top-10
          left-1/2 -translate-x-1/2 
          mt-6 custom580:mt-8 lg:mt-10 
          w-[60px] custom580:w-[80px] lg:w-[94px]
        "
      />



      {/* Hero Component ki headings */}

      <div className="absolute inset-0 z-10 flex flex-col justify-between px-4 custom580:px-10 lg:px-20 2xl:px-28 pt-[250px] pb-40 custom580:pb-20">
        <div className="mt-70">
          <h1
            className={`${manropeFont.className} text-[20px] custom580:text-[30px] lg:text-[42px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] text-text`}
          >
            there&apos;s no place like
          </h1>
          <h1 className="font-boskaItalicMedium text-text text-[60px] custom580:text-[75px] lg:text-[100px] 2xl:text-[128px] ml-20 custom580:ml-40">
            home
          </h1>
        </div>

        <div className="text-right ">
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
    </div>
  );
};

export default Hero;
