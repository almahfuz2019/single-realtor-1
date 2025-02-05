import About from "@/Components/Home/About";
import Contact from "@/Components/Home/Contact";
import Featured from "@/Components/Home/Featured";
import Hero from "@/Components/Home/Hero";

import Services from "@/Components/Home/Services";
import Testimonial from "@/Components/Home/Testimonial";
import Animation from "@/Components/Shared/Animation";
import Image from "next/image";
import topArrowIcon from "../../public/Images/topArrowIcon.png";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <Animation />
      {/* navigation icon  */}
      <a
        href="#home"
        className="fixed bottom-0 right-0 mb-4 mr-4 z-50 cursor-pointer"
      >
        <Image
          height="60"
          width="60"
          src={topArrowIcon}
          alt="Navigation Image"
          className="h-[50px] w-auto md:h-auto bg-[#F7EAD9] rounded-full p-0.5 transition-all"
        />
      </a>
      <Hero />
      <Services />
      <Featured />
      <About />
      <Contact />
      <Testimonial />
    </div>
  );
}
