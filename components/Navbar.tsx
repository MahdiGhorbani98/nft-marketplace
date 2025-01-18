"use client";
import React, { useEffect, useState } from "react";
import ThemeSwitcher from "./themes/ThemeSwitcher";
import Link from "next/link";
import Image from "next/image";
import images from "../assets";
import MenuItems from "./shared/MenuItems";
import Button from "./shared/Button";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    // disable body scroll when navbar is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  const ButtonGroup = () => {
    const hasConnected = false;

    return hasConnected ? (
      <div className="flexCenter">
        <Button
          btnName="Create"
          btnType="primary"
          classStyles="mx-2 rounded-xl"
          handleClick={() => {
            router.push("/create-nft");
          }}
        />
      </div>
    ) : (
      <Button
        btnName="Connect"
        btnType="outline"
        classStyles="mx-2 rounded-lg"
        handleClick={() => {}}
      />
    );
  };
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
        <div className="flex md:hidden ml-2">
          {!isOpen ? (
            <Image
              src={images.menu}
              objectFit="contain"
              width={25}
              height={25}
              alt="menu"
              onClick={() => setIsOpen(!isOpen)}
              className={theme === "light" ? "filter invert" : undefined}
            />
          ) : (
            <Image
              src={images.cross}
              objectFit="contain"
              width={20}
              height={20}
              alt="close"
              onClick={() => setIsOpen(!isOpen)}
              className={theme === "light" ? "filter invert" : undefined}
            />
          )}

          {isOpen && (
            <div className="fixed inset-0 top-65 dark:bg-nft-dark bg-white z-10 nav-h flex justify-between flex-col">
              <div className="flex-1 p-4">
                <MenuItems />
              </div>
              <div className="p-4 border-t dark:border-nft-black-1 border-nft-gray-1">
                <ButtonGroup />
              </div>
            </div>
          )}
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
