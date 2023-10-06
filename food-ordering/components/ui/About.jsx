import Image from "next/image";
import React from "react";
import Title from "./Title";

const About = () => {
  return (
    <div className="bg-secondary text-white py-20">
      <div className="container mx-auto justify-center  flex items-center gap-20">
        <div className="flex justify-center">
          <div className="relative sm:w-[445px] sm:h-[600px] flex justify-center w-[300px] h-[450px] ">
            <Image alt="" src="/images/about-img.png" fill className="" />
          </div>
        </div>
        <div>
          <h4 className="md:w-1/2">
            <Title addClass="text-[40px]">We Are Feane</Title>
          </h4>
          <p className="my-5 text-[14px] flex  flex-col items-center">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All
          </p>
          <button className="btn-primary rounded-3xl">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
