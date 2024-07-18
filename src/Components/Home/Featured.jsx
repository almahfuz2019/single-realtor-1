"use client";
import Image from "next/image";
import React from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
const cardData = {
  forBuy: [
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
  ],
  forSell: [
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
  ],
  forRent: [
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
    {
      name: "Sarah Avenue",
      price: "$40,533",
      address: "Downtown, W/55 street, Toronto",
      beds: 2,
      baths: 3,
      measurement: 430,
      imgSrc: "https://i.ibb.co/ys3rmVZ/Rectangle-122.png",
    },
  ],
};
export default function Featured() {
  return (
    <div className="bg-[#F7EAD980]">
      <section className="max-w-[1420px] overflow-hidden mx-auto py-32 lg:py-[218px] px-4 ">
        {/* Header section */}
        <header className="flex items-center lg:justify-start justify-center gap-10 mb-24">
          <div
            data-aos="fade-right"
            className="bg-primary hidden lg:block w-[233px] h-[3px]"
          ></div>
          <div>
            <h1
              data-aos="fade-up"
              className="font-normal text-sm text-center lg:text-start"
            >
              Condos
            </h1>
            <p
              data-aos="fade-up"
              className="font-bold  text-center lg:text-start md:text-5xl text-primary mt-3 text-3xl"
            >
              Featured Listing
            </p>
          </div>
        </header>
        {/* contents  */}
        <div className=" mx-auto mt-20">
          <Tabs>
            <TabList
              data-aos="fade-up"
              className="flex lg:space-x-4 text-xl md:text-[28px] font-semibold text-[#6897BB]  mb-10"
            >
              <Tab
                selectedClassName="border-b-2 border-primary"
                className="px-4 py-2 cursor-pointer border-b-2  hover:border-primary border-transparent"
              >
                For Buy
              </Tab>
              <Tab
                selectedClassName="border-b-2 border-primary"
                className="px-4 py-2 cursor-pointer border-b-2  hover:border-primary border-transparent"
              >
                For Sell
              </Tab>
              <Tab
                selectedClassName="border-b-2 border-primary"
                className="px-4 py-2 cursor-pointer border-b-2  hover:border-primary border-transparent"
              >
                For Rent
              </Tab>
            </TabList>

            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                {cardData.forBuy.map((card, index) => (
                  <div
                    key={index}
                    className=" rounded-lg  overflow-hidden "
                    data-aos="fade-up"
                  >
                    <Image
                      src={card.imgSrc}
                      alt={card.name}
                      width={300}
                      height={200}
                      className="w-full h-auto mb-4"
                    />
                    <div className="p-6 flex flex-col gap-5">
                      <div className="flex justify-between items-center text-base text-black font-normal">
                        <h3 className=" font-medium text-2xl lg:text-[32px]">
                          {card.name}
                        </h3>
                        <p className="text-red-600  font-medium text-2xl lg:text-[32px]">
                          {card.price}
                        </p>
                      </div>
                      <p className="text-base md:text-xl">{card.address}</p>
                      <p className="text-base md:text-xl mt-[-10px] md:mt-0">
                        {card.beds} Beds | {card.baths} Baths |{" "}
                        {card.measurement} Sq/Ft
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                {cardData.forSell.map((card, index) => (
                  <div
                    key={index}
                    className=" rounded-lg  overflow-hidden "
                    data-aos="fade-up"
                  >
                    <Image
                      src={card.imgSrc}
                      alt={card.name}
                      width={300}
                      height={200}
                      className="w-full h-auto mb-4"
                    />
                    <div className="p-6 flex flex-col gap-5">
                      <div className="flex justify-between items-center text-base text-black font-normal">
                        <h3 className=" font-medium text-2xl lg:text-[32px]">
                          {card.name}
                        </h3>
                        <p className="text-red-600  font-medium text-2xl lg:text-[32px]">
                          {card.price}
                        </p>
                      </div>
                      <p className="text-base md:text-xl">{card.address}</p>
                      <p className="text-base md:text-xl mt-[-10px] md:mt-0">
                        {card.beds} Beds | {card.baths} Baths |{" "}
                        {card.measurement} Sq/Ft
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                {cardData.forRent.map((card, index) => (
                  <div
                    key={index}
                    className=" rounded-lg  overflow-hidden "
                    data-aos="fade-up"
                  >
                    <Image
                      src={card.imgSrc}
                      alt={card.name}
                      width={300}
                      height={200}
                      className="w-full h-auto mb-4"
                    />
                    <div className="p-6 flex flex-col gap-5">
                      <div className="flex justify-between items-center text-base text-black font-normal">
                        <h3 className=" font-medium text-2xl lg:text-[32px]">
                          {card.name}
                        </h3>
                        <p className="text-red-600  font-medium text-2xl lg:text-[32px]">
                          {card.price}
                        </p>
                      </div>
                      <p className="text-base md:text-xl">{card.address}</p>
                      <p className="text-base md:text-xl mt-[-10px] md:mt-0">
                        {card.beds} Beds | {card.baths} Baths |{" "}
                        {card.measurement} Sq/Ft
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
