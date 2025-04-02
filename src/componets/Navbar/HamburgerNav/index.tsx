"use client";

import HamburgerNavItems from "../HamburgerNavItems";
import Hamburger from "@/componets/Hamburger";
import Image from "next/image";
import { useState } from "react";
import LOGO from "@/assets/logo/logo-relaxbad.svg";

const HamburgerNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-white py-2 px-1 lg:hidden">
        <div className="container flex justify-between items-center ">
          <Image src={LOGO} alt="logo" className="h-6 w-fit" />
          <Hamburger
            toggleMenu={() => setIsOpen((prev) => !prev)}
            isOpen={isOpen}
          />
        </div>
      </div>
      {isOpen && <HamburgerNavItems />}
    </>
  );
};
export default HamburgerNav;
