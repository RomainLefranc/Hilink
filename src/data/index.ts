import facebookSvg from "@/public/facebook.svg";
import instagramSvg from "@/public/instagram.svg";
import twitterSvg from "@/public/twitter.svg";
import youtubeSvg from "@/public/youtube.svg";
import wordpress from "@/public/wordpress.svg";

import mapSvg from "@/public/map.svg";
import calendarSvg from "@/public/calendar.svg";
import techSvg from "@/public/tech.svg";
import locationSvg from "@/public/location.svg";

import person1Svg from "@/public/person-1.png";
import person2Svg from "@/public/person-2.png";
import person3Svg from "@/public/person-3.png";
import person4Svg from "@/public/person-4.png";

// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/", key: "how_hilink_work", label: "How Hilink Work?" },
  { href: "/", key: "services", label: "Services" },
  { href: "/", key: "pricing ", label: "Pricing " },
  { href: "/", key: "contact_us", label: "Contact Us" },
];

// CAMP SECTION
export const PEOPLE_URL = [person1Svg, person2Svg, person3Svg, person4Svg];

// FEATURES SECTION
export const FEATURES = [
  {
    title: "Real maps can be offline",
    icon: mapSvg,
    alt: "map",
    variant: "green",
    description: "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
  },
  {
    title: "Set an adventure schedule",
    icon: calendarSvg,
    alt: "calendar",

    variant: "green",
    description: "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: "Technology using augment reality",
    icon: techSvg,
    variant: "green",
    alt: "tech",
    description:
      "Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection",
  },
  {
    title: "Many new locations every month",
    icon: locationSvg,
    alt: "location",
    variant: "orange",
    description: "Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing",
  },
];

// FOOTER SECTION
export const LEARN_MORE_LINKS = [
  { text: "About Hilink", href: "/" },
  { text: "Press Releases", href: "/" },
  { text: "Environment", href: "/" },
  { text: "Jobs", href: "/" },
  { text: "Privacy Policy", href: "/" },
  { text: "Contact Us", href: "/" },
];

export const COMMUNITY_LINKS = [
  { text: "Climbing xixixi", href: "/" },
  { text: "Hiking hilink", href: "/" },
  { text: "Hilink kinthill", href: "/" },
];

export const CONTACT_INFOS = [
  { label: "Admin Officer", value: "123-456-7890" },
  { label: "Email Officer", value: "hilink@akinthil.com" },
];

export const SOCIAL_LINKS = [
  { icon: facebookSvg, href: "/", alt: "facebook" },
  { icon: instagramSvg, href: "/", alt: "instagram" },
  { icon: twitterSvg, href: "/", alt: "twitter" },
  { icon: youtubeSvg, href: "/", alt: "youtube" },
  { icon: wordpress, href: "/", alt: "wordpress" },
];
