import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Aeroplane from "@/components/icons/Aeroplane";
import Medical from "@/components/icons/Medical";
import Train from "@/components/icons/Train";
import { manropeFont } from "@/utils/fonts";
import React from "react";

const RareLiving = () => {
  return (
    <div className="bg-primary w-full p-[40px_88px]">
      <h1 className="font-boskaMedium text-[180px]">rare living.</h1>

      {/* List and Travel Options wala dabba */}

      <div className="flex gap-[250px] items-center mx-auto">
        <span className="w-[50%]">
          <p className={`${manropeFont.className} text-[28px] font-[400]`}>
            Located in the heart of Greater Noida, Northwind Sanctuary redefines
            luxury with:
          </p>
          <ul className={`list-disc ${manropeFont.className} font-[400] text-[28px] mx-10 mt-10`}>
            <li>
              Only <b>185</b> ultra-premium residences across 3 iconic towers
            </li>
            <li>
              Spread over <b>4.48</b> acres
            </li>
            <li>
              Over <b>70%</b> landscaped greens
            </li>
            <li>Designed for serenity, privacy, and open perspectives</li>
            <li>IGBC Platinum-rated for sustainability and wellness </li>
          </ul>
        </span>

        <span className=" flex flex-col gap-10 items-center">
            <h1 className={`${manropeFont.className} font-[400] text-[32px]`}>Location Highlights</h1>

            <div className="grid grid-cols-2 grid-rows-2 gap-10">
                {/* Metro */}
                <div className="f-c-col gap-3 px-12">
                    <Train />
                    <p className={`${manropeFont.className} font-[400] text-[16px] w-[150px] uppercase text-center`}>pari chowk metro station</p>
                    <p className={`${manropeFont.className} text-[36px] font-[400] `}>2-4 min</p>
                </div>

                {/* Train */}
                <div className="f-c-col gap-3 ">
                    <Train />
                    <p className={`${manropeFont.className} font-[400] text-[16px] w-[150px] uppercase text-center`}>gnida metro station</p>
                    <p className={`${manropeFont.className} text-[36px] font-[400] `}>2-4 min</p>
                </div>

                {/* Aeroplane */}
                <div className="f-c-col gap-3 ">
                    <Aeroplane />
                    <p className={`${manropeFont.className} font-[400] text-[16px] w-[150px] uppercase text-center`}>jewar airport</p>
                    <p className={`${manropeFont.className} text-[36px] font-[400] `}>2-4 min</p>
                </div>

                {/* Medical */}
                <div className="f-c-col gap-3 ">
                    <Medical />
                    <p className={`${manropeFont.className} font-[400] text-[16px] w-[150px] uppercase text-center`}>fortis hospital</p>
                    <p className={`${manropeFont.className} text-[36px] font-[400] `}>2-4 min</p>
                </div>
            </div>
        </span>
      </div>

      <div className="f-c-row gap-5 mt-[56px]">
        <SecondaryButton text="Download Brochure" className="p-[20px_40px] text-[24px]" />
        <PrimaryButton text="View Location" className="p-[20px_40px] text-[24px]"/>
      </div>
    </div>
  );
};

export default RareLiving;
