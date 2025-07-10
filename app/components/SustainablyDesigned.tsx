import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Bulb from "@/components/icons/Bulb";
import Cloud from "@/components/icons/Cloud";
import Recycle from "@/components/icons/Recycle";
import SolarPower from "@/components/icons/SolarPower";
import Vent from "@/components/icons/Vent";
import { manropeFont } from "@/utils/fonts";
import React from "react";

const SustainablyDesigned = () => {
  return (
    <div className="w-full h-[1100px] bg-secondary relative p-[88px_24px] lg:p-[120px_40px] flex flex-col gap-[36px]">
      <div className="flex flex-col justify-center">
        <h1 className="font-boskaMedium text-primary text-[64px] lg:text-[96px] z-20 leading-none">
          sustainably designed.
        </h1>
        <p
          className={`${manropeFont.className} text-[24px] lg:text-[32px] text-primary mt-[12px]`}
        >
          IGBC platinum pre-certified.
        </p>
      </div>


      <div className="grid lg:grid-cols-6 lg:grid-rows-2 gap-[36px] py-[24px] lg:max-w-[858px] mx-auto justify-items-center place-items-center">
        <div className="py-[36px] f-c-col gap-[12px] outline-2 outline-border rounded-[8px] text-primary col-span-2 w-[260px]">
            <SolarPower />
            <p className={`${manropeFont.className} uppercase text-center`}>solar power<br />lightning</p>
        </div>

         <div className="py-[36px] f-c-col gap-[12px] outline-2 outline-border rounded-[8px] text-primary col-span-2 w-[260px]">
            <Vent />
            <p className={`${manropeFont.className} uppercase text-center`}>low-voc<br />paints</p>
        </div>


         <div className="py-[36px] f-c-col gap-[12px] outline-2 outline-border rounded-[8px] text-primary col-span-2 w-[260px]">
            <Cloud />
            <p className={`${manropeFont.className} uppercase text-center`}>rainwater<br />harvesting</p>
        </div>


         <div className="py-[36px] f-c-col gap-[12px] outline-2 outline-border rounded-[8px] text-primary col-span-2 w-[260px] col-start-2">
            <Recycle />
            <p className={`${manropeFont.className} uppercase text-center`}>efficient waste<br />management</p>
        </div>


         <div className="py-[36px] f-c-col gap-[12px] outline-2 outline-border rounded-[8px] text-primary col-span-2 w-[260px] col-start-4">
            <Bulb />
            <p className={`${manropeFont.className} uppercase text-center`}>energy optimized<br />layouts</p>
        </div>
      </div>

      <div className="f-c-row gap-5 mt-[36px]">
        <PrimaryButton
            text="View Certification"
            className={`p-[12px_32px] lg:p-[20px_40px] text-[16px] lg:text-[24px] ${manropeFont.className} hover:bg-primary/80 duration-200 bg-primary text-black`}
          />
          <SecondaryButton
            text="Green Guidelines PDF"
            className={`p-[12px_32px] lg:p-[20px_40px] text-[16px] lg:text-[24px] ${manropeFont.className} hover:bg-white/10 duration-200 text-primary bg-transparent border-primary`}
          />
      </div>



    </div>
  );
};

export default SustainablyDesigned;
