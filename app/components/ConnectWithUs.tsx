import { manropeFont } from "@/utils/fonts";
import React from "react";
import Form from "./Form";

const ConnectWithUs = () => {
  return (
    <div className="w-full h-[709px] bg-secondary relative p-[120px_40px] f-c-row gap-[36px] f-c-row justify-center">
      <div className="flex flex-col justify-center w-[40%] text-center">
        <h1 className="font-boskaMedium text-primary text-[96px] z-20 leading-none">
          connect<br /> with us
        </h1>
        <p
          className={`${manropeFont.className} text-[32px] text-primary mt-[12px]`}
        >
          Let's Talk About Your<br /> Rare Living Address
        </p>
      </div>

      <Form />
    </div>
  );
};

export default ConnectWithUs;
