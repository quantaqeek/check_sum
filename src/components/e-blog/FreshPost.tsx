import Image from "next/image";
import { BiArrowToRight } from "react-icons/bi";

export default function FreshPost() {
  return (
    <>
      <section className="w-full min-h-screen flex flex-col items-center justify-center mb-24">
        <div className="w-full flex flex-col my-16">
          <h1 className="font-anton font-bold text-4xl md:text-7xl lg:text-8xl">
            FRESH POSTS.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 text-TextPrimary-dark dark:text-TextPrimary-light bg-[#00160E] dark:bg-BrandQuaternary-dark p-4 md:p-12 w-full h-full justify-between rounded-[2em]">
          <div className="flex flex-col items-start w-full">
            <div>
              <h2 className="font-nanumMyeongjo font-light text-sm">
                Nov 19, 2025
              </h2>
            </div>
            <div className="w-full flex flex-col pt-6">
              <h3 className="font-roboto text-3xl md:text-4xl lg:text-5xl font-semibold">
                Mastercard Business Outcomes — Making the Invisible...
              </h3>
              <div className="flex mt-2 items-center justify-start gap-2 py-6">
                <span className="font-nanumMyeongjo font-thin">By</span>
                <div className="relative flex items-center justify-center">
                  <Image
                    src="/assets/avatars/Lavatar2.jpeg"
                    alt="Picture of the author"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </div>
                <p className="font-bold text-xl underline">
                  BETT K <span className="text-sm">Pro</span>
                </p>
              </div>

              <article className="">
                <p className="font-light font-nanumMyeongjo">
                  When Mastercard set out to create the Business Outcomes
                  platform, the goal was not to build another corporate website.
                  The mission was to reimagine how a global...
                </p>
              </article>
              <div className="flex gap-2 mt-12 mb-6 items-center ">
                <BiArrowToRight/>
                <span className="font-semibold underline cursor-pointer">Read Article</span>

              </div>
            </div>
          </div>
          <div className="flex flex-col items-center h-full justify-center w-full">
            <div className="flex items-center justify-center h-full relative w-full">
              <Image
                alt="Mountains"
                src="/assets/showcase/emptyRoad.jpg"
                quality={100}
                fill
                sizes="100vw"
                style={{
                  objectFit: "cover",
                }}
                className="grayscale rounded-[2em]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
