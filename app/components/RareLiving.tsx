import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Aeroplane from "@/components/icons/Aeroplane";
import Location from "@/components/icons/Location";
import Medical from "@/components/icons/Medical";
import Train from "@/components/icons/Train";
import { useSignUpStore } from "@/stores/useSignUpStore";
import { manropeFont } from "@/utils/fonts";
import React from "react";


const RareLiving = () => {
  const { status } = useSignUpStore();
  return (
    <div
      style={{
        maskImage: "linear-gradient(to bottom, transparent, black 12%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent, black 20%)",
      }}
      className={`z-10 w-full p-[64px_24px] lg:p-[88px_40px] flex flex-col backdrop-blur-lg lg:absolute -bottom-5`}
    >
      <div className="font-boskaMedium  selection:bg-primary selection:text-secondary text-primary text-[68px] lg:text-[128px] leading-[130%] xl:text-[180px] ">
        Your Rare Living.
      </div>

      <div className="flex justify-center lg:gap-60 w-full text-primary max-lg:flex-col mx-auto pb-10 mt-[36px]">
        <p
          className={`${manropeFont.className} text-[22px] lg:text-[35px] font-[400]`}
        >
          Designed for serenity, privacy, and open perspectives.
          <br className="max-lg:hidden" />
          
        </p>

        <div className="max-sm:flex max-sm:flex-col sm:grid sm:grid-rows-2 sm:grid-cols-2 gap-[35px] lg:w-[60%] items-center max-sm:justify-items-center mt-[32px] max-sm:mt-[48px]">
          <div
            className={`font-boskaMedium text-primary f-c-col text-[35px] rounded-[11.65px] outline-[1.46px] outline-border w-[80%] py-10 lg:py-20 text-center`}
          >
            4.5 acres
            <p className={`text-[16px] ${manropeFont.className}`}>
              TOTAL
              <br />
              LAND AREA
            </p>
          </div>
          <div
            className={`font-boskaMedium text-primary f-c-col text-[35px] rounded-[11.65px] outline-[1.46px] outline-border w-[80%] py-10 lg:py-20 text-center`}
          >
            185
            <p className={`text-[16px] ${manropeFont.className}`}>
              ULTRA
              <br />
              PREMIUM UNITS
            </p>
          </div>
          <div
            className={`font-boskaMedium text-primary f-c-col text-[35px] rounded-[11.65px] outline-[1.46px] outline-border w-[80%] py-10 lg:py-20 text-center`}
          >
            70%
            <p className={`text-[16px] ${manropeFont.className}`}>
              LANDSCAPE
              <br />
              GREENS
            </p>
          </div>
          <div
            className={`font-boskaMedium text-primary f-c-col text-[35px] rounded-[11.65px] outline-[1.46px] outline-border w-[80%] py-10 lg:py-20 text-center`}
          >
            IGBC
            <p className={`text-[16px] ${manropeFont.className}`}>
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

        <div className="flex-col flex sm:flex-row justify-center items-center gap-5 mt-[36px] w-full">
          <PrimaryButton
            text="Download Brochure"
            onTap={() => {
              if (status) {
                window.open("/assets/certificates/Brochure.pdf", "blank");
              }
              else {
                alert("Please fill the form before downloading brochure!")
                document.getElementById("connect-with-us")?.scrollIntoView({behavior:"smooth"})
              }
            }}
            className={`p-[20px_40px] max-lg:w-[90%] text-[16px] lg:text-[24px] ${manropeFont.className} hover:bg-primary/60 duration-200 bg-secondary/70 text-primary`}
          />
          <SecondaryButton
            text="View Location"
            onTap={() => {
              window.open(
                "https://www.google.com/maps/dir//Plot+No+-+GH+07,+Unitech+City,+Unitech+Horizon,+Pi+I+%26+II,+Greater+Noida,+Uttar+Pradesh+201310/@28.4805544,77.4641141,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8ce321148fa4e875:0x8fe4480253bf60c2!2m2!1d77.5465155!2d28.4805792?hl=en&authuser=0&entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D",
                "blank"
              );
            }}
            className={`p-[20px_40px] max-lg:w-[90%] text-[16px] lg:text-[24px] ${manropeFont.className} hover:bg-white/10 duration-200 text-primary bg-transparent border-primary`}
          />
        </div>
      </div>
    </div>
  );
};

export default RareLiving;
