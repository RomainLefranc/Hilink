import { COMMUNITY_LINKS, FOOTER_CONTACT_INFO, LEARN_MORE_LINKS, SOCIALS } from "@/src/data";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/public/hilink-logo.svg";
function Footer() {
  return (
    <footer className="mx-auto mb-24 flex w-full h-full max-w-[1440px] flex-col gap-14 px-6 lg:px-20 3xl:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-9 gap-[30px]">
        <Link href="/" className="sm:col-span-2 md:col-span-4 lg:col-span-1">
          <Image src={logo} alt="logo" />
        </Link>

        <div className="flex flex-col gap-5 lg:col-span-2">
          <h4 className="bold-18 whitespace-nowrap">{LEARN_MORE_LINKS.title}</h4>
          <ul className="regular-14 flex flex-col gap-4 text-gray-30">
            {LEARN_MORE_LINKS.links.map((link) => (
              <Link href="/" key={link}>
                {link}
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5 lg:col-span-2">
          <h4 className="bold-18 whitespace-nowrap">{COMMUNITY_LINKS.title}</h4>
          <ul className="regular-14 flex flex-col gap-4 text-gray-30">
            {COMMUNITY_LINKS.links.map((link) => (
              <Link href="/" key={link}>
                {link}
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5 lg:col-span-2">
          <h4 className="bold-18 whitespace-nowrap">{FOOTER_CONTACT_INFO.title}</h4>
          <ul className="regular-14 flex flex-col gap-4 text-gray-30">
            {FOOTER_CONTACT_INFO.links.map((link) => (
              <Link href="/" key={link.label} className="flex gap-4 md:flex-col lg:flex-row">
                <p className="whitespace-nowrap">{link.label}:</p>
                <p className="medium-14 whitespace-nowrap text-blue-70">{link.value}</p>
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-5 lg:col-span-2">
          <h4 className="bold-18 whitespace-nowrap">{SOCIALS.title}</h4>
          <ul className="regular-14 flex gap-4 text-gray-30">
            {SOCIALS.links.map((link) => (
              <Link href="/" key={link}>
                <Image src={link} alt="logo" width={24} height={24} />
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="border bg-gray-20" />
      <p className="regular-14 w-full text-center text-gray-30">2023 Hilink | All rights reserved</p>
    </footer>
  );
}

export default Footer;
