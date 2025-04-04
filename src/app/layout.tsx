import type { Metadata } from "next";
import "./globals.css";
import { POPPINS_FONT, STAATLICHES_FONT } from "../globals/fonts";
import Navbar from "@/components/Navbar";
import { Url } from "@/globals/routes";
import Footer from "@/sections/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${POPPINS_FONT.variable} ${STAATLICHES_FONT.variable}`}>
        <Navbar />
        <div>{children}</div>
        <footer id={Url.CONTACT.replace("#", "")}>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
