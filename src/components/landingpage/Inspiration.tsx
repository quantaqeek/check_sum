"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { GiSolarSystem } from "react-icons/gi";

const Inspiration = () => {
  return (
    <section className="w-full min-h-screen overflow-x-hidden">
      <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center mt-16">
        <div className="w-full flex items-center justify-center">
          <motion.div
            className="flex flex-col items-center justify-center p-6 my-6 relative"
            whileHover="hover"
          >
            {/* Main Image */}
            <Image
              src="/assets/inspiration/insp1.jpeg"
              alt="inspiration"
              width={400}
              height={400}
              style={{width: "auto", height: "auto"}}
              className="main-image relative grayscale rounded-lg"
            />

            {/* Top Image */}
            <motion.div
              className="absolute top-0 left-0 rounded-md"
              initial={{ x: 0 }}
              variants={{
                hover: { x: "200%" },
                default: { x: 0 },
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.8,
              }}
            >
              <Image
                src="/assets/inspiration/insp2.jpeg"
                alt="inspiration"
                width={150}
                height={150}
                style={{width: "auto", height: "auto"}}
                className="top-image"
              />
            </motion.div>

            {/* Bottom Image */}
            <motion.div
              className="absolute bottom-0 right-0 rounded-md"
              initial={{ x: 0 }}
              variants={{
                hover: { x: "-200%" },
                default: { x: 0 },
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.8,
              }}
            >
              <Image
                src="/assets/inspiration/insp3.jpeg"
                alt="inspiration"
                width={150}
                height={150}
                style={{width: "auto", height: "auto"}}
                className="bottom-image"
              />
            </motion.div>
          </motion.div>
        </div>

        <div className="w-full flex flex-col items-center justify-center">
       

          <article className="max-w-full p-4 sm:p-6 md:max-w-96 relative">
            <p className="font-semibold font-roboto text-3xl z-10 relative leading-relaxed">
              A good system should satisfy{" "}
              <span className="relative inline-block">
              <GiSolarSystem />
              </span>{" "}
              three people, first the{" "}
              <span className="text-BrandQuaternary-light dark:text-BrandMain-light underline decoration-wavy decoration-2 underline-offset-2">
                designer
              </span>
              , then the{" "}
              <span className="text-BrandQuaternary-light dark:text-BrandMain-light underline decoration-wavy decoration-2 underline-offset-2">
                client
              </span>{" "}
              and lastly but most important is the{" "}
              <span className="text-BrandQuaternary-light dark:text-BrandMain-light underline decoration-wavy decoration-2 underline-offset-2">
                users
              </span>
            </p>
            <Image
              src="/assets/inspiration/missing.png"
              alt="inspiration"
              width={80}
              height={80}
              style={{width: "auto", height: "auto"}}
              className="absolute -mt-32 right-0"
            />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
