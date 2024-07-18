"use client";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section>
      {/* Hero section background */}
      <div className="bg-primary" data-aos="fade-in">
        <div className="mx-auto h-[64vh] sm:h-[70vh] lg:h-screen flex flex-col items-end justify-end overflow-hidden">
          <div className="flex flex-col  lg:flex-row items-center lg:items-center mt-10 lg:mt-0 gap-10 lg:gap-20 ml-0 lg:ml-10 ">
            <div className="lg:w-1/3 px-4 sm:px-6 lg:px-0 lg:text-left text-center flex flex-col justify-center items-center">
              <h1 className="font-bold text-4xl sm:text-5xl 2xl:text-[64px] text-center 2xl:leading-[85px] text-white playfair-display-font">
                Start your Real Estate Journey
              </h1>
              <p className="text-white font-normal text-sm sm:text-base lg:text-lg mt-2 text-center">
                Find your dream home with expert guidance and personalized
                service from start to finish
              </p>
              <a
                href="#"
                className="mt-6 lg:mt-10 inline-block px-4 sm:px-6 py-2 sm:py-3 bg-[#F7EAD9] text-lg sm:text-xl lg:text-2xl font-medium text-black rounded-lg"
              >
                Explore Listing
              </a>
            </div>
            {/* images  */}
            <div className="lg:w-2/3 px-4 sm:px-6 lg:px-0">
              <div className="relative w-full h-full lg:h-auto overflow-hidden border-[5px]  lg:border-[10px] border-[#F7EAD9]">
                <Image
                  src="https://i.ibb.co/QvqMpnh/Rectangle-127-1.png"
                  alt="hero background image"
                  width="1205"
                  height="759"
                  className="w-full h-full lg:h-auto object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="https://i.ibb.co/G3jrgVP/Rectangle-129.png"
                    alt="hero overlay image"
                    width="511"
                    height="759"
                    className="w-1/2    h-full lg:h-auto border-[5px]  lg:border-[10px] border-[#F7EAD9] border-y-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
