import React from "react";
import ThemeSwitcher from "../themes/ThemeSwitcher";

const Navbar = () => {
  return (
    <div className="flex justify-between py-6 bg-gray-500">
      <h1>NFT</h1>
      <ThemeSwitcher />
    </div>
  );
};

export default Navbar;
