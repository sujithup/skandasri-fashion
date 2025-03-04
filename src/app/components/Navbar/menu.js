"use client";

import Link from "next/link";
// import SubMenu from "./SubMenu";
import { navLinks } from "@/app/utils/constants";

const Menu = () => {
  return (
    <>
      <ul className="hidden h-full gap-[16px] text-base font-medium text-white md:flex md:items-center lg:gap-[24px] lg:text-[18px] xl:gap-[48px]">
        {navLinks.map((item) => (
          <li key={item.title} className="h-full">
            <Link
              href={item.path}
              className="header-link flex items-center justify-center transition-all duration-300 will-change-transform"
            >
              {item.title}
            </Link>
            {/* {item.items.length > 0 && (
              <SubMenu items={item.items} parent={item.title} />
            )} */}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
