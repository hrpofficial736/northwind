"use client";

import { submitForm } from "@/actions/formActions";
import Form from "@/components/Form";
import { useState } from "react";

type FormDataProps = {
  name: string;
  email: string;
  password: string;
}

export default function Home () {
  const [formData, setFormData] = useState<FormDataProps>({
    name: "",
    email: "",
    password: ""
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
    <div className="f-c-row gap-10 bg-background text-text w-screen h-screen">
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
        }
      ]} />
    </div>
  )
}


