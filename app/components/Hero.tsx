import Logo from "@/components/Logo";
import { manropeFont } from "@/utils/fonts";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen relative overflow-x-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/videos/hero-video.mp4"
        className="w-full object-fill h-full"
      />
      <Logo className="absolute inset-0 mt-10 left-1/2 -translate-x-1/2" />

      <div className="flex flex-col gap-20 w-[70%] mt-80 mx-auto absolute inset-0">
        <div className="w-1/2 flex flex-col">
          <h1
            className={`${manropeFont.className} text-[42px] font-[400] leading-[57px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] text-text self-start`}
          >
            there&apos;s no place like
          </h1>
          <h1 className="font-boskaItalicMedium text-text text-[150px] leading-[150px] tra self-center">home</h1>
        </div>
        <div className="w-1/2 flex flex-col self-end">
          <h1
            className={`${manropeFont.className} text-[42px] font-[400] leading-[57px] drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] text-text self-start`}
          >
            and there&apos;s no home like
          </h1>
          <h1 className="font-boskaItalicMedium text-text leading-[100px] text-[150px] self-center">sanctuary</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
