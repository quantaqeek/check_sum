import { Projects } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SelectedWorks = () => {
  return (
    <section className="w-full">
      <div className="w-full flex flex-col min-h-screen items-center justify-center">
        {/* Header Section */}
        <div className="flex flex-col min-h-80 w-full items-center justify-center text-center">
          <p className="text-2xl font-semibold text-tertiary-dark">
            Passionately crafted experiences
          </p>
          <h3 className="text-4xl font-bold font-anton">Featured Works</h3>
        </div>

        {/* Projects Grid */}
        <ul className="w-full grid grid-cols-1 md:grid-cols-2  items-center border-solid border-b-[1px] justify-items-center place-content-center">
          {Projects.map((project, index) => {
            return (
              <li
                key={index}
                className={`flex  flex-col w-full items-center justify-center border-solid border-t-[1px] ${
                  index % 2 === 0 ? "md:border-r-[1px]" : "border-r-[0px]"
                }`}
              >
                <div className="p-6 flex flex-col gap-4 w-full">
                  <div className="flex h-96 w-full relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="100%"
                      style={{ objectFit: "cover"}} 
                      className="rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
                    />
                  </div>
                  <figcaption className="flex flex-col gap-2 text-center md:text-start cursor-pointer">
                    <ul className="w-full flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <li key={tag} className="border-dashed border-[1px]">
                          <p className="px-2 py-1">{tag}</p>
                        </li>
                      ))}
                    </ul>
                    <Link href={project.link} target="_blank" rel="noopener noreferrer">
                      <h4 className="text-2xl font-semibold hover:text-BrandTertiary-light dark:hover:text-BrandMain-light">
                        {project.name}
                      </h4>
                      <p className="text-TextTertiary-light hover:underline">
                        {project.descp}
                      </p>
                    </Link>
                  </figcaption>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="w-full min-h-72 flex flex-col md:flex-row justify-around items-center">
          <div className="flex flex-col gap-8 p-6 items-center">
            <article className="flex flex-col">
              <p className="text-3xl font-semibold text-secondary-dark dark:text-secondary-light ">
                Have a <span className="underline">question </span> or an{" "}
                <span className="underline">idea </span> about a project? <br />{" "}
                Chat me on{" "}
                <span className="font-bold text-BrandPrimary-dark dark:text-BrandPrimary-light">
                  Email
                </span>{" "}
                or?
              </p>
            </article>

            <ol className="flex flex-col gap-2 uppercase text-3xl font-anton font-bold">
              <li>LinkedIn</li>
              <li>WhatsApp</li>
              <li>Twitter</li>
            </ol>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/images/about/bulbGear.png"
              alt="animation"
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectedWorks;
