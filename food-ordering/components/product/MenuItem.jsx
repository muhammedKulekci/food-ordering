import Image from "next/image";
import React from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";

const MenuItem = () => {
  return (
    <div className="bg-secondary text-white rounded-b-3xl rounded-t-[30px]">
      <div className="bg-[#F1F2F3] w-full p-[25px] grid place-content-center rounded-bl-[46px] rounded-t-3xl">
        <div className="relative w-36 h-36 ">
          <Image src="/images/f1.png" alt="" fill className="hover:scale-110 transition-all"/>
        </div>
      </div>
      <div className="p-[25px]">
        <div className=" ">
          <h4 className="text-xl font-semibold">Delicious Pizza</h4>
          <p className="text-[15px]">
            Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
            velit, magnam voluptatem repellendus sed eaque
          </p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span>$20</span>
          <button className="btn-primary w-10 h-10 rounded-full grid place-content-center">
            <RiShoppingCart2Fill />
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default MenuItem;
