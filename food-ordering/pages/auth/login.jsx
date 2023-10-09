import Input from '@/components/form/Input'
import Title from '@/components/ui/Title'
import React from 'react'
import { useFormik } from 'formik'
import {AiFillGithub} from "react-icons/ai"
import Link from 'next/link'

const Login = () => {
    const {values,handleSubmit,handleChange} = useFormik({
        initialValues: {
          email: "",
          password:"",
        },
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    const inputs = [
        {
          id: 1,
          name: "email",
          type: "email",
          placeholder: "Your Email Adress",
          values:values.email,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Your Password",
            values:values.password,
          },
       
      ];
  return (
    <div className='container mx-auto'>
        <div className='flex flex-col items-center my-20 w-1/2 mx-auto'>
            <Title addClass="text-[40px] pb-6">Login</Title>
            <div className='w-full '>
            <form className="flex flex-col gap-y-3 w-full pb-4" onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <Input key={input.id} {...input} onChange={handleChange} />
            ))}
            <button className="btn-primary w-full">Login</button>
            <button className="bg-secondary text-white flex justify-center items-center gap-x-2 rounded-full w-full h-10"><AiFillGithub/> GitHub</button>
          </form>
          <Link href="/auth/register" className='text-sm underline cursor-pointer text-gray-600'>Do you no have a account?</Link>
            </div>
        </div>
    </div>
  )
}

export default Login