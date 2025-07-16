import { manropeFont } from "@/utils/fonts";
import React from "react";
import Form from "./Form";

const ConnectWithUs = () => {
  return (
    <div id="connect-with-us" className="w-full lg:h-[709px] bg-secondary relative p-[64px_24px] lg:p-[120px_40px] flex flex-col lg:flex-row gap-[36px]">
      <div className="flex flex-col   lg:w-[40%] lg:text-center">
        <h1 className="font-boskaMedium text-primary text-[64px] lg:text-[96px] z-20 leading-none">
          connect<br /> with us
        </h1>
        <p
          className={`${manropeFont.className} text-[24px] lg:text-[32px] text-primary mt-[12px]`}
        >
          Let's Talk About Your<br className="max-lg:hidden" /> Rare Living Address
        </p>
      </div>

      <Form />
    </div>
  );
};

export default ConnectWithUs;
