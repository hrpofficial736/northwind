"use client";

import React, { HTMLInputTypeAttribute } from "react";

export type TextFieldProps = {
  name: string;
  value: string;
  placeholder: string;
  type: HTMLInputTypeAttribute;
  onChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
};

const TextField = (props: TextFieldProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label>{props.label}</label>
      <input
        className="p-3 rounded-3xl border bg-transparent"
        value={props.value}
        type={props.type}
        name={props.name}
        onChange={props.onChanged}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default TextField;
