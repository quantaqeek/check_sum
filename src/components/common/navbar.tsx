"use client";

import { useState,} from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import { TfiEmail } from "react-icons/tfi";
import { BsTwitterX } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contacts", href: "/contact" },
  ];

  return (
    <motion.nav
      className={` flex flex-col fixed  top-0 left-0 w-full  z-50 transition-all duration-300 font-roboto text-TextMain-light dark:text-TextMain-dark`}
    >
      <div className="flex flex-col top-0 w-full transition-all  ">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <Link href={"/"} className="flex">
          <div className="flex flex-col items-start py-4 mt-4">
            <h1 className="text-3xl font-bold z-50 text-tertiary-dark dark:text-background-light font-anton">
              Bett
              <span className="text-TextDisabled-dark dark:text-BrandMain-light">
                Enoch
              </span>
            </h1>
            <p className="font-edu font-light z-50 text-sm text-tertiary-dark dark:text-BrandQuaternary-light">
              [Phenomenal]
            </p>
          </div>
          </Link>
          <div className=" flex items-center clip-customFooter z-50 bg-lime-200 dark:bg-BrandMain-light mt-4 text-BrandMain-dark">
            <button onClick={toggleMenu} className="p-1 sm:p-2">
              {isOpen ? (
                <IoCloseOutline size={48} />
              ) : (
                <HiOutlineMenuAlt2 size={48} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu with AnimatePresence */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="nav-animate overflow-y-auto -mt-32  top-0 bg-primary-light relative dark:bg-primary-dark z-40 flex flex-col items-center pt-32 space-y-6"
            >
              <div className="absolute inset-0 -z-10 w-full ">
                {/* Dark Theme Image */}
                <Image
                  src="/assets/homepage/ModernDark4.webp"
                  alt="Hero Background Dark"
                  fill
                 
                  style={{ objectFit: "cover" }}
                  className=""
                  priority
                  quality={85}
                />
              </div>
              <div className="nav-details relative inset-0 w-full flex flex-col min-h-screen  ">
                <div className="w-full flex flex-col gap-2 items-end px-2 sm:px-4 mr-4 mt-6">
                  {menuItems.map((item) => (
                    <Link key={item.label} href={item.href}>
                      <span
                        onClick={toggleMenu}
                        className={`text-5xl sm:text-6xl md:text-6xl font-semibold font-anton ${
                          pathName === item.href
                            ? "text-BrandMain-light"
                            : "text-TextMain-dark hover:underline"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  ))}
                  <div>
                    <ThemeToggle />
                  </div>
                </div>
                <ul className="w-full absolute py-4 sm:relative bottom-0 md:max-w-[50%]  p-2 md:p-4 flex text-normal sm:text-xl md:text-5xl flex-row gap-2 md:gap-4  justify-center sm:justify-around text-BrandMain-light">
                  <li className="flex flex-col  items-center justify-between cursor-pointer">
                    <Link
                      href={"mailto:quantumqeek@gmail.com?subject=Hello%20there&body=I%20wanted%20to%20reach%20out!"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center"
                    >
                      <p className=" font-nanumMyeongjo  text-TextTertiary-dark">
                        Email
                      </p>
                      <TfiEmail size={48} />
                    </Link>
                  </li>
                  <li className="flex flex-col items-center justify-between cursor-pointer">
                    <Link
                      href={"https://www.linkedin.com/in/bettenoch/"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center"
                    >
                      <p className=" font-nanumMyeongjo  text-TextTertiary-dark">
                        LinkedIn
                      </p>
                      <BsTwitterX size={48} />
                    </Link>
                  </li>
                  <li className="flex flex-col  items-center justify-between cursor-pointer">
                    <Link
                      href={"https://x.com/bettenoch_254"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center"
                    >
                      <p className=" font-nanumMyeongjo  text-TextTertiary-dark">
                        Twitter
                      </p>
                      <SlSocialLinkedin size={48} />
                    </Link>
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
