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

function NavRender({ className, data }: INavRenderProps) {
  return (
    <ul className={className}>
      {data.map((link) => (
        <li key={link.href} className="py-6">
          <Link href={link.href}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default function Header() {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  console.log("🚀 ~ Header ~ isOpenSearch:", isOpenSearch);
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
        <div className="px-4 bg-primary h-full flex items-center">
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
          "bg-primary absolute top-0 left-0 right-0 h-full flex items-center justify-center",
          isOpenSearch ? "visible" : "invisible"
        )}
      >
        <div className="container flex items-center">
          <Search
            color="#fff"
            size={24}
            onClick={() => setIsOpenSearch(true)}
          />
          <input
            className="body-text-large w-full max-w-full border-none bg-transparent py-2 pl-3 pr-14 text-white outline-none !ring-0 xl:h-7"
            placeholder="Search for properties, services, news etc"
          />
          <X color="#fff" size={24} onClick={() => setIsOpenSearch(false)} />
        </div>
      </div>
    </header>
  );
}
