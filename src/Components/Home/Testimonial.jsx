"use client";
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
      "(max-width: 600px)": {
        slides: {
          perView: 1,
          spacing: 5,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const testimonials = [
    {
      id: 1,
      quote:
        "Robert Pattinson exceeded our expectations in every way. From our initial consultation to the closing of our condo, he provided exceptional service and guidance. His attention to detail and commitment to our satisfaction were evident throughout the entire process. Robert's marketing strategies were top-notch, and our property sold quickly at a great price. We couldn't be happier with the outcome and will definitely work with Robert again in the future.",
      clientName: "Linda Mitchell",
      clientImage: "https://i.ibb.co/Wc4kXbM/Ellipse-8.png",
      clientTitle: "Happy Client",
    },
    {
      id: 2,
      quote:
        "Working with Robert Pattinson was an absolute pleasure. His expertise and dedication made the process of buying our first home seamless and stress-free. Robert's !”",
      clientName: "John Doe",
      clientImage: "https://i.ibb.co/Wc4kXbM/Ellipse-8.png",
      clientTitle: "Satisfied Buyer",
    },
    {
      id: 3,
      quote:
        "As an investor, I've worked with several real estate brokers, but Robert Pattinson stands out as the best. His deep understanding of the commercial real estate market and his strategic approach helped us secure a fantastic deal on a new office space. Robert is always available to answer questions and provide valuable insights. His professionalism and dedication are truly commendable. I look forward to many more successful transactions with Robert.",
      clientName: "Jane Smith",
      clientImage: "https://i.ibb.co/Wc4kXbM/Ellipse-8.png",
      clientTitle: "Content Renter",
    },
    {
      id: 4,
      quote:
        "Robert Pattinson exceeded our expectations in every way. From our initial consultation to the closing of our condo, he provided exceptional service and guidance. His attention to detail and commitment to our satisfaction were evident throughout the entire process. Robert's marketing strategies were top-notch, and our property sold quickly at a great price. We couldn't be happier with the outcome and will definitely work with Robert again in the future.",
      clientName: "Emily Davis",
      clientImage: "https://i.ibb.co/Wc4kXbM/Ellipse-8.png",
      clientTitle: "Happy Seller",
    },
    {
      id: 5,
      quote:
        "Robert Pattinson exceeded our expectations in every way. From our initial consultation to the closing of our condo, he provided exceptional service and guidance. His attention to detail and commitment to our satisfaction were evident throughout the entire process. Robert's marketing strategies were top-notch, and our property sold quickly at a great price. We couldn't be happier with the outcome and will definitely work with Robert again in the future.",
      clientName: "Michael Johnson",
      clientImage: "https://i.ibb.co/Wc4kXbM/Ellipse-8.png",
      clientTitle: "Pleased Homeowner",
    },
    {
      id: 6,
      quote:
        "Robert Pattinson exceeded our expectations in every way. From our initial consultation to the closing of our condo, he provided exceptional service and guidance. His attention to detail and commitment to our satisfaction were evident throughout the entire process. Robert's marketing strategies were top-notch, and our property sold quickly at a great price. We couldn't be happier with the outcome and will definitely work with Robert again in the future.",
      clientName: "Sarah Williams",
      clientImage: "https://i.ibb.co/Wc4kXbM/Ellipse-8.png",
      clientTitle: "Grateful Buyer",
    },
    {
      id: 7,
      quote:
        "Robert Pattinson exceeded our expectations in every way. From our initial consultation to the closing of our condo, he provided exceptional service and guidance. His attention to detail and commitment to our satisfaction were evident throughout the entire process. Robert's marketing strategies were top-notch, and our property sold quickly at a great price. We couldn't be happier with the outcome and will definitely work with Robert again in the future.",
      clientName: "David Brown",
      clientImage: "https://i.ibb.co/Wc4kXbM/Ellipse-8.png",
      clientTitle: "Content Seller",
    },
  ];

  return (
    <div className="bg-[#FBF4EE]">
      <section className="max-w-[1420px] overflow-hidden mx-auto py-32 lg:py-[218px] px-4">
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
              Testimonial
            </h1>
            <p
              data-aos="fade-up"
              className="font-bold text-center lg:text-start text-5xl text-primary mt-3"
            >
              Clients Review
            </p>
          </div>
        </header>

        {/* Testimonials Section */}
        <div data-aos="fade-up" className="relative">
          <div ref={sliderRef} className="keen-slider mt-10">
            {testimonials.map((data) => (
              <div
                key={data.id}
                className="keen-slider__slide bg-secondary text-white rounded-2xl p-[20px] md:p-[40px] flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-center items-center mb-4">
                    <Image
                      height="78"
                      width="31"
                      src="https://i.ibb.co/HD8xtvQ/1.png"
                      alt="quote"
                    />
                  </div>
                  <p>{data.quote}</p>
                </div>
                <div>
                  <div className="divider h-[2px] bg-primary my-4"></div>
                  <div className="flex justify-center items-center gap-4 md:gap-6">
                    <Image
                      height="60"
                      width="60"
                      className="rounded-full"
                      src={data.clientImage}
                      alt="client"
                    />
                    <div>
                      <p className="text-sm md:text-base text-justify text-white font-semibold">
                        {data.clientName}
                      </p>
                      <p className="text-sm md:text-base text-justify text-white font-normal">
                        {data.clientTitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <br /><br />
          <br /><br />
          {loaded && instanceRef.current && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {Array.from({
                length: instanceRef.current.track.details.slides.length,
              }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === idx ? "bg-primary" : "bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
