import Image from "next/image";
import React from "react";

const Experience = () => {
  return (
    <section className="w-full min-h-screen ">
      <div className="w-full flex flex-col justify-center items-center relative p-6">
        <article className="w-full absolute items-center mt-16 justify-center top-0 flex text-center overflow-hidden">
          <h1 className="text-7xl sm:text-8xl md:text-9xl text-tertiary-dark font-bold">
            ABOUT ME
          </h1>
        </article>
        <div className="w-full relative mt-48 flex flex-col gap-16 md:gap-2 justify-center items-center">
          <div className="w-full flex flex-col md:flex-row justify-around items-center">
            <div className="w-full mr-0 md:mr-8 lg:mr-12 max-w-full md:max-w-xl items-center justify-center border-solid border-b-[2px] md:border-r-[3px] md:border-b-[0]">
              <div className="flex flex-col gap-8 mb-16 w-full mr-0 md:mr-4 lg:mr-32">
                <div className="border-solid w-full border-l-[2px] relative flex flex-col">
                  <div className="absolute z-10 flex mt-12 left-0 bg-BrandMain-dark dark:bg-BrandMain-light">
                    <p className="text-xl sm:text-3xl font-semibold text-BrandMain-light dark:text-BrandMain-dark">
                      Education
                    </p>
                  </div>
                  <div className="flex ml-4 sm:ml-6 md:ml-10 lg:ml-12 md:w-80 lg:w-96 h-64 relative">
                    <Image
                      src="/assets/top_projects/microverse.png"
                      alt="showcase"
                      fill
                      style={{ objectFit: "cover"}} 
                      className=" absolute hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <ul className="flex flex-col w-full items-center justify-end text-2xl font-light">
                  <li className="flex flex-col font-thin">
                    <p>2023-2024</p>
                    <p className="text-sm text-BrandSecondary-dark dark:text-BrandTertiary-light">
                      Microverse Coding School
                    </p>
                  </li>
                  <li className="px-2 py-6 text-sm max-w-sm">
                    <p>
                      {" "}
                      I honed my coding skills through intensive 8-hour daily
                      sessions using various languages and frameworks. I
                      collaborated with peers on pair programming tasks and
                      worked on real-world projects to deepen my understanding.
                      Additionally, I participated in Scrum exercises, fostering
                      teamwork and agile development practices.
                    </p>
                  </li>
                </ul>
                <div></div>
              </div>
            </div>

            <div className="flex w-full">
              <div className="flex w-full flex-col gap-8 mt-32">
                <div className="flex flex-col w-full p-4 md:p-6 relative border-solid border-r-[2px]">
                  <div className="absolute z-10 flex right-0 bottom-0 mb-16 bg-BrandMain-dark dark:bg-BrandMain-light">
                    <p className="text-xl sm:text-3xl font-semibold text-BrandMain-light dark:text-BrandMain-dark">
                      EDUCATION
                    </p>
                  </div>

                  <div className="flex w-full  h-64 relative">
                    <Image
                      src="/assets/top_projects/uon.png"
                      alt="showcase"
                      fill
                      style={{ objectFit: "cover"}} 
                      className=" absolute hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end font-thin text-2xl ">
                  <p>2023-2024</p>
                </div>
                <ul className="mt-8 max-w-md text-end text-BrandSecondary-dark dark:text-BrandTertiary-light">
                  <li className="">
                    <p className="text-xl font-semibold">
                      {" "}
                      Bachelor of Science, Geospatial Engineering
                    </p>
                  </li>
                  <li className="text-xl font-semibold">
                    <p>University of Nairobi, Kenya</p>
                  </li>
                  <li className="text-xl font-semibold">
                    <p> Second Class Upper Division</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <ul className="w-full flex flex-col gap-8 relative">
            <li className="flex flex-col w-full ml-0 items-center md:items-start justify-center md:justify-end">
              <div className="w-full flex flex-col md:flex-row gap-4 border-solid border-l-[2px] relative">
                <div className="absolute z-10 flex left-0 mt-12 bg-BrandMain-dark dark:bg-BrandMain-light ">
                  <p className="text-xl sm:text-3xl font-semibold text-BrandMain-light dark:text-BrandMain-dark">
                    EXPERIENCE
                  </p>
                </div>
                <div className="md:w-80 h-64 ml-2 sm:ml-4 md:ml-8 lg:ml-12 relative">
                  <Image
                    src="/assets/top_projects/office.png"
                    alt="showcase"
                    fill
                    style={{ objectFit: "cover"}} 
                    className=" absolute hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-2xl font-light">
                <p>2023 -2024</p>
                <p className="text-sm text-BrandSecondary-light">
                  Microverse Coding School
                </p>
              </div>
              <article className="flex px-2 py-6 text-sm font-light max-w-sm">
                <p>
                  {" "}
                  Conducted thorough code reviews, ensuring high-quality code
                  and adherence to best practices. My commitment to code quality
                  earned me recognition, including a star on GitHub for my
                  contributions.
                </p>
              </article>
            </li>
            <li className="w-full flex gap-6 flex-col-reverse md:flex-row">
              <div className="w-full flex flex-col items-center justify-center border-solid  md:border-r-[3px] md:border-b-[0]">
                <div className="w-full flex flex-col gap-4 border-solid border-l-[2px] relative p-0 md:p-8">
                  <div className="absolute flex left-0 z-10 mt-12 bg-BrandMain-dark dark:bg-BrandMain-light">
                    <p className="text-xl sm:text-3xl text-semibold text-BrandMain-light dark:text-BrandMain-dark">
                      EXPERIENCE
                    </p>
                  </div>
                  <div className="flex ml-2 md:w-64 lg:w-96 h-64 relative">
                    <Image
                      src="/assets/top_projects/gis.png"
                      alt="showcase"
                      fill
                      style={{ objectFit: "cover"}} 
                      className=" absolute hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center text-2xl font-light">
                    <p>2023 - 2024</p>
                    <p className="text-xl font-semibold text-BrandSecondary-dark dark:text-BrandTertiary-light">
                      GIS & REMOTE SENSING ANALYST
                    </p>
                    <p className="text-sm text-BrandTertiary-dark">
                      Locate IT Inc.
                    </p>
                  </div>
                </div>
                <div className="py-6 flex max-w-md">
                  <p className="px-2 text-sm max-w-sm font-light">
                    Specialized in spatial data analysis, satellite imagery
                    processing, and geospatial modeling to support
                    decision-making. Responsibilities included generating maps
                    and visualizations, managing geodatabases, and delivering
                    tailored geospatial solutions for environmental monitoring,
                    urban planning, and land use projects. Collaborated with
                    cross-functional teams to meet client needs effectively.
                  </p>
                </div>
              </div>

              <div className="w-full flex flex-col mt-0 md:-mt-64 lg:-mt-72 border-solid mb-8 md:mb-0 border-b-[2px] md:border-b-[0]">
                <div className="flex w-full border-solid border-r-[2px] p-4 md:p-6 relative">
                  <div className="absolute z-10 flex right-0 mt-12 bg-BrandMain-dark dark:bg-BrandMain-light">
                    <p className="text-xl sm:text-3xlfont-semibold text-BrandMain-light dark:text-BrandMain-dark">
                      VOLUNTEERING
                    </p>
                  </div>
                  <div className="flex w-full h-64 relative">
                    <Image
                      src="/assets/top_projects/ict.png"
                      alt="showcase"
                      fill
                      style={{ objectFit: "cover"}} 
                      className=" absolute hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className=" flex items-center justify-end font-thin text-2xl ">
                  <p>2023-2024</p>
                </div>
                <ul className=" my-8 text-end">
                  <li className="text-xl font-semibold text-BrandSecondary-dark dark:text-BrandTertiary-light">
                    <p>ICT OFFICE ASSISTANT</p>
                  </li>
                  <li className="text-xl font-semibold text-BrandSecondary-dark">
                    <p>Glen Co Inc.</p>
                  </li>
                  <li className="text-sm flex items-start text-start justify- font-thin">
                    <p className="max-w-md">
                      Developed and maintained mobile and web applications to
                      support company operations. Performed daily ICT tasks,
                      including system maintenance, troubleshooting, and
                      ensuring optimal functionality of IT infrastructure.
                    </p>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
