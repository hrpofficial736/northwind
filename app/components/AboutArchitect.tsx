import Architect from "@/components/card/Architect";
import { manropeFont } from "@/utils/fonts";
import Image from "next/image";
import React from "react";

const AboutArchitect = () => {
  return (
    <div className="w-full h-[906px] relative p-[120px_40px] flex flex-col justify-center">
      <Image
        src={"/assets/architect.png"}
        fill
        alt="Architect"
        className="-z-10"
      />

      <div className="flex flex-col justify-center max-w-[45%]">
        <h1 className="font-boskaMedium text-primary text-[128px] z-20 leading-none">
          the architect
        </h1>
        <p
          className={`${manropeFont.className} text-[40px] text-primary mt-[12px]`}
        >
          Vishal Sharma, Lead Architect
        </p>
        <p
          className={`mt-[48px] ${manropeFont.className} text-[30px] text-primary font-[300]`}
        >
          Sanctuary comes to life under the creative hand of Mr. Vishal Sharma,
          Confluence's lead architect. Widely admired for merging classic beauty
          with modern green technology, he designs with a rare feel for space,
          light, and the land that holds them.{" "}
        </p>
      </div>
    </div>
  );
};

export default AboutArchitect;
