"use client"

import { slideInFromLeftVariant, slideInFromRightVariant } from "@/app/animations/variants";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const ServicesHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="flex flex-col w-full items-center min-h-screen font-roboto">
      <section className="w-full  flex flex-col mt-24">

      <div className="absolute inset-0 -z-10 h-full w-full">

        <Image
          src="/images/about/hero2.png"
          alt="Hero Background Dark"
          fill
          sizes="100%"
          style={{ objectFit: "contain" }}
          className="hidden dark:block"
          priority
          quality={85}
        />
        <Image
          src="/images/about/hero1.png"
          alt="Hero Background Light"
          fill
          sizes="100vw"
          style={{ objectFit: "contain" }}
          className="block dark:hidden"
          quality={85}
        />
      </div>

        <div ref={ref} className="w-full min-h-screen relative flex flex-col md:flex-row justify-center md:justify-between items-center">
          <motion.article variants={slideInFromLeftVariant} custom={0} initial="hidden" animate={isInView ? "visible" : "hidden"} className="flex flex-col items-center justify-center p-6">
            <p className="font-bold font-anton text-3xl md:text-7xl lg:text-8xl">
              Work in
              <span className="text-tertiary-dark dark:text-BrandMain-light text-5xl md:text-7xl lg:text-9xl">
                {" "}
                Progress
              </span>
            </p>
          </motion.article>
          <motion.article variants={slideInFromRightVariant} custom={0} initial="hidden" animate={isInView ? "visible" : "hidden"} className="flex flex-col items-end justify-center p-6">
            <p className="font-semibold font-nanumMyeongjo text-xl sm:text-2xl md:text-4xl">
              <span className="text-TextTertiary-dark dark:text-tertiary-dark">Email: </span>bettenoch@gmail.com <br/>
              <span className="text-TextTertiary-dark dark:text-tertiary-dark">Phone Number: </span> +254711996874
            </p>

          </motion.article>
        </div>
      </section>
    </div>
  );
};

export default ServicesHero;
