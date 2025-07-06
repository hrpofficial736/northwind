"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import TextField from "@/components/TextField";
import { manropeFont } from "@/utils/fonts";
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState<{
    name: string;
    phone: string;
    message: string;
    email: string;
  }>({
    name: "",
    phone: "",
    message: "",
    email: "",
  });
  return (
    <div className="f-c-col w-[60%] py-[20px] gap-[36px]">
      <div className="grid grid-cols-2 gap-[24px] w-full h-full">
        <TextField
          name="name"
          label="Name"
          placeholder="Enter full name"
          value={formData.name}
          type="text"
          onChanged={(e) => {
            setFormData((prevdata) => {
              const { name, value } = e.target;
              const updatedFormData = {
                ...prevdata,
                [name]: value,
              };
              return updatedFormData;
            });
          }}
          className="col-span-1"
        />
        <TextField
          name="phone"
          label="Mobile Number"
          placeholder="Enter mobile number"
          value={formData.phone}
          type="number"
          onChanged={(e) => {
            setFormData((prevdata) => {
              const { name, value } = e.target;
              const updatedFormData = {
                ...prevdata,
                [name]: value,
              };
              return updatedFormData;
            });
          }}
          className="col-span-1"
        />
        <TextField
          name="message"
          label="Message"
          placeholder="Type your message"
          value={formData.message}
          type="text"
          onChanged={(e) => {
            setFormData((prevdata) => {
              const { name, value } = e.target;
              const updatedFormData = {
                ...prevdata,
                [name]: value,
              };
              return updatedFormData;
            });
          }}
          className="col-span-2"
        />
        <TextField
          name="email"
          label="Email"
          placeholder="Enter email address"
          value={formData.email}
          type="text"
          onChanged={(e) => {
            setFormData((prevdata) => {
              const { name, value } = e.target;
              const updatedFormData = {
                ...prevdata,
                [name]: value,
              };
              return updatedFormData;
            });
          }}
          className="col-span-2"
        />
      </div>

      <div className={`f-c-row self-start gap-3 text-[20px] text-primary ${manropeFont.className}`}>
        <div className="w-[32px] h-[32px] rounded-[99px] bg-primary p-[7px]">
          <div className="size-full rounded-[99px] bg-secondary" />
        </div>
        <p>Sign up to newsletter for construction updates</p>
      </div>

         <PrimaryButton
            text="Submit Form"
            className={`p-[12px_32px] self-start lg:p-[20px_40px] text-[16px] lg:text-[24px] ${manropeFont.className} hover:bg-primary/80 duration-200 bg-submit text-black`}
          />

    </div>
  );
};

export default Form;
