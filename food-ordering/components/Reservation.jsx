import React from "react";
import Title from "./ui/Title";
import Input from "./form/Input";
import { useFormik } from "formik";

const Reservation = () => {
  const {values,handleSubmit,handleChange} = useFormik({
    initialValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      persons: "",
      date: "",
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
      values:values.fullName,
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Your Phone Name",
      values:values.phoneNumber,
    },
    {
      id: 3,
      name: "persons",
      type: "number",
      placeholder: "How Many Persons?",
      values:values.persons,
    },
    {
      id: 4,
      name: "email",
      type: "email",
      placeholder: "Your Email Adress",
      values:values.email,
    },
    {
      id: 5,
      name: "date",
      type: "datetime-local",
      placeholder: "",
      values:values.date,
    },
  ];
  return (
    <div className="container mx-auto py-12">
      <div className="">
        <div className="mb-10">
          <Title addClass="text-[40px]">Book A Tabel</Title>
        </div>
        <div className="flex justify-between gap-x-10">
          <form className="flex flex-col gap-y-3 w-full" onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <Input key={input.id} {...input} onChange={handleChange} />
            ))}
            <button className="btn-primary w-36">Book Now</button>
          </form>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d898.633263329954!2d-73.98583438452182!3d40.74816727253337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Binas%C4%B1!5e0!3m2!1str!2str!4v1696618497656!5m2!1str!2str"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
