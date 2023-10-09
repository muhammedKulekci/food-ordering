import MenuWrapper from "@/components/product/MenuWrapper";
import About from "@/components/About";
import Campaigns from "@/components/Campaigns";
import Carousel from "@/components/Carousel";
import React from "react";
import Reservation from "@/components/Reservation";
import Customers from "@/components/customers/Customers";

const Index = () => {
  return (
    <div>
      <Carousel />
      <Campaigns/>
      <MenuWrapper/>
      <About/>
      <Reservation/>
      <Customers/>
    </div>
  );
};

export default Index;
