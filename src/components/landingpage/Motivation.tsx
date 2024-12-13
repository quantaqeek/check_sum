"use client";

import Image from "next/image";
import Testimonials from "./Testimonials";



function Motivation() {
 
  return (
    <section className="w-full min-h-screen relative bg-gray-100">
      {/* Background */}
      <div className="absolute inset-0 bg-black/50 z-10 h-full w-full" />
      <Image
        src="/assets/motivation/emoji1.jpeg"
        alt="Hero Background Dark"
        fill
        sizes="100%"
        style={{ objectFit: "cover" }}
        className="absolute"
        quality={85}
      />

      {/* Content */}
      <div className="w-full h-full relative z-20 flex flex-col items-center justify-center">
        <h1 className="text-2xl sm:text-3xl md:text-5xl text-white font-bold text-center my-4">
          TESTIMONIALS
        </h1>
        <p className="text-md text-primary-light">What people say</p>

        {/* Testimonials Section */}
        <div className="w-full flex flex-col mt-96 md:mt-32 mb-64 md:mb-24">
       
        <Testimonials/>
        </div>
      </div>
    </section>
  );
}

export default Motivation;
