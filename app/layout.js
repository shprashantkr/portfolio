import {Outfit, Ovo } from "next/font/google";
import "./globals.css";
import { assets } from "@/assets/assets";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});


export const metadata = {
  title: "Portfolio-Prashant Sharma",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
        //  style={{
        //           backgroundImage: `url(${assets.header_bg_color.src})`,
        //           backgroundSize: "fixed",
        //           backgroundPosition: "",
        //           backgroundRepeat: "no-repeat",
        //         }}
      
      >
        {children}
      </body>
    </html>
  );
}
