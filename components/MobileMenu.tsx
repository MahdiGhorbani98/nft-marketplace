"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import MenuItems from "./shared/MenuItems";
import images from "../assets";
import ButtonGroup from "./ButtonGroup";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    // disable body scroll when navbar is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isOpen]);

  return (
    <div className="flex md:hidden ml-2">
      {!isOpen ? (
        <Image
          src={images.menu}
          objectFit="contain"
          width={25}
          height={25}
          alt="menu"
          onClick={() => setIsOpen(!isOpen)}
          className={"filter invert dark:invert-0"}
        />
      ) : (
        <Image
          src={images.cross}
          objectFit="contain"
          width={20}
          height={20}
          alt="close"
          onClick={() => setIsOpen(!isOpen)}
          className={"filter invert dark:invert-0"}
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
  );
};

export default MobileMenu;
