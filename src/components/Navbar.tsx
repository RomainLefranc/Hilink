import Link from "next/link";
import React from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/src/data";
import Button from "./Button";

function Navbar() {
  return (
    <nav className="relative z-30 mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 lg:px-20 3xl:px-0">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 flex cursor-pointer items-center justify-center pb-1.5 text-gray-50 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="bg-green-90 px-8 py-4 text-white transition-all hover:bg-black"
        />
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
}

export default Navbar;
