"use client";

import * as React from "react";
import ThemeProvider from "@/components/themes/ThemeProvider";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Toaster } from "react-hot-toast";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <ThemeProvider {...themeProps}>
      <Toaster position="top-center" />
      {children}
    </ThemeProvider>
  );
}
