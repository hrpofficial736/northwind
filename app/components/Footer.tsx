import React from "react";
import { manropeFont } from "@/utils/fonts";
import Sign from "@/components/Sign";
import Loc from "@/components/icons/Loc";
import Mail from "@/components/icons/Mail1";
import Phone from "@/components/icons/Phone";
import Globe from "@/components/icons/Globe";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-tertiary relative max-md:p-[20px_0px] max-md:h-[1000px] md:p-[120px_0px] gap-[80px] overflow-hidden bg-gradient-to-r from-black to-secondary">
      <div className=" h-[134px] flex flex-col justify-center items-center z-20">
        <Sign />
      </div>
  
      <div className="w-full h-full flex flex-row max-sm:flex-col-reverse items-center justify-center gap-[40px] relative z-10">
        <div className="bottom-0 left-0 w-[679.85px] h-[496.61px] max-md:w-[322px] max-md:h-[150px] overflow-hidden">
          <img
            src="/assets/rangoli.png"
            alt="rangoli"
            className="object-cover w-full justify-center h-full "
          />
        </div>

        <div className="flex flex-col h-[232px] items-start text-left text-white gap-[20px] ml-auto mr-32 mb-16 max-md:absolute inset-0 pl-10">
          <div className="flex flex-col gap-2 items-start">
            <h1
              className={`${manropeFont.className} text-[28px] md:text-[32px] text-white`}
            >
              Northwind Sanctuary
            </h1>
            <p
              className={`${manropeFont.className} text-[20px] md:text-[24px] font-normal text-white`}
            >
              By Northwind Estates Pvt. Ltd.
            </p>
          </div>

          <div
            className={`${manropeFont.className} flex flex-col gap-[12px] text-[16px] text-white`}
          >
            <div className="flex items-center gap-[8px]">
              <span className="text-[24px]">
                <Loc />
              </span>
              <p>Plot 07, Sector Pi-1, Greater Noida, UP-201306</p>
            </div>
            <div className="flex items-center gap-[8px]">
              <span className="text-[24px]">
                <Phone />
              </span>
              <p>+91-888 111 0909</p>
            </div>
            <div className="flex items-center gap-[8px]">
              <span className="text-[24px]">
                <Mail />
              </span>
              <p>info@northwindsanctuary.com</p>
            </div>
            <div className="flex items-center gap-[8px]">
              <span className="text-[24px]">
                <Globe />
              </span>
              <p>www.northwindsanctuary.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4 max-md:absolute bottom-10 left-1/2 max-md:-translate-x-1/2 z-20">
        <div className="flex flex-wrap max-sm:flex-col text-center justify-center gap-[24px] text-white text-[16px] uppercase tracking-wider">
          <a href="#" className="hover:text-gray-300 transition-colors">
            DISCLAIMER
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            PRIVACY POLICY
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            DOWNLOAD BROCHURE
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            FACEBOOK
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            INSTAGRAM
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            LINKEDIN
          </a>
        </div>

        <div className="text-white text-[12px] text-center">
          <p>all rights reserved © northwindestates2025</p>
        </div>
      </div>

      {/* <div className="hidden">
            <Foot />
        </div> */}
    </footer>
  );
};

export default Footer;
