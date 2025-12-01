import React from 'react'; 
import FreshPost from './FreshPost';
// Assuming Image and FaLongArrowAltRight are imported correctly in your project structure
// Replace these mock definitions with your actual imports/data.

// 1. Define the TypeScript interface for a blog item
interface BlogItem {
    id: number;
    title: string;
    descp: string;
    image: string;
}

// 2. Type the mock data collection using the interface
const BlogSet1: BlogItem[] = [
    { id: 1, title: "The Art of Mosaicking", descp: "Explore advanced techniques for creating seamless satellite imagery composites.", image: "https://img.freepik.com/free-photo/black-swan-cygnus-atratus-illustrated-by-elizabeth-gould_53876-65218.jpg?uid=R169576943&ga=GA1.1.134588729.1722247423&semt=ais_hybrid" },
    { id: 2, title: "K-Means in Remote Sensing", descp: "Unsupervised classification explained for environmental data analysis.", image: "https://img.freepik.com/free-photo/bright-pop-landscape-design_23-2149213430.jpg?uid=R169576943&ga=GA1.1.134588729.1722247423&semt=ais_hybrid"},
    { id: 3, title: "Understanding Sentinel-2 Bands", descp: "A deep dive into the spectral characteristics of the S2 mission.", image: "https://img.freepik.com/premium-photo/friends-painting-colorful-mural-their-creativity-friendship-intertwining_741910-44795.jpg?uid=R169576943&ga=GA1.1.134588729.1722247423&semt=ais_hybrid" },
];

// Mock component for FaLongArrowAltRight (replace with your actual import)
const FaLongArrowAltRight: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
);

// Mock component for Image (replace with your actual Next.js Image component)
interface ImageProps {
    src: string;
    alt: string;
    fill?: boolean;
    style?: React.CSSProperties;
    className?: string;
    priority?: boolean;
    quality?: number;
    sizes?: string;
}

const Image: React.FC<ImageProps> = ({ src, alt, fill, style = {}, className = '' }) => (
    <img
        src={src}
        alt={alt}
        style={fill ? { ...style, width: '100%', height: '100%', objectFit: style.objectFit || 'cover' } : style}
        className={className}
    />
);
// End Mock section


const BlogHighlights: React.FC = () => {
  return (
    <section className="min-h-screen p-4 md:p-6 lg:p-8 flex flex-col ">
      <FreshPost/>
      <div
        className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2 sm:grid-rows-2
          sm:[&>:first-child]:col-span-2
          sm:[&>:nth-child(2)]:col-span-1 sm:[&>:nth-child(2)]:row-start-2
          sm:[&>:nth-child(3)]:col-span-1 sm:[&>:nth-child(3)]:row-start-2
          
          md:grid-cols-3 md:grid-rows-1
          md:[&>:first-child]:col-span-1 md:[&>:first-child]:row-start-auto
          md:[&>:nth-child(2)]:col-span-1 md:[&>:nth-child(2)]:row-start-auto
          md:[&>:nth-child(3)]:col-span-1 md:[&>:nth-child(3)]:row-start-auto
        "
      >
        {/* Card 1 */}
        <div className="rounded-xl shadow-lg p-1 sm:p-2 md:p-6 lg:p-8 h-screen flex flex-col items-start justify-center ">
          <div className="relative clip-customShape w-full h-48 rounded-lg overflow-hidden">
            <Image
              src="/assets/showcase/light-bulb.jpg"
              alt="showcase"
              fill
              style={{ objectFit: "cover" }}
              className=" absolute hover:scale-105 transition-transform duration-300 grayscale"
            />
          </div>
          <div className="relative pt-4">
            <p className="text-sm font-nanumMyeongjo font-thin text-gray-600 dark:text-gray-300">
              Youve officially stumbled into my digital lair — a strange little
              corner of the internet where technology meets imagination, life
              hacks wrestle with procrastination, and stoicism tries (and
              sometimes fails) to keep me sane.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative rounded-xl shadow-lg p-1 sm:p-2 md:p-6 border border-gray-200 dark:border-gray-950 h-screen overflow-hidden">
          <div className="absolute inset-0 h-full w-full">
            <Image
              src="/assets/blog/testfade.png"
              alt="Hero Background Dark"
              fill
              sizes="100%"
              style={{ objectFit: "cover" }}
              className="hover:scale-105 transition-transform duration-300"
              priority
              quality={85}
            />
            <div className="absolute inset-0 bg-black/40"></div> {/* Dark overlay for readability */}
          </div>
          
          <div className="relative h-full flex flex-col justify-end p-4">
            <h3 className="text-xl font-semibold mb-2 text-white font-anton">
              Card 2
            </h3>
            <p className="text-gray-200 font-nanumMyeongjo text-xs md:text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis sequi recusandae quas tenetur cumque totam odio
              veritatis. Corporis magni maiores labore consequatur ratione
              voluptatem iusto vitae ullam eveniet atque. Eos.
            </p>
          </div>
        </div>

        {/* List of Blog Posts (Card 3) */}
        <div className=" rounded-xl shadow-lg p-1 sm:p-2 md:p-6 bg-white overflow-y-auto">
          <ul className="h-full flex flex-col gap-8">
            {/* The item here is implicitly typed as BlogItem due to BlogSet1 typing */}
            {BlogSet1.map((item: BlogItem) => ( 
              <li key={item.id} className="flex w-full">
                {/* *** Hover Animation Container *** */}
                <div 
                  className="w-full flex flex-col lg:flex-row gap-4 border-t-[1px] border-b-[1px] border-gray-300 py-4 group cursor-pointer"
                >
                  <div className="h-24 sm:w-24 md:w-32 xl:w-48 relative flex-shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={item.image}
                      fill
                      sizes="100%"
                      style={{ objectFit: "cover" }}
                      className="group-hover:scale-105 transition-transform duration-300 backdrop-grayscale grayscale"
                      alt="Picture of the article topic"
                    />
                  </div>
                  <article className="flex flex-col gap-2 flex-grow">
                    {/* Text color changes on hover (applied to h2 for emphasis) */}
                   <div className='flex flex-col'>
                     <h2 className="font-bold font-momo text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                      {item.title}
                    </h2>
                    <p className="text-sm font-nanumMyeongjo text-gray-500">
                      {item.descp}
                    </p>
                   </div>
                    {/* Read more section with arrow animation */}
                    <div className="w-full flex items-center justify-end text-sm mt-1">
                      <span className="underline text-gray-700 group-hover:text-red-600 transition-colors duration-300">
                        read
                      </span>
                      {/* Arrow translates (moves right) on hover */}
                      <span className="ml-1 text-gray-700 group-hover:text-red-600 group-hover:translate-x-2 transition-all duration-300 ease-in-out">
                        <FaLongArrowAltRight />
                      </span>
                    </div>
                  </article>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BlogHighlights;