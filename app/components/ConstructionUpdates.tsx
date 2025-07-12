"use client"

import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import VideoCircle from "@/components/icons/VideoCircle";
import useIsMobile from "@/hooks/useIsMobile";
import { manropeFont } from "@/utils/fonts";
import Image from "next/image";
import React from "react";

const ConstructionUpdates = () => {
  const { isMobile } = useIsMobile(1024);
  return (
    <div className="w-full relative p-[64px_24px] lg:p-[120px_40px] flex flex-col gap-[36px]">
      <Image
        src={"/assets/Frame 87.png"}
        fill
        alt="Architect"
        className="-z-10"
      />
      <img />
      <div className="flex flex-col justify-center">
        <h1 className="font-boskaMedium text-primary text-[64px] lg:text-[96px] z-20 leading-none">
          construction updates
        </h1>
        <p
          className={`${manropeFont.className} text-[24px] lg:text-[32px] text-primary mt-[12px]`}
        >
          Stay updated on our progress
        </p>
      </div>



      <div className="flex justify-center lg:justify-end gap-[8px]">
        <Image src={"/assets/building2.jpg"} width={isMobile ? 100 : 180} height={80} className="rounded-[8px]" alt="building-2" />
        <Image src={"/assets/building1.jpg"} width={isMobile ? 100 : 180} height={80} className="rounded-[8px]" alt="building-1" />
        <Image src={"/assets/building3.jpg"} width={isMobile ? 100 : 180} height={80} className="rounded-[8px]" alt="building-3" />
      </div>


      <div className="py-[24px] h-[264px]">
        <div className="backdrop-blur-[40px] max-w-[629px] p-[20px_20px] rounded-[12px] border border-input text-primary">
            <h1 className={`${manropeFont.className} text-[24px] lg:text-[32px]`}>Latest Update</h1>

            <ul className={`mt-[24px] list-disc text-primary text-[20px] lg:text-[24px] ${manropeFont.className} ml-5`}>
                <li>Structure work in Tower A completed</li>
                <li>Landscape & pool deck work ongoing</li>
                <li>Basement mechanical work started</li>
            </ul>
        </div>
      </div>




      <div className="flex flex-col items-center md:flex-row md:justify-center gap-5 mt-[28px] lg:mt-[32px] w-full">
        <PrimaryButton
          text="Sign up for updates"
          className={`p-[20px_40px] max-lg:w-full lg:p-[20px_40px] text-[20px] lg:text-[24px] ${
            manropeFont.className
          } bg-primary text-secondary
          `}
        />
        <SecondaryButton
          text="Watch site video"
          icon={<VideoCircle />}
          className={`p-[20px_40px] max-lg:w-full lg:p-[20px_40px] text-[20px] lg:text-[24px] ${
            manropeFont.className
          } text-primary bg-transparent border
           border-primary`}
        />
        </div>
    </div>
  );
};

export default ConstructionUpdates;
