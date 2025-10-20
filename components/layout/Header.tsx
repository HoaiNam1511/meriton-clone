"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";

import Logo from "@/public/icons/Logo";
import { useState } from "react";
import clsx from "clsx";

interface INavData {
  title: string;
  href: string;
}

interface INavRenderProps {
  className: string;
  data: INavData[];
}

const navLefts: INavData[] = [
  { title: "Residential", href: "/residential" },
  { title: "Commercial & Retail", href: "/commercial-retail" },
  { title: "Meriton Suites", href: "/meriton-suites" },
  { title: "Parking", href: "/parking" },
  { title: "Energy", href: "/energy" },
];

const navRights: INavData[] = [
  { title: "Services", href: "/services" },
  { title: "About", href: "/about" },
  { title: "News", href: "/news" },
  { title: "Contact", href: "/contact" },
];

const menuData = [
  {
    title: "Residential",
    items: [
      { title: "Properties to Buy", href: "#" },
      { title: "Home-loan Calculator", href: "#" },
      { title: "Properties to Rent", href: "#" },
      { title: "Built for Rent", href: "#" },
      { title: "Property Management", href: "#" },
    ],
  },
  {
    title: "Commercial & Retail",
    items: [
      { title: "Properties to Buy", href: "#" },
      { title: "Properties to Rent", href: "#" },
      { title: "Retail Precinct Directory", href: "#" },
    ],
  },
  {
    title: "Services",
    items: [
      { title: "Meriton 360", href: "#" },
      { title: "Property Finance", href: "#" },
      { title: "Sell For Meriton", href: "#" },
      { title: "Property Management", href: "#" },
      { title: "Property Resales", href: "#" },
    ],
  },
  {
    title: "About",
    items: [
      { title: "About Meriton", href: "#" },
      { title: "Meriton News", href: "#" },
      { title: "Careers at Meriton", href: "#" },
    ],
  },
];

function LinkItem(props: any) {
  return (
    <Link
      {...props}
      className="relative inline-block
    before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full
    before:origin-left before:scale-x-0 before:bg-secondary
    before:transition-transform before:duration-500 hover:before:scale-x-100
  "
    >
      {props.title}
    </Link>
  );
}

function NavRender({ className, data }: INavRenderProps) {
  return (
    <ul className={className}>
      {data.map((link) => (
        <li key={link.href} className={clsx("py-6")}>
          <LinkItem title={link.title} href={link.href} />
        </li>
      ))}
    </ul>
  );
}

export default function Header() {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  return (
    <header className="fixed flex right-0 left-0 justify-center before:absolute before:content-[''] before:right-0 before:bg-primary before:w-8 before:h-full">
      <div className="container flex justify-center items-center">
        <div className="w-full max-w-19.75 pr-4 lg:max-w-28.5 lg:py-3 lg:pr-8 lg:ml-6">
          <Logo />
        </div>
        <div className="flex justify-center flex-1 items-center">
          <NavRender
            className="flex flex-1 gap-6 px-8 items-center text-primary"
            data={navLefts}
          />
          <NavRender
            className="text-white flex gap-6 bg-primary px-6 relative before:absolute before:content-[''] before:right-0 before:h-[30px] before:w-[1px] before:bg-white before:top-1/2 before:transform before:-translate-1/2"
            data={navRights}
          />
        </div>
        <div className="px-4 bg-primary h-full flex items-center justify-center">
          <Search
            color="#fff"
            size={24}
            onClick={() => {
              setIsOpenSearch(true);
            }}
          />
        </div>
      </div>

      <div
        className={clsx(
          "bg-primary absolute top-0 right-0 w-full h-full flex items-center justify-center duration-700 transition-all",
          isOpenSearch ? "translate-x-0 visible" : "translate-x-full invisible"
        )}
      />
      <div
        className={clsx(
          "absolute container flex items-center h-full z-10 transition-opacity duration-500 delay-300",
          isOpenSearch
            ? "opacity-100 visible"
            : "opacity-0 invisible delay-[0ms]"
        )}
      >
        <Search color="#fff" size={24} onClick={() => setIsOpenSearch(true)} />
        <input
          className="body-text-large w-full max-w-full border-none bg-transparent py-2 pl-3 pr-14 text-white outline-none !ring-0 xl:h-7"
          placeholder="Search for properties, services, news etc"
        />
        <div className="px-4 bg-primary h-full flex items-center justify-center">
          <X color="#fff" size={24} onClick={() => setIsOpenSearch(false)} />
        </div>
      </div>
      <div
        className={clsx(
          "absolute top-full w-full bg-white duration-700 overflow-y-hidden flex justify-center",
          isOpenSearch ? "h-[400px] visible" : "h-0 invisible"
        )}
      >
        <div className="grid grid-cols-12 container">
          {menuData.map((menu) => (
            <div key={menu.title} className="col-span-3">
              <h3 className="text-secondary eyebrow pb-3 text-gold-700 md:pb-5 text-sm font-semibold">
                {menu.title}
              </h3>
              <ul>
                {menu.items.map((item) => (
                  <li
                    key={item.href}
                    className="body-text-small-strong mb-3 block w-fit py-0 md:mb-1 md:py-1.5 text-sm"
                  >
                    <LinkItem title={item.title} href={item.href} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
