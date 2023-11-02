import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/src/data";
import Button from "@/src/components/Button";

import logoSvg from "@/public/hilink-logo.svg";
import menuSvg from "@/public/menu.svg";
import userSvg from "@/public/user.svg";

function Navbar() {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src={logoSvg} alt="logo" />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link href={link.href} className="regular-16 flexCenter cursor-pointer pb-1.5 text-gray-50 transition-all hover:font-bold">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button type="button" title="Login" icon={userSvg} variant="btn_dark_green" />
      </div>

      <Image src={menuSvg} alt="menu" className="inline-block h-8 w-8 cursor-pointer lg:hidden" />
    </nav>
  );
}

export default Navbar;
