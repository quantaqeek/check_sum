"use client"
import { achievements, services } from "@/app/data";
import Image from "next/image";
import { useState } from "react";

function Intro() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <section className="w-full min-h-screen">
      <div className="w-full h-full flex flex-col p-6 items-center justify-center">
        <div className="w-full relative flex items-center justify-center">
          <div className="absolute top-0 right-0 flex max-w-64 font-edu">
            <p>I believe ai & ml will transform the world</p>
          </div>
          <div className="flex absolute">
            <h3 className="text-3xl sm:text-7xl md:text-8xl lg:text-9xl text-[#B4B4B4] dark:text-primary-dark">
              AI & ML Enthusiast
            </h3>
          </div>
          <div className="flex flex-col md:flex-row">
            <Image
              src="/assets/homepage/cube-stack3.png"
              alt="ai-robot"
              width={400}
              height={400}
              style={{width: "auto", height: "auto"}}
              className=""
            />
            <Image
              src="/assets/homepage/stack-cube.png"
              alt="ai-robot"
              width={400}
              height={400}
              style={{width: "auto", height: "auto"}}
              className="z-10 grayscale dark:grayscale-0 -mb-10"
            />
          </div>
        </div>
        <article className="flex max-w-full md:max-w-[80%] z-10">
          <p className="font-nanumMyeongjo text-xl sm:text-2xl md:text-3xl lg:text-4xl capitalize">
            I have been working remotely for more than a year building{" "}
            <span className="uppercase text-BrandTertiary-dark dark:text-BrandTertiary-light">
              quality
            </span>
            products for different clients from across the world. From real-time
            applications to{" "}
            <span className="text-tertiary-dark hover:text-BrandTertiary-light font-bold">
              GIS/RS
            </span>{" "}
            projects, I have built solutions that solve complex challenges,{" "}
            <span className="uppercase text-tertiary-dark hover:text-BrandTertiary-light font-semibold">
              visualize
            </span>{" "}
            data{" "}
            <span className="uppercase text-tertiary-dark dark:text-BrandTertiary-light">
              meaningfully
            </span>
            , and bring precision to the decision-making process. I have made
            mistakes, uncovered{" "}
            <span className="uppercase text-BrandTertiary-dark dark:text-BrandTertiary-light font-bold">
              Innovative
            </span>{" "}
            solutions, aligned and sharpened to the core.
          </p>
        </article>

        <div className="w-full flex flex-col my-16 ">
          <div className="font-nanumMyeongjo">
            <ul className= {`grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3`}>
              {achievements.map((achievement, index) => (
                <li
                  key={achievement.id}
                  className={`flex rounded-lg ${index === 2 ? 'sm:col-span-2 md:col-auto':''} ${
                    index === 0
                      ? "text-background-light"
                      : "text-background-dark"
                  }`}
                  style={{ backgroundColor: achievement.bg }}
                >
                  <div className=" w-full flex items-center justify-center md:items-start p-6 flex-col gap-8">
                    <p>{achievement.title}</p>
                    <div className="flex flex-col-reverse md:flex-row items-center gap-2  font-thin text-6xl sm:text-8xl md:text-9xl">
                      <span>{achievement.scale}</span>
                      {achievement.icon}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full min-h-screen">
          <div className="w-full flex flex-col">
            <div className="w-full flex items-center justify-center px-4 py-12 sm:px-6 md:px-12">
              <h2 className="text-5xl sm:text-7xl md:text-8xl text-stone-500 dark:text-primary-dark">
                What I Do Best
              </h2>
            </div>
            <ul className="w-full flex flex-col">
              {services.map((service, index) => {
                const isHovered = hoveredIndex === index;
                return (
                  <li
                    key={index}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`w-full transition-all ease-in-out py-6 px-2 sm:px-4 md:px-8 flex gap-6 flex-col items-center justify-between ${
                      index === 1 ? "md:flex-row-reverse" : "md:flex-row"
                    } border-solid border-t-[1px] border-tertiary-dark`}
                  >
                    <div className={`flex font-roboto font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl transition-all ease-in-out  ${isHovered? "text-tertiary-dark dark:text-BrandQuaternary-dark":""}`}>
                      <h4>{service.name}</h4>
                    </div>
                    <div className={`flex flex-col gap-6 items-center md:items-start max-w-full sm:max-w-96 text-[#808000] dark:text-lime-200 md:text-primary-dark dark:md:text-primary-light font-bold md:font- ${isHovered?  "text-[#808000] font-bold dark:text-lime-200": ""}`}>
                      {service.icon}

                      <p className={` text-sm text-[#808000] dark:text-lime-200 md:text-primary-dark dark:md:text-primary-light font-bold md:font-thin   ${isHovered?  "text-[#808000] font-bold text-md transition-all ease-in-out dark:text-lime-200": ""}`}>{service.notes}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
