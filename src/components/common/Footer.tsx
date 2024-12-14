import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center ">
      <div className="w-full flex flex-col  relative items-center justify-start clip-customFooter text-primary-light dark:text-primary-dark bg-background-dark dark:bg-background-light">
        <div className="flex mb-4 w-full relative  px-6 items-center mt-24 justify-center md:justify-end lg:justify-center gap-6">
          <div className="flex items-center justify-center gap-8 flex-col md:flex-row">
            <ul className=" flex flex-col gap-2 text-xl font-nanumMyeongjo border-r-2">
              <li className="px-6 cursor-pointer  hover:text-BrandMain-light dark:hover:text-tertiary-dark border-b-0 hover:underline">
                <Link href="/about">About</Link>
              </li>
              <li className="px-6 cursor-pointer  hover:text-BrandMain-light dark:hover:text-tertiary-dark  border-b-0 hover:underline">
                <Link href={"/contact"}>Contacts</Link>
              </li>
              <li className="px-6 cursor-pointer  hover:text-BrandMain-light dark:hover:text-tertiary-dark  border-b-0 hover:underline">
                <Link href={"/services"}>Services</Link>
              </li>
            </ul>
            <div className="flex w-full items-center justify-end flex-col gap-4">
              <div className="text-md text-tertiary-light dark:text-tertiary-dark">
                You can reach me on
              </div>
              <ul className="w-full mt-4 flex  gap-6 items-center justify-center">
                <li>
                  <Link
                    href={"https://www.linkedin.com/in/bettenoch/"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiLinkedin size={"32"} />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://x.com/bettenoch_254"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-twitter"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    href={"https://github.com/Bettenoch"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-github"
                    >
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </Link>
                </li>
              </ul>
              <div className="flex w-full text-center text-2xl font-light justify-end max-w-96">
                &apos;&apos;In the world of software, the best way to predict
                the future is to invent it. &apos;&apos;
              </div>
            </div>
          </div>
        </div>
        <div className="w-full overflow-clip relative flex items-center justify-center">
          <div className="w-full  flex items-center justify-center relative">
            <Image
              src="/assets/footer/BLD.png"
              alt="emoji"
              width={200}
              height={100}
              style={{ width: "auto", height: "auto" }}
              className="absolute bottom-0"
            />
            <p className=" font-anton z-10  font-bold text-BrandMain-light dark:text-tertiary-dark text-5xl sm:text-[150x] md:text-[200px] lg:text-[220px]">
              BETTENOCH
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
