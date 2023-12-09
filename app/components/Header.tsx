"use client";
import React from "react";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import useTailwindMediaQuery from "../hooks/useMediaQuery";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const { isLg } = useTailwindMediaQuery();

  return (
    <header className="sticky top-0">
      <div className="flex flex-col items-start justify-center py-5 lg:items-center bg-slate-600">
        <Link className="flex items-center ml-6 text-slate-50 lg:ml-0" href="/">
          <Image src="/shop.svg" width={28} height={28} alt="e-shop" />
          <span className="ml-3 text-lg font-bold">E-Shop</span>
        </Link>
      </div>
      {isLg ? <Navbar /> : <NavbarMobile />}
    </header>
  );
};

export default Header;
