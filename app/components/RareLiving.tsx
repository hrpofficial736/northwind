import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Aeroplane from "@/components/icons/Aeroplane";
import Location from "@/components/icons/Location";
import Medical from "@/components/icons/Medical";
import Train from "@/components/icons/Train";
import { manropeFont } from "@/utils/fonts";
import React from "react";

const RareLiving = () => {
  return (
    <div className="z-10 w-full p-[30px_30px] lg:p-[88px_40px] flex flex-col backdrop-blur-xl bg-gradient-to-b from-white/5 via-black/15 to-black/5">
      <div className="font-boskaMedium selection:bg-primary selection:text-secondary text-primary text-[128px] leading-[130%] xl:text-[180px] ">
        your rare living.
      </div>

      <div className="flex justify-center gap-60 w-full text-primary max-lg:flex-col mx-auto pb-10 mt-[36px]">
        <p
          className={`${manropeFont.className} text-[20px] lg:text-[35px] font-[400]`}
        >
          Located in the heart of
          <br /> Greater Noida, designed
          <br /> for serenity, privacy, and
          <br /> open perspectives.
        </p>

        <div className="grid grid-rows-2 grid-cols-2 gap-[35px] w-1/2 justify-items-center">
          <div
            className={`font-boskaMedium text-primary f-c-col text-[48px] rounded-[11.65px] outline-[1.46px] outline-border w-full py-20 text-center`}
          >
            4.5 acres
            <p className={`text-[24px] ${manropeFont.className}`}>
              TOTAL
              <br />
              LAND AREA
            </p>
          </div>
          <div
            className={`font-boskaMedium text-primary f-c-col text-[48px] rounded-[11.65px] outline-[1.46px] outline-border w-full py-20 text-center`}
          >
            185
            <p className={`text-[24px] ${manropeFont.className}`}>
              ULTRA
              <br />
              PREMIUM UNITS
            </p>
          </div>
          <div
            className={`font-boskaMedium text-primary f-c-col text-[48px] rounded-[11.65px] outline-[1.46px] outline-border w-full py-20 text-center`}
          >
            70%
            <p className={`text-[24px] ${manropeFont.className}`}>
              LANDSCAPE
              <br />
              GREENS
            </p>
          </div>
          <div
            className={`font-boskaMedium text-primary f-c-col text-[48px] rounded-[11.65px] outline-[1.46px] outline-border w-full py-20 text-center`}
          >
            IGBC
            <p className={`text-[24px] ${manropeFont.className}`}>
              PLATINUM
              <br />
              RATED
            </p>
          </div>
        </div>
      </div>

      <div className={`f-c-col gap-[36px] ${manropeFont.className}`}>
        <h1 className="text-4xl text-primary">
          Located in the heart of Greater Noida
        </h1>

        <div className="f-c-row gap-[24px] text-primary">
          <div className="f-c-col w-[262px] h-[204px]">
            <Location />
            <p
              className={`${manropeFont.className} font-[400] text-[16px] uppercase text-center`}
            >
              pari chowk <br />
              (landmark)
            </p>
            <p
              className={`font-boskaMedium text-[28px] lg:text-[36px] font-[400] `}
            >
              7 min
            </p>
          </div>

          <div className="f-c-col w-[262px] h-[204px]">
            <Train />
            <p
              className={`${manropeFont.className} font-[400] text-[16px] uppercase text-center`}
            >
              gnida <br />
              (metro station)
            </p>
            <p
              className={`font-boskaMedium text-[28px] lg:text-[36px] font-[400] `}
            >
              4 min
            </p>
          </div>

          <div className="f-c-col w-[262px] h-[204px]">
            <Aeroplane />
            <p
              className={`${manropeFont.className} font-[400] text-[16px] uppercase text-center`}
            >
              jewar <br />
              (airport)
            </p>
            <p
              className={`font-boskaMedium text-[28px] lg:text-[36px] font-[400] `}
            >
              30 min
            </p>
          </div>

          <div className="f-c-col w-[262px] h-[204px]">
            <Medical />
            <p
              className={`${manropeFont.className} font-[400] text-[16px] uppercase text-center`}
            >
              fortis <br />
              (hospital)
            </p>
            <p
              className={`font-boskaMedium text-[28px] lg:text-[36px] font-[400] `}
            >
              7 min
            </p>
          </div>
        </div>

        <div className="f-c-row gap-5 mt-[36px]">
          <PrimaryButton
            text="Download Brochure"
            className={`p-[12px_32px] lg:p-[20px_40px] text-[16px] lg:text-[24px] ${manropeFont.className} hover:bg-primary/60 duration-200 bg-primary/90 text-black`}
          />
          <SecondaryButton
            text="View Location"
            className={`p-[12px_32px] lg:p-[20px_40px] text-[16px] lg:text-[24px] ${manropeFont.className} hover:bg-white/10 duration-200 text-primary bg-transparent border-primary`}
          />
        </div>
      </div>
    </div>
  );
};

export default RareLiving;
