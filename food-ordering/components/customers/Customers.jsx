import React from "react";
import Title from "../ui/Title";
import CustomerItem from "./CustomerItem";
import Slider from "react-slick";
import {AiOutlineLeft , AiOutlineRight} from "react-icons/ai"

const Customers = () => {
  function NextBtn({onClick}) {
    return(
      <button className="bg-primary rounded-full text-white p-2 absolute -bottom-12 left-1/2" onClick={onClick}><AiOutlineRight/></button>
    )  }
    function PrevBtn({onClick}) {
      return(
        <button className="bg-primary rounded-full text-white p-2 absolute -bottom-12 right-1/2 mr-2" onClick={onClick}><AiOutlineLeft/></button>
      )  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3500,
    nextArrow:<NextBtn/>,
    prevArrow:<PrevBtn/>,
    responsive: [{
      breakpoint:768,
      settings:{
        slidesToShow:1
      }
    }]
  };
  return (
    <div className="container mx-auto text-center my-20 ">
      <Title addClass="text-[40px]">What Says Our Customers</Title>
      <div className="">
        <Slider {...settings}>
          <div>
            <CustomerItem imgSrc="/images/client1.jpg" />
          </div>
          <div>
            <CustomerItem imgSrc="/images/client2.jpg" />
          </div>
          <div>
            <CustomerItem imgSrc="/images/client1.jpg" />
          </div>
          <div>
            <CustomerItem imgSrc="/images/client2.jpg" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Customers;
