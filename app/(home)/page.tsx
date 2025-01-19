import React from "react";
import Banner from "@/components/features/home/Banner";
import BestCreators from "@/components/features/home/BestCreators";

export default function Home() {
  console.log("page.tsx");
  return (
    <div className="flex justify-center px-4 sm:p-12 ">
      <div className="w-full md:w-4/5">
        <Banner
          name={
            <>
              Discover, collect, and sell <br /> extraordinary NFTs
            </>
          }
          childStyles="text-xl sm:text-2xl md:text-4xl   text-left"
          parentStyle="justify-start mb-7  md:h-72 h-44 sm:h-60 sm:p-12 p-4  rounded-3xl"
        />
        <BestCreators />
      </div>
    </div>
  );
}
