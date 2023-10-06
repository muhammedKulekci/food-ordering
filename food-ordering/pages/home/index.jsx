import MenuWrapper from "@/components/product/MenuWrapper";
import About from "@/components/About";
import Campaigns from "@/components/Campaigns";
import Carousel from "@/components/Carousel";
import React from "react";
import Reservation from "@/components/Reservation";

const Index = () => {
  return (
    <div>
      <Carousel />
      <Campaigns/>
      <MenuWrapper/>
      <About/>
      <Reservation/>
    </div>
  );
};

export default Index;
