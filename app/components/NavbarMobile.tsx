"use client";
import React, { useEffect, memo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useLocalStorage from "../hooks/useLocalStorage";
import classnames from "classnames";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

//Lazy loading örneği yapalım
//styled component de yapalım
//tailwind config detaylı anlayalım
//higher order component göz atalım
//vakit kalırsa vue.js e bakalım
//co-pilot ve chatgpt nasıl kullanılıyor bakabiliriz

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li className="my-1 text-sm font-semibold ">
      <Link
        className="px-4 py-2 hover:bg-slate-700 hover:text-slate-50"
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/cart", label: "Cart" },
  { href: "/checkout", label: "Checkout" },
];

const NavbarMobile = memo(() => {
  const { totalAmount } = useSelector((state: RootState) => state.cart);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const hamburgerCls = classnames(
    "bg-slate-50 h-0.5 w-8 block",
    "transition-rotate duration-300 ease-out"
  );

  return (
    <>
      <button
        className="fixed z-10 flex flex-col gap-2 top-6 right-6"
        onClick={handleClick}
      >
        {Array.from({ length: 3 }).map((_, index) => {
          const cls = classnames(hamburgerCls, {
            "rotate-45 translate-y-2.5": isOpen && index === 0,
            "rotate-[-45deg] -translate-y-2.5": isOpen && index === 2,
            "opacity-0": isOpen && index === 1,
          });
          return <span className={cls} key={index}></span>;
        })}
      </button>
      {isOpen && (
        <nav className="fixed top-0 flex items-center justify-center w-full h-screen mb-5 shadow bg-slate-800">
          <ul className="flex flex-col items-center justify-center gap-4 mt-4 md:mt-0">
            {navItems.map((item, index) => (
              <NavItem key={index} href={item.href}>
                {item.label}
              </NavItem>
            ))}
            <li>
              <Link href="/cart">
                {totalAmount === 0 && "Cart"}
                {totalAmount > 0 && (
                  <>
                    <span>Total Amount: </span>
                    <span>{totalAmount}</span>
                  </>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
});

export default NavbarMobile;
