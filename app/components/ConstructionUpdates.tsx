import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import VideoCircle from "@/components/icons/VideoCircle";
import { manropeFont } from "@/utils/fonts";
import Image from "next/image";
import React from "react";

const ConstructionUpdates = () => {
  return (
    <div className="w-full relative p-[120px_40px] flex flex-col gap-[36px]">
      <Image
        src={"/assets/Frame 87.png"}
        fill
        alt="Architect"
        className="-z-10"
      />
      <div className="flex flex-col justify-center">
        <h1 className="font-boskaMedium text-primary text-[96px] z-20 leading-none">
          construction updates
        </h1>
        <p
          className={`${manropeFont.className} text-[32px] text-primary mt-[12px]`}
        >
          Stay updated on our progress
        </p>
      </div>



      <div className="flex justify-end gap-[8px]">
        <Image src={"/assets/building2.jpg"} width={180} height={80} className="rounded-[8px]" alt="building-2" />
        <Image src={"/assets/building1.jpg"} width={180} height={80} className="rounded-[8px]" alt="building-1" />
        <Image src={"/assets/building3.jpg"} width={180} height={80} className="rounded-[8px]" alt="building-3" />
      </div>


      <div className="py-[24px] h-[264px]">
        <div className="backdrop-blur-[40px] max-w-[629px] p-[20px_20px] rounded-[12px] outline-1 outline-rgba(181, 175, 150, 0.4) text-primary">
            <h1 className={`${manropeFont.className} text-[32px]`}>Latest Update</h1>

            <ul className={`mt-[24px] list-disc text-primary text-[24px] ${manropeFont.className} ml-5`}>
                <li>Structure work in Tower A completed</li>
                <li>Landscape & pool deck work ongoing</li>
                <li>Basement mechanical work started</li>
            </ul>
        </div>
      </div>




      <div className="f-c-row gap-5">
        <PrimaryButton
            text="Sign up for updates"
            className={`p-[12px_32px] lg:p-[20px_40px] text-[16px] lg:text-[24px] ${manropeFont.className} hover:bg-primary/80 duration-200 bg-primary text-black`}
          />
          <SecondaryButton
            text="Watch Site Video"
            icon={<VideoCircle />}
            className={`p-[12px_32px] lg:p-[20px_40px] text-[16px] lg:text-[24px] ${manropeFont.className} hover:bg-white/10 duration-200 text-primary bg-transparent border-primary`}
          />
      </div>
    </div>
  );
};

export default ConstructionUpdates;
