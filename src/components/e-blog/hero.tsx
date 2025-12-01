"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  slideInFromLeftVariant,
  slideInFromRightVariant,
} from "@/app/animations/variants";
import {
  BiSolidQuoteSingleLeft,
  BiSolidQuoteSingleRight,
} from "react-icons/bi";
import { BlogTags } from "@/app/data";
const BlogHero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="relative min-h-screen w-full">
      <div
        ref={ref}
        className="relative w-full border-t-[1px] border-zinc-800 dark:border-zinc-50 flex flex-col md:flex-row items-center justify-between"
      >
        <motion.div
          variants={slideInFromLeftVariant}
          custom={0}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="h-full min-h-screen p-6 md:p-8 mx-auto flex flex-col justify-center max-w-full md:max-w-[50%]"
        >
          <div className="flex flex-col gap-2 ">
            <p className="text-sm font-light font-nanumMyeongjo">Bett</p>
            <p className="text-3xl sm:text-5xl font-extrabold font-momo">
              FreeSpace
            </p>
            <div className="flex flex-col relative w-full items-center  justify-center pt-8">
              <ul className="flex  flex-wrap w-full gap-2">
                {BlogTags.map((item) => (
                  <li
                    key={item.id}
                    className="items-center p-4 justify-center cursor-pointer border-2 border-primary-dark dark:border-tertiary-light rounded-[2em]"
                  >
                    <span className="px-4 py-2">{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
        <div className="w-full h-screen relative flex md:max-w-[40%] items-center justify-end">
          <Image
            alt="Mountains"
            src="/assets/blog/animebg2.png"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <motion.div
            variants={slideInFromRightVariant}
            custom={0}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col w-full h-full items-end justify-end "
          >
            <div className="bg-white text-black items-center justify-center z-10">
              <div className="p-6 flex flex-col ">
                <BiSolidQuoteSingleLeft />
                Enjoy reading get reading quotes directly to your email
                <div className="flex items-end justify-end w-full">
                  <BiSolidQuoteSingleRight />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
