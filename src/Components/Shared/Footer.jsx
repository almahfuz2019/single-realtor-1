import Image from "next/image";
import React from "react";
// images
import { ImFacebook, ImTwitter } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import footerImage from "../../../public/Images/FooterImage.png";
import locationIcon from "../../../public/Images/locationIcon.png";
import emailIcon from "../../../public/Images/emailIcon.png";
import callIcon_Footer from "../../../public/Images/CallIcon_Footer.png";

export default function Footer() {
  return (
    <footer className="bg-primary font-montserrat overflow-hidden ">
      <div className="max-w-[1420px] py-16 mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 gap-16 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
            {/* Contact Information */}
            <section data-aos="fade-right">
              <h2 className="font-semibold text-3xl sm:text-4xl lg:text-4xl playfair-display-font mb-6 lg:mb-10">
                Robert Pattinson
              </h2>
              <p className="text-xl font-weight-400 text-[#FFFFFFCC]">
                Real Estate Professional
              </p>
              <h3 className="font-semibold text-2xl mt-10 font-open-sans">
                Contact Us
              </h3>
              <div className="mt-5 flex flex-col gap-4 montserrat-font">
                {[
                  {
                    src: callIcon_Footer,
                    text: "(555) 123-4567",
                    alt: "Phone",
                  },
                  {
                    src: emailIcon,
                    text: "pattinson@realty.com",
                    alt: "Email",
                  },
                  {
                    src: locationIcon,
                    text: "1234 Broadway, New York, NY 10001",
                    alt: "Address",
                  },
                ].map(({ src, text, alt }, index) => (
                  <div key={index} className="flex items-center gap-x-4">
                    <div className="bg-secondary rounded p-1.5">
                      <Image src={src} height="24" width="24" alt={alt} />
                    </div>
                    <p className="text-lg">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Useful Links */}
            <section data-aos="fade-up">
              <h2 className="font-semibold text-3xl sm:text-4xl lg:text-4xl playfair-display-font mb-6 lg:mb-10">
                Useful Links
              </h2>
              {[
                "Home",
                "Services",
                "Featured Listing",
                "About Me",
                "Testimonial",
                "Contact Us",
              ].map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-xl md:text-2xl font-weight-400 montserrat-font text-white mb-2"
                >
                  {link}
                </a>
              ))}
            </section>
          </div>

          {/* Additional Links */}
          <section data-aos="fade-left">
            <h2 className="font-semibold text-3xl sm:text-4xl lg:text-4xl playfair-display-font mb-6 lg:mb-10">
              Just a click could lead to a wonderful World like this -
            </h2>
            <div>
              <Image
                src={footerImage}
                width="747"
                height="224"
                alt="World"
                className="w-full h-auto"
              />
            </div>
          </section>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="bg-[#F7EAD9] py-4">
        <div className="max-w-[1420px] mx-auto px-4 flex flex-col lg:flex-row items-center lg:justify-between text-secondary">
          {/* Social Media Links */}
          <ul className="menu menu-horizontal px-1 flex mb-4 lg:mb-0">
            <li>
              <a
                href="https://www.facebook.com/" // Replace with your actual Facebook profile URL
                className="text-secondary text-xl hover:scale-110 hover:bg-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImFacebook className="text-white bg-secondary h-[32px] p-1 rounded w-[32px]" />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/" // Replace with your actual Twitter profile URL
                className="text-secondary text-xl hover:scale-110 hover:bg-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImTwitter className="text-white bg-secondary h-[32px] p-1 rounded w-[32px]" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/" // Replace with your actual Instagram profile URL
                className="text-secondary text-xl hover:scale-110 hover:bg-none"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-white bg-secondary h-[32px] p-1 rounded w-[32px]" />
              </a>
            </li>
          </ul>

          {/* Footer Text */}
          <div className="text-center lg:text-left text-black">
            <p className="text-base font-weight-400 montserrat-font">
              Webflow Template by{" "}
              <a href="http://techplato.com" className="font-medium">
                TECHPLATO.Inc
              </a>
            </p>
            <p className="text-base font-weight-400 montserrat-font">
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
