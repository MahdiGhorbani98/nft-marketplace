import React from "react";
const primaryBtn =
  "nft-gradient text-sm lg:text-lg py-2 px-6 lg:py-3 lg:px-8 font-poppins font-semibold text-white rounded-2xl";
const outlineBtn =
  "border border-nft-red-violet-lighter bg-transparent font-poppins font-semibold text-sm lg:text-lg py-2 px-6 lg:py-3 lg:px-8 text-nft-red-violet  !rounded-2xl";

interface ButtonType {
  btnName: string;
  classStyles?: string;
  btnType: string;
  handleClick?: () => void;
}

const Button = ({ btnName, classStyles, btnType, handleClick }: ButtonType) => (
  <button
    type="button"
    className={
      btnType === "primary"
        ? `${primaryBtn} ${classStyles}`
        : `${outlineBtn} ${classStyles}`
    }
    onClick={handleClick}
  >
    {btnName}
  </button>
);

export default Button;
