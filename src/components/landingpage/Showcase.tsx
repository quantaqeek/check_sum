"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Showcase = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="w-full flex flex-col px-6 bg-BrandQuaternary-light dark:bg-BrandQuaternary-dark">
        <div className="w-full flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col text-background-dark items-start gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
            <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl flex text-wrap sm:font-3xl  mb-8 font-bold">
              SMART INNOVATIONS
            </h2>

            <div className="w-full flex gap-4 mb-8 flex-col justify-between sm:flex-row">
              {["GRIT", "DETERMINATION"].map((text, index) => (
                <motion.div
                  key={index}
                  className="flex w-full border-solid border-[1px] border-stone-900 items-center justify-center rounded-lg overflow-hidden"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <motion.button
                    className="relative flex items-center justify-center w-full h-full px-4 py-6 bg-transparent"
                    variants={{
                      rest: { backgroundColor: "transparent" },
                      hover: { backgroundColor: "#F7FFEE" }, // Yellow
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.p
                      className="absolute text-white"
                      variants={{
                        rest: { opacity: 1, y: 0 },
                        hover: { opacity: 0, y: -10 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {text}
                    </motion.p>
                    <motion.p
                      className="absolute text-black"
                      variants={{
                        rest: { opacity: 0, y: 10 },
                        hover: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {text}
                    </motion.p>
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex flex-col max-w-full md:max-w-[40%] items-center justify-center">
            <div className=" p-4 mb-6  w-full h-64 bg-transparent">
              <div className="relative clip-customShape w-full h-full">
                <Image
                  src="/assets/showcase/light-bulb.jpg"
                  alt="showcase"
                  fill
                  style={{ objectFit: "cover" }}
                  className=" absolute hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="flex mb-6 py-4">
              <p className="text-md font-nanumMyeongjo text-tertiary-dark font-light">
                With a focus on meaningful results, I&apos;m here to bring your
                unique vision to life through custom solutions and a
                user-centered approach.Got a project in mind? Im here to help!!
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center relative  grayscale">
          <div className="flex w-[90%] relative min-h-64  rounded-t-[5em] items-center justify-center">
            <div className="absolute z-10 top-0 right-0 text-7xl  bg-stone-50 dark:bg-stone-800 text-stone-800 dark:text-stone-200 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-16 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                />
              </svg>
            </div>
            <Image
              src="/assets/showcase/emptyRoad.jpg"
              alt="showcase"
              fill
              style={{ objectFit: "cover" }}
              className="absolute rounded-t-[5em]  h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
