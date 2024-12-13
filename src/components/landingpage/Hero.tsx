"use client";

import Image from "next/image";
import { motion, AnimatePresence,  } from "framer-motion";
import { useState, useEffect, } from "react";
import { LuBadgeCheck } from "react-icons/lu";
import { TiTickOutline } from "react-icons/ti";
import Link from "next/link";


const services = ["WEB3", "MLOPS", "AI", "GIS", "MOBILEDEV"];

export default function Hero() {
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full">
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src="/assets/homepage/ModernDark4.webp"
          alt="Hero Background Dark"
          fill
          sizes="100%"
          style={{ objectFit: "cover" }}
          className="hidden dark:block"
          priority
          quality={85}
        />
        <Image
          src="/assets/homepage/modernLight.webp"
          alt="Hero Background Light"
          fill
          sizes="100%"
          style={{ objectFit: "cover" }}
          className="block dark:hidden"
         
          quality={85}
        />
      </div>

      <div className="absolute inset-0 bg-transparent dark:bg-black/10" />
      <div className="relative w-full p-8 mx-auto flex flex-col md:flex-row items-center justify-between">
        <ul className="flex flex-col gap-4 mt-12">
          <li
          
            className="font-anton text-[20px] text-TextTertiary-dark"
          >
            <strong>Welcome</strong>
          </li>
          <li>
            <ul className="flex flex-col">
              <li
              
                className="text-TextTertiary-dark text-[12px]"
              >
                <p>Hi There!, This is</p>
              </li>
              <li
               
                className="font-edu text-3xl mb-6"
              >
                <strong>
                  Bett k. <span>Enoch</span>
                </strong>
              </li>
              <li
          
                className="flex flex-col font-anton text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold"
              >
                <h1>I DESIGN</h1>
                <h2>FOR BUSINESS</h2>
              </li>

              <li
    
                className="service-text text-BrandMain-dark dark:text-BrandMain-light text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentServiceIndex}
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: "100%", opacity: 0 }}
                    transition={{ duration: 1 }}
                  >
                    {services[currentServiceIndex]}
                  </motion.div>
                </AnimatePresence>
              </li>
            </ul>
          </li>
        </ul>

        <div className="mt-12 flex flex-col gap-8 max-w-full md:max-w-[30%]">
          <ul className="text-xl font-thin border-solid border-t-2 border-b-2 border-TextTertiary-dark">
            <li className="items-center flex">
              <LuBadgeCheck />
              <p>Website Design</p>
            </li>
            <li className="items-center flex">
              <LuBadgeCheck />
              <p>Product Design</p>
            </li>
            <li className="items-center flex">
              <LuBadgeCheck />
              <p>Branding & Strategy</p>
            </li>
          </ul>

          <div className="w-full flex flex-col gap-8">
            <Link href={"/contact"}>
              <div className="w-full flex items-center justify-between">
                <div className="cursor-pointer text-TextTertiary-dark text-2xl font-semibold underline hover:text-BrandSecondary-dark dark:hover:text-BrandPrimary-light">
                  <p>How can I help</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </Link>
            <ul className="cursor-pointer list-disc text-md font-thin border-solid border-t-2 border-b-2 border-TextTertiary-dark">
              <li className="text-tertiary-dark items-center flex hover:text-BrandSecondary-dark dark:text-BrandFancy-light">
                <TiTickOutline />
                <p>Marketing & Sales</p>
              </li>
              <li className="text-tertiary-dark items-center flex hover:text-BrandSecondary-dark dark:text-BrandFancy-light">
                <TiTickOutline />
                <p>Geo Location Mapping</p>
              </li>
              <li className="text-tertiary-dark items-center flex hover:text-BrandSecondary-dark dark:text-BrandFancy-light">
                <TiTickOutline />
                <p>Photography</p>
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col">
            <article className="font-edu text-md">
              I am a self-motivated developer eager to bring solutions to your
              table. I work with different clients from across the globe to
              transform their ideas into actionable results. You can be part of
              this!
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
