import React from "react";
import ThemeSwitcher from "./themes/ThemeSwitcher";
import Link from "next/link";
import Image from "next/image";
import images from "../assets";
import MenuItems from "./shared/MenuItems";
import MobileMenu from "./MobileMenu";
import ButtonGroup from "./ButtonGroup";

const Navbar = () => {
  return (
    <nav className="flexBetween w-full fixed z-10 px-4 md:px-12 py-4 flex-row border-b dark:bg-nft-dark bg-white dark:border-nft-black-1 border-nft-gray-1">
      {/* //?LOGO  */}
      <Link className="flexCenter gap-[6px] text-lg" href={"/"}>
        <Image src={images.logo02} width={32} height={32} alt="logo" />
        <p className="hidden md:inline-block font-bold">CryptoKet</p>
      </Link>
      <section className="flexCenter gap-6">
        <ThemeSwitcher />
        <div className="hidden md:flex justify-center items-center gap-6">
          <MenuItems />
          <ButtonGroup />
        </div>
        <MobileMenu />
      </section>
    </nav>
  );
};

export default Navbar;
