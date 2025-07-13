import { LeftArrow } from "@/components/icons/LeftArrow";
import React from "react";

const ImageGallery = () => {
  return (
    <div className="w-full relative p-[64px_24px] lg:p-[80px_36px] bg-primary flex flex-col gap-[32px]">
      <div className="flex flex-col justify-center">
        <h1 className="font-boskaMedium text-secondary text-[64px] leading-[120%] lg:text-[96px]">
          take a look<br /> inside sanctuary
        </h1>
      </div>


      <div className="flex gap-[22px] w-full h-[400px] border overflow-x-hidden">
        <div className="rounded-[24px] w-[80%] h-full bg-[url('/assets/gallery-1.png')] bg-cover" />
        <div className="rounded-[24px] w-[80%] h-full bg-[url('/assets/building3.jpg')] bg-cover" />
      </div>

      <div className="flex w-full h-20 justify-end gap-10 border">
        <div className="rounded-[99px] py-[6px] pl-[8px] pr-[16px] h-full w-[75px] f-c-row border border-input">
          <LeftArrow className="text-input" />
        </div>

        <div className="rounded-[99px] py-[6px] pl-[8px] pr-[16px] h-full w-[75px] f-c-row border border-input">
          <LeftArrow className="text-input text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
