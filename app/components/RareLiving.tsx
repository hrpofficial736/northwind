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
    <div className="bg-black/15 absolute top-full w-full p-[30px_30px] lg:p-[0px_0px] lg:py-0 flex flex-col ">
      <div className="w-full h-[44px] backdrop-blur-[4px] brightness-[1.185]"></div>
      <div className="w-full h-[44px] backdrop-blur-[6px] brightness-[1.180]"></div>

      <div className="font-boskaMedium px-[40px] selection:bg-primary selection:text-secondary text-primary text-[128px] leading-[130%] xl:text-[180px] backdrop-blur-[8px] brightness-[1.190] ">
        your rare living.
      </div>

      <div className="backdrop-blur-[12px] h-[14px] backdrop-brightness-[1.192]" />
      <div className="backdrop-blur-[16px] h-[14px] backdrop-brightness-[1.2]" />
      <div className="backdrop-blur-[20px] h-[14px] backdrop-brightness-[1.208]" />
      <div className="backdrop-blur-[22px] h-[14px] backdrop-brightness-[1.215]" />

      <div className="flex justify-center gap-60 w-full text-primary max-lg:flex-col mx-auto pb-10 backdrop-blur-xl backdrop-brightness-[1.215]">
        <p
          className={`${manropeFont.className} text-[20px] lg:text-[28px] font-[400]`}
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

      <div className="backdrop-blur-xl brightness-[1.1782] h-[5px] border" />

      <div className="backdrop-blur-xl brightness-[1.1790] h-[5px] border" />

      <div className="backdrop-blur-xl brightness-[1.1800] h-[5px] border" />

      <div className="backdrop-blur-xl brightness-[1.1815] h-[5px] border" />



      <div
        className={`f-c-col gap-[36px] ${manropeFont.className} backdrop-blur-xl brightness-[1.109] border`}
      >
        <h1 className="text-4xl text-primary">
          Located in the heart of Greater Noida
        </h1>

        <div className="f-c-row gap-[24px] text-primary">
          <div className="f-c-col w-[262px] h-[204px]">
            <Location />
            <p
              className={`${manropeFont.className} font-[400] text-[16px] uppercase text-center`}
            >
              pari chowk <br />(landmark)
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
             gnida <br />(metro station)
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
              jewar <br />(airport)
            </p>
            <p
              className={`font-boskaMedium text-[28px] lg:text-[36px] font-[400] `}
            >
              30 min
            </p>
          </div>


          <div className="f-c-col w-[262px] h-[204px]">
            <Location />
            <p
              className={`${manropeFont.className} font-[400] text-[16px] uppercase text-center`}
            >
              fortis <br />(hospital)
            </p>
            <p
              className={`font-boskaMedium text-[28px] lg:text-[36px] font-[400] `}
            >
              7 min
            </p>
          </div>


           



        </div>
      </div>

      {/* <span className="flex flex-col gap-10 items-center">
          <h1
            className={`${manropeFont.className} font-[400]{`text-[24px] ${manropeFont.className}`}lg:text-[32px]`}
          >
            Location Highlights
          </h1>

          <div className="grid grid-cols-2 grid-rows-2 justify-items-center gap-[24px] lg:gap-10">
            <div className="f-c-col gap-3 px-4 py-2  min-w-[204px]">
              <Train />
              <p
                className={`${manropeFont.className} font-[400] text-[16px] uppercase text-center`}
              >
                pari chowk
                 metro station
              </p>
              <p
                className={`${manropeFont.className} text-[28px] lg:text-[36px] font-[400] `}
              >
                2-4 min
              </p>
            </div>

            <div className="f-c-col gap-3 px-4 py-2  min-w-[204px]">
              <Train />
              <p
                className={`${manropeFont.className} font-[400] text-[16px] uppercase text-center`}
              >
                gnida
                 metro station
              </p>
              <p
                className={`${manropeFont.className} text-[28px] lg:text-[36px] font-[400] `}
              >
                2-4 min
              </p>
            </div>

            <div className="f-c-col gap-3 px-4 py-2  min-w-[204px]">
              <Aeroplane />
              <p
                className={`${manropeFont.className} font-[400] text-[16px] uppercase text-center`}
              >
                jewar
                 airport
              </p>
              <p
                className={`${manropeFont.className} text-[28px] lg:text-[36px] font-[400] `}
              >
                2-4 min
              </p>
            </div>

            <div className="f-c-col gap-3 px-4 py-2  min-w-[204px]">
              <Medical />
              <p
                className={`${manropeFont.className} font-[400] text-[16px] uppercase text-center`}
              >
                fortis
                 hospital
              </p>
              <p
                className={`${manropeFont.className} text-[28px] lg:text-[36px] font-[400] `}
              >
                2-4 min
              </p>
            </div>
          </div>
        </span> */}

      {/* <div className="flex justify-center max-lg:flex-col gap-5">
        <SecondaryButton
          text="Download Brochure"
          className="p-[12px_32px] lg:p-[20px_40px] text-[16px] lg{`text-[24px] ${manropeFont.className}`}
        />
        <PrimaryButton
          text="View Location"
          className="p-[12px_32px] lg:p-[20px_40px] text-[16px] lg{`text-[24px] ${manropeFont.className}`}
        />
      </div> */}
    </div>
  );
};

export default RareLiving;
