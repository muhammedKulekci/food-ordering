import React from "react";
import Title from "../ui/Title";
import { FaLocationDot, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedin, FaInstagram, FaPinterest } from "react-icons/fa6";
import Logo from "../ui/Logo";

const Footer = () => {
  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-4">
          <div className="md:flex-1">
            <div>
              <Title addClass="text-[28px]">Contact Us</Title>
            </div>
            <div className="flex flex-col gap-y-2 mt-6">
              <a href="" className="flex gap-x-2 items-center hover:text-primary">
                <FaLocationDot /> Location
              </a>
              <a href="" className="flex gap-x-2 items-center hover:text-primary">
                <FaPhone /> Call +01 1234567890
              </a>
              <a href="" className="flex gap-x-2 items-center hover:text-primary">
                <FaEnvelope /> demo@gmail.com
              </a>
            </div>
          </div>
          <div className="md:flex-1">
            <div>
              <Logo />
            </div>
            <div className="mt-6">
              <p>
                Necessary, making this the first true generator on the Internet.
                It uses a dictionary of over 200 Latin words, combined with
              </p>
              <div>
                <ul className="flex justify-center mt-5 gap-x-2">
                    <li>
                        <a href="" className="hover:text-primary"><FaFacebookF size={20}/></a>
                    </li>
                    <li>
                        <a href="" className="hover:text-primary"><FaTwitter size={20}/></a>
                    </li>
                    <li>
                        <a href="" className="hover:text-primary"><FaLinkedin size={20}/></a>
                    </li>
                    <li>
                        <a href="" className="hover:text-primary"><FaInstagram size={20}/></a>
                    </li>
                    <li>
                        <a href="" className="hover:text-primary"><FaPinterest size={20}/></a>
                    </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:flex-1">
            <div>
              <Title addClass="text-[28px]">Opening Hours</Title>
            </div>
            <div className="mt-6">
              <p>Everyday</p>
              <p className="mt-6">10.00 Am -10.00 Pm</p>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center mt-10">
            © 2023 All Rights Reserved By Free Html Templates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
