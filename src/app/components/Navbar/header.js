import Image from "next/image";
import Link from "next/link";
import React from "react";
import Menu from "./menu";
import Search from "./searchIcon";
import MobileMenu from "./mobileMenu";

function Header() {
  return (
    <header className="flex w-full items-center justify-center border-b border-purple bg-white/80 px-[8px] py-[4px] md:h-[80px] md:py-0 xl:px-[48px]">
      <h1 className="sr-only">Skandasri Fashions</h1>
      <nav className="flex h-full w-full max-w-full items-center justify-between md:w-[1440px]">
        <h2 className="sr-only">Main Navigation Menu</h2>
        <div className="flex h-full w-full items-center justify-between">
          <Link
            href="/"
            title="Home"
            className="header-link flex h-full items-center justify-center"
          >
            <h3 className="font-bold text-xl ml-2">Skandasri Fashions</h3>
          </Link>
          <Menu />
          <div className="md:hidden">
            <MobileMenu/>
          </div>
          <div className="hidden md:flex h-full items-center justify-end md:w-[115px] xl:w-[190px]">
            <Search />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
