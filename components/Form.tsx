"use client";

import clsx from "clsx";
import React from "react";
import TextField, { TextFieldProps } from "./TextField";

type FormProps = {
  className?: string;
  fields: TextFieldProps[];
  submitAction?: (formData: FormData) => void;
};

const Form = ({ className, fields, submitAction }: FormProps) => {
  return (
    <form
      action={submitAction}
      className={clsx("flex flex-col gap-5", className)}
    >
      {fields.map((field, index) => {
        return (
          <TextField
          key={index}
          name={field.name}
          onChanged={field.onChanged}
          label={field.label}
          placeholder={field.placeholder}
          value={field.value ?? ""} 
          type={field.type}
        />

        );
      })}
      <button type="submit" className="px-3 py-2 rounded bg-text text-background f-c-row cursor-pointer hover:bg-text/60">
        Submit
      </button>
    </form>
  );
};

export default Form;
