"use client";

import React, { useEffect } from "react";
import toast from "react-hot-toast";

const NetworkStatus: React.FC<React.PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    const handleOffline = () => {
      toast.error("Your internet connection has been lost.", {
        position: "top-center",
        duration: 4000,
      });
    };

    const handleOnline = () => {
      toast.success("Your internet connection has been restored.", {
        position: "top-center",
        duration: 4000,
      });
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return <>{children}</>;
};

export default NetworkStatus;
