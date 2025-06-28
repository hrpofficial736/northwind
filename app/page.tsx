"use client";

import { submitForm } from "@/actions/formActions";
import Form from "@/components/Form";
import { useState } from "react";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  mobile: number;
}

export default function Home () {
  const [formData, setFormData] = useState<FormDataProps>({
    name: "",
    email: "",
    password: "",
    mobile: 0
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }
  return (
    <div style={{ backgroundColor: '#B5AF96' }} className="f-c-row gap-10 text-text w-screen h-screen">

      
      <Form submitAction={submitForm} className="f-c-col gap-2" fields={[
        {
          name: "name",
          label: "Name",
          placeholder: "Enter your name here...",
          value: formData.name,
          onChanged: handleFormChange,
          type: "text"
        },
        {
          name: "email",
          label: "Email",
          placeholder: "Enter your email here...",
          value: formData.email,
          onChanged: handleFormChange,
          type: "email"
        },
        {
          name: "password",
          label: "Password",
          placeholder: "Enter your password here...",
          value: formData.password,
          onChanged: handleFormChange,
          type: "password"
        },
        {
          name: "mobile",
          label: "Mobile",
          placeholder: "Enter your mobile number here...",
          value: formData.mobile.toString(),
          onChanged: handleFormChange,
          type: "number"
        }
      ]} />
    </div>
  )
}


