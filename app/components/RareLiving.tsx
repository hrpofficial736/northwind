import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Aeroplane from "@/components/icons/Aeroplane";
import Medical from "@/components/icons/Medical";
import Train from "@/components/icons/Train";
import { manropeFont } from "@/utils/fonts";
import React from "react";

const RareLiving = () => {
  return (
    <div className="bg-primary w-full p-[30px_30px] lg:p-[88px_40px] flex flex-col gap-[56px]">
      <h1 className="font-boskaMedium text-[75px] leading-[130%] lg:text-[180px] ">
        Your rare living.
      </h1>

      {/* List and Travel Options wala dabba */}

      <div className="flex justify-around w-full max-lg:flex-col lg:gap-[250px] gap-10  mx-auto">
        <span className="">
          <p
            className={`${manropeFont.className} text-[20px] lg:text-[28px] font-[400]`}
          >
            Located in the heart of Greater Noida, Northwind
            <br /> Sanctuary redefines luxury with:
          </p>
          <ul
            className={`list-disc ${manropeFont.className} font-[400] text-[20px] lg:text-[28px] mt-5 px-10`}
          >
            <li>
              Only <b>185</b> ultra-premium residences across <b>3</b><br />iconic towers
            </li>
            <li>
              Spread over <b>4.48</b> acres
            </li>
            <li>
              Over <b>70%</b> landscaped greens
            </li>
            <li>Designed for serenity, privacy, and open<br /> perspectives</li>
            <li>IGBC Platinum-rated for sustainability and<br /> wellness </li>
          </ul>
        </span>

        <span className=" flex flex-col gap-10 items-center">
          <h1
            className={`${manropeFont.className} font-[400] text-[24px] lg:text-[32px]`}
          >
            Location Highlights
          </h1>

          <div className="grid grid-cols-2 grid-rows-2 justify-items-center gap-[24px] lg:gap-10">
            {/* Metro */}
            <div className="f-c-col gap-3 px-4 py-2  min-w-[204px]">
              <Train />
              <p
                className={`${manropeFont.className} font-[400] text-[16px] uppercase text-center`}
              >
                pari chowk
                <br /> metro station
              </p>
              <p
                className={`${manropeFont.className} text-[28px] lg:text-[36px] font-[400] `}
              >
                2-4 min
              </p>
            </div>

            {/* Train */}
            <div className="f-c-col gap-3 px-4 py-2  min-w-[204px]">
              <Train />
              <p
                className={`${manropeFont.className} font-[400] text-[16px] uppercase text-center`}
              >
                gnida
                <br /> metro station
              </p>
              <p
                className={`${manropeFont.className} text-[28px] lg:text-[36px] font-[400] `}
              >
                2-4 min
              </p>
            </div>

            {/* Aeroplane */}
            <div className="f-c-col gap-3 px-4 py-2  min-w-[204px]">
              <Aeroplane />
              <p
                className={`${manropeFont.className} font-[400] text-[16px] uppercase text-center`}
              >
                jewar
                <br /> airport
              </p>
              <p
                className={`${manropeFont.className} text-[28px] lg:text-[36px] font-[400] `}
              >
                2-4 min
              </p>
            </div>

            {/* Medical */}
            <div className="f-c-col gap-3 px-4 py-2  min-w-[204px]">
              <Medical />
              <p
                className={`${manropeFont.className} font-[400] text-[16px] uppercase text-center`}
              >
                fortis
                <br /> hospital
              </p>
              <p
                className={`${manropeFont.className} text-[28px] lg:text-[36px] font-[400] `}
              >
                2-4 min
              </p>
            </div>
          </div>
        </span>
      </div>

      <div className="flex justify-center max-lg:flex-col gap-5">
        <SecondaryButton
          text="Download Brochure"
          className="p-[12px_32px] lg:p-[20px_40px] text-[16px] lg:text-[24px]"
        />
        <PrimaryButton
          text="View Location"
          className="p-[12px_32px] lg:p-[20px_40px] text-[16px] lg:text-[24px]"
        />
      </div>
    </div>
  );
};

export default RareLiving;
