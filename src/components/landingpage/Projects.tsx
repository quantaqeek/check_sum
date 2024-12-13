"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const images = [
  {
    id: 1,
    src: "/assets/projects/project1.jpg",
    span: "col-span-2 row-span-3",
    text: "PDF ANALYSER (RAG APP)",
    descp:
      "Analyze PDFs with AI-driven RAG, using Llama Index for relevant context retrieval.",
  },
  {
    id: 2,
    src: "/assets/projects/project2.jpg",
    span: "col-span-1 row-span-2",
    text: "REAL TIME CHAT BOT(FETCHIT APP)",
    descp:
      "AI chatbot for real-time interactions, leveraging Botpress and Django for automation.",
  },
  {
    id: 3,
    src: "/assets/projects/project7.jpg",
    span: "col-span-1 row-span-2",
    text: "Carbon FootPrint Calculator",
    descp:
      "Calculate carbon footprints, promoting sustainability with easy user inputs.",
  },
  {
    id: 4,
    src: "/assets/projects/project4.jpg",
    span: "col-span-2 row-span-2",
    text: "HOUSING PRICES PREDICTION",
    descp:
      "Predict housing prices using machine learning with Scikit-Learn and TensorFlow.",
  },
  {
    id: 5,
    src: "/assets/projects/project5.jpg",
    span: "col-span-1 row-span-3",
    text: "County Information Development System(CDIS)",
    descp:
      "Manage county data with GIS tools, leveraging Geodjango and LeafletJS for mapping.",
  },
  {
    id: 6,
    src: "/assets/projects/project6.jpg",
    span: "col-span-2 row-span-2",
    text: "E-COMMERCE MOBILE APP",
    descp:
      "Flutter-based app for local businesses, with Firebase for real-time orders.",
  },
];

const Projects = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  const handleTouchStart = (index: number) => {
    setHoverIndex(index);
  };

  const handleTouchEnd = () => {
    setHoverIndex(null);
  };

  return (
    <section className="w-full min-h-screen flex flex-col gap-8 text-center">
      <div className="w-full flex items-center justify-center mt-24">
        <h2 className="text-5xl sm:text-7xl md:text-8xl text-stone-500 dark:text-primary-dark">
          Selected Projects
        </h2>
      </div>
      <div className="w-full h-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-0 lg:h-[800px] overflow-clip">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`project-detail relative cursor-pointer ${image.span} overflow-hidden`}
            onMouseEnter={() => handleMouseEnter(index)} // Handle hover for desktop
            onMouseLeave={handleMouseLeave} // Handle mouse leave for desktop
            onTouchStart={() => handleTouchStart(index)} // Handle touch start for mobile
            onTouchEnd={handleTouchEnd} // Handle touch end for mobile
          >
            {/* Image */}
            <div className="aspect-square md:aspect-video relative">
              <Image
                src={image.src}
                alt={`Project ${image.id}`}
                fill
               
                style={{ objectFit: "cover", width: "100%"}} 
                className="hover:scale-105 transition-transform duration-300 grayscale"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center transition-colors duration-300">
              {/* Title */}
              <Link href={"/about"}>
                <motion.p
                  className={`text-white text-3xl sm:text-lg md:text-3xl font-bold ${
                    hoverIndex === index
                      ? "text-BrandSecondary-light"
                      : "text-primary-light"
                  } transition-colors duration-300`}
                >
                  {image.text}
                </motion.p>
              </Link>

              {/* Description */}
              <motion.div
                className="p-2 text-sm text-center text-white overflow-hidden"
                initial={{ y: "100%", opacity: 0 }}
                animate={
                  hoverIndex === index
                    ? { y: "0%", opacity: 1 }
                    : { y: "100%", opacity: 0 }
                }
                transition={{ type: "tween", duration: 0.4 }}
              >
                <p>{image.descp}</p>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
