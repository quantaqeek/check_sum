import React from "react";
import InfiniteCarousel from "../common/InfiniteCarousel";
import Image from "next/image";

const Highlights = () => {
  return (
    <section className="w-full min-h-screen">
      <div className="w-full  flex flex-col mt-32">
        <article className="w-full p-6 flex justify-center items-center">
          <p className="font-semibold text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-relaxed">
            What I am <br />
            <span className="inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-16 sm:size-24 md:size-32"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                />
              </svg>
            </span>
            Good At
          </p>
        </article>
        <div className="py-6 min-h-48 border-solid border-y-[1px] border-TextTertiary-light  relative  flex flex-col justify-center  overflow-hidden">
          <InfiniteCarousel />
        </div>
        <ul className="grid w-full  border-solid border-b-[1px] border-TextTertiary-light grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-stretch">
          <li className="min-h-80 flex w-full items-center justify-center border-solid border-b-[1px] sm:border-r-[1px] md:border-r-[1px] md:border-b-[0px] border-TextTertiary-light ">
            <Image
              src="/images/about/piechart2.png"
              alt="piechart"
              width={200}
              height={200}
              style={{width: "auto", height: "auto"}}
            />
          </li>
          <li className="min-h-80 flex w-full items-center justify-center border-solid border-b-[1px] sm:border-r-[0px] md:border-r-[1px] md:border-b-[0px] border-TextTertiary-light">
            <Image
              src="/images/about/compass.png"
              alt="piechart"
              width={200}
              height={200}
              style={{width: "auto", height: "auto"}}
            />
          </li>
          <li className="min-h-80 sm:col-span-2 md:col-auto flex w-full items-center justify-center ">
            <div className="flex flex-col p-4 items-start justify-center">
              <h2 className="font-anton text-3xl font-semibold text-BrandTertiary-dark dark:text-BrandPrimary-light">
                Passion
              </h2>
              <p className="font-nanumMyeongjo">
              I am a dreamer who once held tightly to the mantra, &quot;Hard work pays&quot;. But in today's world, success demands more than just effort—it calls for 
                <span className="font-bold text-BrandQuaternary-light dark:text-BrandPrimary-light">
                  {" "}
                  innovation, resilience, and bold action.
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Highlights;
