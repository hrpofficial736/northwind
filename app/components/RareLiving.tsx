import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Aeroplane from "@/components/icons/Aeroplane";
import Location from "@/components/icons/Location";
import Medical from "@/components/icons/Medical";
import Train from "@/components/icons/Train";
import { manropeFont } from "@/utils/fonts";
import React from "react";

const RareLiving = ({ className }: { className: string }) => {
  return (
    <div className={`z-10 w-full p-[64px_24px] lg:p-[88px_40px] flex flex-col backdrop-blur-lg bg-gradient-to-b from-white/5 via-black/15 to-black/5 ${className}`}>
      <div className="font-boskaMedium selection:bg-primary selection:text-secondary text-primary text-[80px] lg:text-[128px] leading-[130%] xl:text-[180px] ">
        your rare living.
      </div>

      <div className="flex justify-center lg:gap-60 w-full text-primary max-lg:flex-col mx-auto pb-10 mt-[36px]">
        <p
          className={`${manropeFont.className} text-[22px] lg:text-[35px] font-[400]`}
        >
          Located in the heart of
          <br className="max-lg:hidden" />Greater Noida, designed
          <br className="max-lg:hidden" />for serenity, privacy, and
          <br className="max-lg:hidden" />open perspectives.
        </p>

        <div className="max-lg:flex max-lg:flex-col lg:grid lg:grid-rows-2 lg:grid-cols-2 gap-[35px] lg:w-[60%] max-lg:justify-items-center max-lg:mt-[48px]">
          <div
            className={`font-boskaMedium text-primary f-c-col text-[48px] rounded-[11.65px] outline-[1.46px] outline-border w-full py-10 lg:py-20 text-center`}
          >
            4.5 acres
            <p className={`text-[24px] ${manropeFont.className}`}>
              TOTAL
              <br />
              LAND AREA
            </p>
          </div>
          <div
            className={`font-boskaMedium text-primary f-c-col text-[48px] rounded-[11.65px] outline-[1.46px] outline-border w-full py-10 lg:py-20 text-center`}
          >
            185
            <p className={`text-[24px] ${manropeFont.className}`}>
              ULTRA
              <br />
              PREMIUM UNITS
            </p>
          </div>
          <div
            className={`font-boskaMedium text-primary f-c-col text-[48px] rounded-[11.65px] outline-[1.46px] outline-border w-full py-10 lg:py-20 text-center`}
          >
            70%
            <p className={`text-[24px] ${manropeFont.className}`}>
              LANDSCAPE
              <br />
              GREENS
            </p>
          </div>
          <div
            className={`font-boskaMedium text-primary f-c-col text-[48px] rounded-[11.65px] outline-[1.46px] outline-border w-full py-10 lg:py-20 text-center`}
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
        <h1 className="max-lg:text-[25px] text-4xl text-primary text-center">
          Located in the heart of Greater Noida
        </h1>

        <div className="max-lg:grid grid-cols-2 justify-items-center lg:flex lg:justify-center lg:items-center gap-[24px] text-primary">
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

        <div className="flex-col flex lg:flex-row gap-5 mt-[36px] max-lg:w-full">
          <PrimaryButton
            text="Download Brochure"
            className={`p-[20px_40px] max-lg:w-full text-[20px] lg:text-[24px] ${manropeFont.className} hover:bg-primary/60 duration-200 bg-primary/90 text-black`}
          />
          <SecondaryButton
            text="View Location"
            className={`p-[20px_40px] max-lg:w-full text-[20px] lg:text-[24px] ${manropeFont.className} hover:bg-white/10 duration-200 text-primary bg-transparent border-primary`}
          />
        </div>
      </div>
    </div>
  );
};

export default RareLiving;
