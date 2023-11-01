import Link from "next/link";
import React from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/src/data";
import Button from "./Button";

import logo from "@/public/hilink-logo.svg";
import menu from "@/public/menu.svg";

function Navbar() {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src={logo} alt="logo" />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 flexCenter cursor-pointer pb-1.5 text-gray-50 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
      </div>

      <Image src={menu} alt="menu" className="inline-block h-8 w-8 cursor-pointer lg:hidden" />
    </nav>
  );
}

export default Navbar;
