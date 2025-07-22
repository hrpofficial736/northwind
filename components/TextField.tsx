"use client";

import { manropeFont } from "@/utils/fonts";
import clsx from "clsx";
import React, { HTMLInputTypeAttribute } from "react";

export type TextFieldProps = {
  name: string;
  value: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  onChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  className?: string;
  maxLength?: number;
};

const TextField = (props: TextFieldProps) => {
  return (
    <div className={clsx("flex flex-col max-md:items-center gap-1 w-full", props.className)}>
      <div className={`flex flex-col max-md:w-[90%] w-full`}>
       <label className={`${manropeFont.className}  text-primary text-[18px]`}>{props.label}</label>
      
      <input
      maxLength={props.maxLength}
      
        className={`px-[20px] py-[8px] max-md:max-w-full  rounded-[99px] outline-2 outline-border bg-input text-primary ${manropeFont.className} text-[20px]`}
        value={props.value}
        type={props.type}
        required
        name={props.name}
        onChange={props.onChanged}
        placeholder={props.placeholder}
      />
      </div>
    </div>
  );
};

export default TextField;
