"use client";

import { FormActionProps, submitForm } from "@/actions/formActions";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import ClickedRadio from "@/components/icons/ClickedRadio";
import UnclickedRadio from "@/components/icons/UnclickedRadio";
import TextField from "@/components/TextField";
import { manropeFont } from "@/utils/fonts";
import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState<FormActionProps>({
    name: "",
    mobile: "",
    message: "",
    email: "",
    isSigned: false,
  });
  return (
    <div className="f-c-col lg:w-[60%] py-[20px] gap-[36px]">
      <div className="flex flex-col lg:grid grid-cols-2 gap-[24px] w-full">
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
          name="mobile"
          label="Mobile Number"
          placeholder="Enter mobile number"
          value={formData.mobile}
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

      <div
        className={`flex items-center lg:flex-row lg:justify-center self-start gap-3 text-[20px] text-primary ${manropeFont.className}`}
      >
        <div
        className="cursor-pointer"
          onClick={() =>
            setFormData((prevData) => ({
              ...prevData,
              isSigned: !formData.isSigned,
            }))
          }
        >
          {formData.isSigned ? <ClickedRadio /> : <UnclickedRadio />}
        </div>
        <p>Sign up to newsletter for construction updates</p>
      </div>

      <PrimaryButton
        text="Submit Form"
        onTap={async () => {
          const responseFromAction = await submitForm(formData);
          if (responseFromAction) alert("Form submitted successfully!");
        }}
        className={`p-[20px_40px] lg:self-start self-center max-lg:w-full lg:p-[20px_40px] text-[20px] lg:text-[24px] ${manropeFont.className} bg-submit text-secondary hover:bg-submit/90
          `}
      />
    </div>
  );
};

export default Form;
