"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import CreatorCard from "./CreatorCard";
import images from "@/assets";
import { mockBestCreators } from "@/mocks/bestCreators";
import { shortenAddress } from "@/utils/shortenAddress";

// interface BestCreatorsType {}

const BestCreators = () => {
  console.log("BestCreators.tsx");
  const [hideButtons, setHideButtons] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: string) => {
    const { current } = scrollRef;

    const scrollAmount = window.innerWidth > 1800 ? 270 : 210;
    if (current) {
      if (direction === "left") {
        current.scrollLeft -= scrollAmount;
      } else {
        current.scrollLeft += scrollAmount;
      }
    }
  };

  // check if scrollRef container is overfilling its parentRef container
  const isScrollable = () => {
    const { current } = scrollRef;
    const { current: parent } = parentRef;
    if (current && parent) {
      if (current?.scrollWidth >= parent?.offsetWidth)
        return setHideButtons(false);
    }
    return setHideButtons(true);
  };

  // if window is resized
  useEffect(() => {
    isScrollable();
    window.addEventListener("resize", isScrollable);

    return () => {
      window.removeEventListener("resize", isScrollable);
    };
  });

  return (
    <div>
      <h1 className="font-sans dark:text-white text-nft-black-1 text-2xl minlg:text-4xl font-semibold ml-4 xs:ml-0">
        Best Creators
      </h1>

      <div
        className="relative flex-1 justify-center max-w-full flex mt-3"
        ref={parentRef}
      >
        <div
          className="flex flex-row w-max overflow-x-scroll no-scrollbar select-none"
          ref={scrollRef}
        >
          {mockBestCreators.map((creator, i) => (
            <CreatorCard
              key={creator.seller}
              rank={i + 1}
              creatorImage={"/images/creator1.png"}
              creatorName={shortenAddress(creator.seller)}
              creatorEths={creator.sumall}
            />
          ))}

          {!hideButtons && (
            <>
              <div
                onClick={() => handleScroll("left")}
                className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer left-0"
              >
                <Image
                  src={images.left}
                  layout="fill"
                  objectFit="contain"
                  alt="left_arrow"
                  className={"filter invert dark:invert-0"}
                />
              </div>
              <div
                onClick={() => handleScroll("right")}
                className="absolute w-8 h-8 minlg:w-12 minlg:h-12 top-45 cursor-pointer right-0"
              >
                <Image
                  src={images.right}
                  layout="fill"
                  objectFit="contain"
                  alt="left_arrow"
                  className={"filter invert dark:invert-0"}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestCreators;
