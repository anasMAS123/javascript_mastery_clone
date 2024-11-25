import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex-center bg-black-100 fixed top-0 z-50 w-full border-b-2 border-black-200 py-7 text-white">
      <div className="flex-between mx-auto w-full max-w-screen-2xl xs:px-6 sm:px-16">
        <Link href="/">
          <Image src="/jsm-logo.svg" alt="logo" width={55} height={40} />
        </Link>

        <Image
          src="/hamburger-menu.svg"
          alt="Hamburger-menu"
          width={30}
          height={30}
          className="block md:hidden"
        />

        <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
          <li className="body-text text-gradient_blue-purple !font-bold">
            <Link href="https://jsmastery.pro/next13" target="_blank">
              Naxt.js 13.4 course
            </Link>
          </li>
          <li className="body-text  !font-normal">
            <Link href="https://jsmastery.pro/masterclass" target="_blank">
              Masterclass
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
