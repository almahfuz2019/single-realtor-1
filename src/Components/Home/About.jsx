import Image from "next/image";
import React from "react";

export default function About() {
  // Fun facts data
  let data = [
    { id: "1", count: "15", name: "Years Of Experience" },
    { id: "2", count: "300+", name: "Property Transaction" },
    { id: "3", count: "1k+", name: "Happy Clients" },
    { id: "4", count: "1B+", name: "Net Revenue" },
  ];

  return (
    <section
      id="aboutme"
      className="max-w-[1420px] overflow-hidden mx-auto py-32 lg:py-[218px] px-4"
    >
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
            Who I Am ?
          </h1>
          <p
            data-aos="fade-up"
            className="font-bold text-3xl md:text-5xl text-center lg:text-start text-primary mt-2 md:mt-3"
          >
            About Me
          </p>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row items-start justify-center gap-10 md:gap-14 lg:gap-24 mt-10 md:mt-20">
        {/* Contact Info Section */}
        <div
          data-aos="fade-right"
          className="flex flex-col items-center md:items-start lg:w-[35%] md:w-auto"
        >
          <Image
            layout="responsive"
            height={624}
            width={527}
            className="w-full h-auto object-cover"
            src="https://i.ibb.co/tXYB8yJ/Rectangle-131.png"
            alt="Owner Image"
          />
          <div className="mt-6 text-center md:text-left">
            <p className="text-lg md:text-xl lg:text-2xl font-normal">
              <span className="font-bold">Phone:</span> (555) 123-4567
            </p>
            <p className="text-lg md:text-xl lg:text-2xl font-normal">
              <span className="font-bold">Email:</span>{" "}
              robert.pattinson@xyzrealty.com
            </p>
            <p className="text-lg md:text-xl lg:text-2xl font-normal">
              <span className="font-bold">Office Address:</span> 1234 Broadway,
              New York, NY 10001
            </p>
          </div>
        </div>

        {/* Bio Section */}
        <div className="flex-1">
          <div
            className="text-base md:text-lg lg:text-2xl font-normal text-black mb-8 md:mb-10 lg:mb-12 leading-relaxed"
            data-aos="fade-up"
          >
            My name is Robert Pattinson. I am a Real Estate Broker from New York
            City, NY. I have a Bachelor’s Degree in Business Administration from
            New York University. I started working as a real estate agent for 5
            years before becoming a licensed broker. I have been a Licensed Real
            Estate Broker in the state of New York since 2010, with 15 years of
            experience in the real estate market. I now serve as a Senior Broker
            at Lifespring Realty, a leading real estate firm in NYC.
            <br />
            <br />
            I specialize in high-end residential properties, including luxury
            apartments, townhouses, and condos. I am also experienced in
            handling commercial real estate transactions, including office
            spaces, retail properties, and mixed-use developments. I provide
            clients with in-depth market analysis and insights to make informed
            buying or selling decisions.
            <br />
            <br />
            My roles and responsibilities include:
            <ul className="list-disc pl-5 mt-2">
              <li>Client Representation</li>
              <li>Negotiation</li>
              <li>Transaction Management</li>
              <li>Marketing</li>
            </ul>
            <br />
            I have extensive knowledge of the New York City real estate market
            and strong communication skills. I am well-connected within the
            industry, with meticulous attention to detail, ensuring all aspects
            of transactions are handled effectively.
            <br />
            <br />I have been recognized as a top-performing broker with
            numerous awards for sales excellence and high client satisfaction
            rates. I am also active in the local community, participating in
            charity events and real estate associations.
          </div>
        </div>
      </div>

      {/* Fun facts section */}
      <div className="bg-primary text-white grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 justify-center py-8 rounded-br-3xl px-4 rounded-tl-3xl rounded-bl-0 rounded-tr-0 mt-10 overflow-hidden">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay={index * 100}
          >
            <h3
              className="font-bold text-3xl md:text-4xl lg:text-5xl mb-3 montserrat-font"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay={index * 100 + 200}
            >
              {item.count}
            </h3>
            <p
              className="font-normal text-base md:text-lg lg:text-2xl"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay={index * 200 + 300}
            >
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
