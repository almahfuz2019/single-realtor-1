import Image from "next/image";
import React from "react";

const properties = [
  {
    id: 1,
    title: "Sell Your Property With Us",
    subTitle: "From listing to closing, we handle it all",
    buttonText: "List Your Property",
    imgSrc: "https://i.ibb.co/Wc5Vzhw/Rectangle-130-2.png",
    buttonLink: "#",
    process: [
      "Initial Consultation and Property Assessment",
      "Marketing and Showcasing Your Property",
      "Negotiation and Closing",
    ],
  },
  {
    id: 2,
    title: "Purchase Your Dream Home",
    subTitle: "Turn the dream of homeownership into reality",
    buttonText: "Search Listing",
    imgSrc: "https://i.ibb.co/Dw10VHw/Rectangle-130.png",
    buttonLink: "#",
    process: [
      "Initial Consultation and Home Search",
      "Viewing and Selecting Properties",
      "Making an Offer and Closing the Deal",
    ],
  },
  {
    id: 3,
    title: "Rent a Quality Property",
    subTitle: "Rent smart, live free. We make renting easy.",
    buttonText: "List Your Property",
    imgSrc: "https://i.ibb.co/9wRXzxK/Rectangle-130-1.png",
    buttonLink: "#",
    process: [
      "Initial Consultation and Property Search",
      "Viewing and Selecting Properties",
      "Application and Lease Signing",
    ],
  },
];

export default function Services() {
  return (
    <div className="max-w-[1420px] mx-auto py-32 lg:py-[218px] px-4 overflow-hidden">
      {/* Header section */}
      <header className="flex items-center lg:justify-start justify-center gap-4 md:gap-10 mb-12 md:mb-24">
        <div
          data-aos="fade-right"
          className="bg-primary hidden lg:block w-[50px] md:w-[233px] h-[3px]"
        ></div>
        <div>
          <h1
            data-aos="fade-up"
            className="font-normal text-sm md:text-lg text-center lg:text-start"
          >
            Services
          </h1>
          <p
            data-aos="fade-up"
            className="font-bold text-3xl md:text-5xl text-center md:text-start text-primary mt-2 md:mt-3"
          >
            What We Provide
          </p>
        </div>
      </header>
      <div className="mt-10 md:mt-20">
        <div className="space-y-12">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className={`mb-8 md:mb-0 lg:flex lg:items-center justify-between gap-6 md:gap-10 lg:gap-20 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              data-aos="fade-up"
            >
              <Image
                height="513"
                width="877"
                className="rounded-lg border-2 h-auto bg-cover w-full lg:w-[60%]"
                src={property.imgSrc}
                alt="service Image"
              />
              <div className="text-left mt-4 md:mt-10 lg:mt-0 lg:w-[40%]">
                <h3 className="text-xl md:text-2xl lg:text-[32px] font-semibold text-primary">
                  {property.title}
                </h3>
                <p className="font-normal text-sm md:text-base mt-2 md:mt-3">
                  {property.subTitle}
                </p>
                <p className="font-semibold text-lg md:text-xl lg:text-2xl mt-4 md:mt-6 mb-3 md:mb-4">
                  Process
                </p>
                <div className="flex flex-col gap-2">
                  {property.process.map((step, stepIndex) => (
                    <p
                      key={stepIndex}
                      className="flex gap-2 md:gap-3 text-sm md:text-base font-normal"
                    >
                      <Image
                        height="20"
                        width="20"
                        className="rounded-lg h-[20px] w-[2-px]"
                        src="https://i.ibb.co/C2McPzx/Group-157.png"
                        alt="Process Icon"
                      />
                      {step}
                    </p>
                  ))}
                </div>
                <a
                  href={property.buttonLink}
                  className="mt-6 md:mt-8 inline-block px-4 py-2 md:px-6 md:py-3 bg-[#C17767] text-lg md:text-xl lg:text-2xl font-medium text-white rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl"
                >
                  {property.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
