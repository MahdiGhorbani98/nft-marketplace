import React from "react";

interface BannerType {
  name: React.ReactNode;
  childStyles: string;
  parentStyle: string;
}

const Banner = ({ name, childStyles, parentStyle }: BannerType) => (
  <div
    className={`relative w-full flex items-center z-0 overflow-hidden nft-gradient ${parentStyle}`}
  >
    <p className={`font-bold  text-white font-sans  ${childStyles}`}>{name}</p>
    <div className="absolute sm:w-48 sm:h-48 w-32 h-32 rounded-full -top-9 -left-16 -z-5 white-bg" />
    <div className="absolute sm:w-72 sm:h-72 w-56 h-56 rounded-full -bottom-24 -right-14 -z-5 white-bg" />
  </div>
);

export default Banner;
