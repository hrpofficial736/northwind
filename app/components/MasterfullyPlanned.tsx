"use client";

import { manropeFont } from "@/utils/fonts";
import { maps } from "../exports/export";
import React, { useState } from "react";
import Image from "next/image";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import { useMotionVariants } from "@/utils/motionVariant";
import { motion } from "framer-motion";

const MasterfullyPlanned = () => {
  const { initialVariant, viewVariant, viewPortVariant, transitionVariant } = useMotionVariants();
  const sections: Array<{
    name: string;
    map: string;
  }> = [
    {
      name: "1. Arrival Zone",
      map: maps[0],
    },
    {
      name: "2. Recreational Zone",
      map: maps[1],
    },
    {
      name: "3. Active Zone",
      map: maps[2],
    },
    {
      name: "4. Fun & Entertainment",
      map: maps[3],
    },
    {
      name: "5. Sports Zone",
      map: maps[4],
    },
    {
      name: "6. Serenity Walk",
      map: maps[5],
    },
    {
      name: "7. Under Serenity Walk",
      map: maps[6],
    },
  ];

  const [current, setCurrent] = useState<number>(0);


  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div className="w-full lg:h-[1194px] bg-primary relative p-[64px_16px] lg:p-[120px_36px] gap-[44px] flex flex-col">
      <motion.h1 initial={initialVariant} whileInView={viewVariant} viewport={viewPortVariant} transition={transitionVariant} className={"font-boskaMedium text-[64px] lg:text-[96px] text-secondary"}>
        masterfully planned
      </motion.h1>

      {/* Map Section */}
      <div className="outline-2 outline-border rounded-[20px] h-max lg:h-[678px] flex flex-col lg:flex-row items-start w-[90%] xl:w-[70%] self-center">
        {/* Names */}
        <div className="flex flex-wrap lg:flex-col lg:items-start lg:w-[40%]">
          {sections.map((section, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                    setCurrent(index)
                }}
                className={`p-[8px_12px] lg:p-[12px_30px] ${index === 0 && "rounded-tl-[20px]"} ${index === 1 && "max-lg:rounded-tr-[20px]"} bg-transparent hover:bg-secondary/85 hover:text-primary cursor-pointer transition-all duration-200 lg:w-full flex justify-start border-b-1 border-r-1 max-lg:w-1/2 border-border ${manropeFont.className} font-[500] text-[14px] lg:text-[24px] text-secondary `}
              >
                {section.name}
              </div>
            );
          })}
        </div>

        {/* Maps */}
        <div className="relative h-[300px] sm:max-lg:h-[600px] lg:h-full w-full ">
          <Image
            alt={sections[current].name}
            src={sections[current].map}
            fill
            className="object-cover lg:rounded-tr-[20px] lg:rounded-br-[20px] max-lg:rounded-b-[20px]"
          />
        </div>
      </div>



      <div className="flex flex-col items-center md:flex-row md:justify-center gap-5 max-lg:mt-[28px] lg:mt-[32px] w-full">
        <PrimaryButton
          text="Express Interest"
          onTap={() =>{
            document.getElementById("connect-with-us")?.scrollIntoView({behavior:"smooth"})
          }
             
          }
          className={`p-[20px_40px] max-lg:w-full lg:p-[20px_40px] text-[20px] lg:text-[24px] ${
            manropeFont.className
          }  bg-secondary text-primary`
          }
            
        />
        <SecondaryButton
          onTap={() => setClicked(!clicked)}
          text="Master plan"
          className={`p-[20px_40px] max-lg:w-full lg:p-[20px_40px] text-[20px] lg:text-[24px] ${
            manropeFont.className
          } 
             bg-primary text-secondary
           border-secondary`}
        />
      </div>
    </div>
  );
};

export default MasterfullyPlanned;
