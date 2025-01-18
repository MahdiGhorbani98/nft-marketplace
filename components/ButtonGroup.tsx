"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Button from "./shared/Button";

const ButtonGroup = () => {
  const router = useRouter();
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

export default ButtonGroup;
