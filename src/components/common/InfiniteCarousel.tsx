import { Stacks } from "@/app/data";
import Image from "next/image";
import React from "react";

const InfiniteCarousel = () => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6">
      <div className="text-center">
        <div
          x-data="{}"
          x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
          className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          <ul
            x-ref="logos"
            className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
          >
            {Stacks.map((stack, index) => {
              return (
                <li key={index}>
                  <Image
                    src={stack.img}
                    width={100}
                    height={100}
                    style={{ width: "auto", height: "auto" }}
                    className="w-24 grayscale"
                    alt="Disney"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
