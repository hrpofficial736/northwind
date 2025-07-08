"use client";

import { manropeFont } from "@/utils/fonts";
import { maps } from "../exports/export";
import React, { useState } from "react";
import Image from "next/image";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";

const MasterfullyPlanned = () => {
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
    <div className="w-full h-[1194px] bg-primary relative p-[120px_36px] gap-[44px] flex flex-col">
      <h1 className={"font-boskaMedium text-[96px] text-secondary"}>
        masterfully planned
      </h1>

      {/* Map Section */}
      <div className="outline-2 outline-border rounded-[20px] h-[678px] flex items-start w-[70%] self-center">
        {/* Names */}
        <div className="flex flex-col items-start w-[40%]">
          {sections.map((section, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                    setCurrent(index)
                }}
                className={`p-[12px_30px] ${index === 0 && "rounded-tl-[20px]"} bg-transparent hover:bg-secondary/85 hover:text-primary cursor-pointer transition-all duration-200 w-full flex justify-start divide-border border-b-2 border-border ${manropeFont.className} font-[500] text-[24px] text-secondary`}
              >
                {section.name}
              </div>
            );
          })}
        </div>

        {/* Maps */}
        <div className="relative h-full w-full">
          <Image
            alt={sections[current].name}
            src={sections[current].map}
            fill
            className="object-cover rounded-tr-[20px] rounded-br-[20px]"
          />
        </div>
      </div>



      <div className="f-c-row gap-5 mt-[36px]">
        <PrimaryButton
            text="Express Interest"
            onTap={() => setClicked(!clicked)}
            className={`p-[12px_32px] lg:p-[20px_40px] text-[16px] lg:text-[24px] ${manropeFont.className} ${clicked ? "bg-primary text-secondary" : "bg-secondary text-primary"}`}
          />
          <SecondaryButton
          onTap={() => setClicked(!clicked)}
            text="View Master Plan"
            className={`p-[12px_32px] lg:p-[20px_40px] text-[16px] lg:text-[24px] ${manropeFont.className} ${clicked ? "bg-secondary text-primary" : "bg-primary text-secondary"} border-secondary`}
          />
      </div>
    </div>
  );
};

export default MasterfullyPlanned;
