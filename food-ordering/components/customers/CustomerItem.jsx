import Image from "next/image";
import React from "react";

const CustomerItem = ({imgSrc}) => {
    
  return (
    <div>
      <div className="p-6 bg-secondary text-white rounded-[5px] mt-5 mx-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, odio
          adipisci sapiente assumenda qui obcaecati porro nemo nostrum culpa,
          voluptatibus id? Commodi error impedit adipisci eligendi officia
          maiores magnam asperiores.
        </p>
        <div className="flex flex-col mt-4">
        <span className="text-lg font-semibold">Moana Michell</span>
        <span className="text-[15px]">magna aliqua</span>
      </div>
      </div>
      
      <div className="relative h-28 w-28 rounded-full mt-8 before:content-[''] before:absolute before:top-0 flex justify-center before:-translate-y-3 before:rotate-45 before:border before:bg-primary before:w-5 before:h-5">
        <Image
          alt=""
          src={imgSrc}
          fill
          className="rounded-full border-4 border-primary"
        />
      </div>
    </div>
  );
};

export default CustomerItem;
