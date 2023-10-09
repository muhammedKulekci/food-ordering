import Input from "@/components/form/Input";
import Title from "@/components/ui/Title";
import React from "react";
import { useFormik } from "formik";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

const Register = () => {
  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Your Full Name",
      values: values.fullName,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Your Email Adress",
      values: values.email,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Your Password",
      values: values.password,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      values: values.confirmPassword,
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center my-20 w-1/2 mx-auto">
        <Title addClass="text-[40px] pb-6">Login</Title>
        <div className="w-full ">
          <form
            className="flex flex-col gap-y-3 w-full pb-4"
            onSubmit={handleSubmit}
          >
            {inputs.map((input) => (
              <Input key={input.id} {...input} onChange={handleChange} />
            ))}
            <button className="btn-primary w-full">Register</button>
            
          </form>
          <Link
            href="/auth/login"
            className="text-sm underline cursor-pointer text-gray-600"
          >
            Do youhave a account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
