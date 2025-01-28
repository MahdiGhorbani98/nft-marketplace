"use client";
import React from "react";
import NFTCard from "./NFTCard";

// interface HotBids {}

const HotBids = () => {
  console.log("HotBids.tsx");

  return (
    <div className="mt-10">
      <div className="flexBetween mx-4 xs:mx-0 minlg:mx-8 flex-col sm:flex-row sm:items-start">
        <h1 className="flex-1 font-sans dark:text-white text-nft-black-1 text-2xl lg:text-4xl font-semibold sm:mb-4">
          Hot Bids
        </h1>

        <div className="flex-2 w-full flex items-center justify-end">
          {/* //TODO: add SearchBar */}
          {/* <SearchBar
            activeSelect={activeSelect}
            setActiveSelect={setActiveSelect}
            handleSearch={onHandleSearch}
            clearSearch={onClearSearch}
          /> */}
          SearchBar
        </div>
      </div>
      <div className="mt-3 w-full flex flex-wrap   justify-center ">
        {/* //TODO: get nfts */}
        {/* {nfts.map((nft) => (
          <NFTCard key={nft.tokenId} nft={nft} />
        ))} */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
          <NFTCard
            key={`nft-${i}`}
            nft={{
              i,
              name: `Nifty NFT ${i}`,
              price: (10 - i * 0.534).toFixed(2),
              seller: `0x${3}...${4}`,
              owner: `0x${3}...${4}`,
              description: "Cool NFT on Sale",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default HotBids;
