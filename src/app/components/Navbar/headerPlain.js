import Image from "next/image";
import Link from "next/link";
import React from "react";
import Head from "next/head";

function HeaderPlain() {
  return (
    <header className="flex w-full items-center justify-center  bg-black px-[8px] py-[4px] md:h-[80px] md:py-0 xl:px-[48px]">
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <h1 className="sr-only">Skandashree Fashions</h1>
      <nav className="flex h-full w-full max-w-full items-center justify-between md:w-[1440px]">
        <h2 className="sr-only">Main Navigation Menu</h2>
        <div className="flex h-full w-full items-center justify-between">
          <Link
            href="/"
            title="Home"
            className="header-link flex h-full items-center justify-center"
          >
            <Image
              alt="logo"
              src="/images/skandashree_logo.jpg"
              width="220"
              height="100"
            />
            {/* <h3 className="font-bold text-xl ml-2">Skandashree Fashions</h3> */}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default HeaderPlain;
