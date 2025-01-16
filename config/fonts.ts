import { Poppins as FontSans } from "next/font/google";
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-popins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
