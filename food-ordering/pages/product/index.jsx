import Title from "@/components/ui/Title";
import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <div className="flex h-screen items-center gap-20 flex-wrap">
      <div className="relative md:flex-1 w-[80%] h-[80%] md:justify-start justify-center">
        <Image src="/images/f1.png" alt="" fill className="object-contain" />
      </div>
      <div className="md:flex-1 pr-20 md:text-start text-center">
        <Title addClass="text-6xl">Good Pizza</Title>
        <span className="text-primary text-2xl font-bold underline-offset-1 my-4 inline-block">
          $10
        </span>
        <p className="text-sm my-4 md:pr-24">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis,
          dicta at eos provident ea sit cum. Dignissimos doloremque assumenda
          mollitia itaque esse hic sapiente impedit laudantium ab, beatae
          veritatis dolore.
        </p>
        <div>
          <h4 className="text-xl font-bold">Choose the size</h4>
          <div className="flex items-center gap-x-20 md:justify-start justify-center">
            <div className="relative w-8 h-8 ">
              <Image src="/images/pizza1.png" alt="" fill/>
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium">
                Small
              </span>
            </div>
            <div className="relative w-12 h-12">
              <Image src="/images/pizza1.png" alt="" fill />
              <span className="absolute top-0 -right-10 text-xs bg-primary rounded-full px-[5px] font-medium">
                Medium
              </span>
            </div>
            <div className="relative w-16 h-16">
              <Image src="/images/pizza1.png" alt="" fill />
              <span className="absolute top-0 -right-4 text-xs bg-primary rounded-full px-[5px] font-medium">
                Large
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 mt-6 md:justify-start justify-center">
            <label className="flex items-center gap-x-1">
                <input type="checkbox" className="w-5 h-5 accent-primary"></input>
                <span className="text-sm font-semibold">ketçap</span>
            </label>
            <label className="flex items-center gap-x-1">
                <input type="checkbox" className="w-5 h-5 accent-primary"></input>
                <span className="text-sm font-semibold">ketçap</span>
            </label>
            <label className="flex items-center gap-x-1">
                <input type="checkbox" className="w-5 h-5 accent-primary"></input>
                <span className="text-sm font-semibold">ketçap</span>
            </label>
        </div>
        <div>
            <button className="btn-primary mt-6">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
