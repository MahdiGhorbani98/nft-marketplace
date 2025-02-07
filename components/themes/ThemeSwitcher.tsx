"use client";
import React from "react";
import { useTheme } from "next-themes";
import images from "../../assets";
import Image from "next/image";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  console.log({ theme });

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? (
        <Image width={32} height={32} alt="light" src={images.sun} />
      ) : (
        <Image width={32} height={32} alt="dark" src={images.moon} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
