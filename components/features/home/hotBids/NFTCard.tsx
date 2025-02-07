/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import Image from "next/image";
import Link from "next/link";

import { shortenAddress } from "@/utils/shortenAddress";

const NFTCard = ({ nft, onProfilePage }: any) => {
  return (
    <Link href={`/nft-details/${nft.i}`}>
      <div className="flex-1 min-w-215 max-w-max  sm:w-full sm:min-w-155 md:min-w-256 lg:min-w-327 dark:bg-nft-black-3 bg-white rounded-2xl p-4 m-4  sm:my-2 mx-2  cursor-pointer shadow-md">
        <div className="relative w-full h-36 xs:h-56 md:h-60 lg:h-300 rounded-2xl overflow-hidden">
          <Image
            src={nft.image || `/images/nft${nft.i}.png`}
            layout="fill"
            objectFit="cover"
            alt="nft01"
          />
        </div>
        <div className="mt-3 flex flex-col">
          <p className="font-sans dark:text-white text-nft-black-1 font-semibold text-sm lg:text-xl">
            {nft.name}
          </p>
          <div className="flexBetween mt-1 lg:mt-3 sm:flex-row flex-col items-start sm:items-center ">
            <p className="font-sans dark:text-white text-nft-black-1 font-semibold text-xs lg:text-lg">
              {nft.price || "154"}
              <span className="font-normal"> {"nftCurrency"}</span>
            </p>
            <p className="font-sans dark:text-white text-nft-black-1 font-semibold text-xs lg:text-lg">
              {shortenAddress(
                onProfilePage ? nft.owner || "owner" : nft.seller || "seller"
              )}
            </p>
          </div>
          <div className="mt-1  lg:mt-3 flexBetween flex-row" />
        </div>
      </div>
    </Link>
  );
};

export default NFTCard;
