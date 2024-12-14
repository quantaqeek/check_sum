"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  slideInFromLeftVariant,
  slideInFromRightVariant,
} from "@/app/animations/variants";
const AboutHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="relative min-h-screen w-full">
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
          sizes="100%"
          style={{ objectFit: "contain" }}
          className="block dark:hidden"
         
          quality={85}
        />
      </div>
      <div
        ref={ref}
        className="relative w-full overflow-hidden mt-16 p-6 md:p-8 mx-auto flex flex-col-reverse md:flex-row items-center justify-between"
      >
        <motion.div
          variants={slideInFromLeftVariant}
          custom={0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-start mt-32 justify-center max-w-full md:max-w-[40%]"
        >
          <p className="text-3xl sm:text-5xl font-extrabold font-roboto dark:text-primary-light">
            From <span className="text-TextTertiary-dark">Web Solutions</span>{" "}
            to{" "}
            <span className="text-TextTertiary-dark">Geospatial Systems</span>{" "}
            and,{" "}
            <span className="text-TextTertiary-dark">AI-driven Inovations</span>{" "}
            I bring <span className="underline">visions</span> and{" "}
            <span className="underline">ideas</span> to life.
          </p>
        </motion.div>
        <motion.div
          variants={slideInFromRightVariant}
          custom={0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col w-full h-full md:max-w-60% "
        >
          <div className="flex flex-col relative w-full items-center  justify-center ">
            <Image
              src="/assets/profile/prof001.png"
              alt="Hero Background Dark"
              width={600}
              height={300}
              priority
              quality={85}
            />
            <article className=" absolute bottom-0 left-0 items-center">
              <p className="font-anton text-2xl sm:text-5xl md:text-8xl font-extrabold text-tertiary-dark">
                BKE
              </p>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
