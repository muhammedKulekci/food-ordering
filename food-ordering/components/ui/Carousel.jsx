import React from "react";
import Image from "next/image";
import Title from "./Title";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplatSpeed: 3500,
  };
  return (
    <div className="h-screen w-full  mx-auto -mt-[-88px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image
            src="/images/slider.jpg"
            alt="Fast Food Restaurant"
            width={200}
            height={100}
            sizes="(max-width: 1200px) 100vw
                  "
            style={{ height: "100%", width: "100%" }} //The point is right there!
          />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className=" mt-48 text-white lg:px-96 px-0 flex flex-col items-start gap-y-10 ">
            <Title addClass="text-6xl">Fast Food Restaurant</Title>
            <p className="text-sm sm:w-2/5 w-full">
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, sunt repellat dolore, iste magni
              quos nihil ducimus libero ipsam.
            </p>
            <button className="btn-primary">Order Now</button>
          </div>
        </div>
        <div>
          <div className=" mt-48 text-white lg:px-96 px-0  flex flex-col items-start gap-y-10 ">
            <Title addClass="text-6xl">Fast Food Restaurant</Title>
            <p className="text-sm sm:w-2/5 w-full">
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, sunt repellat dolore, iste magni
              quos nihil ducimus libero ipsam.
            </p>
            <button className="btn-primary">Order Now</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
