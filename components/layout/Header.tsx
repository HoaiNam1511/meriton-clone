"use client";

import Link from "next/link";
import { Search, X, Menu, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";

import Logo from "@/public/icons/Logo";

interface INavData {
  title: string;
  href: string;
}

interface INavRenderProps {
  className: string;
  data: INavData[];
}

interface ILinkItem {
  className?: string;
  href: string;
  children: React.ReactNode;
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
      { title: "Properties to Buy", href: "/residential/properties-to-buy" },
      {
        title: "Home-loan Calculator",
        href: "/residential/home-loan-calculator",
      },
      { title: "Properties to Rent", href: "/residential/properties-to-rent" },
      { title: "Built for Rent", href: "/residential/built-for-rent" },
      {
        title: "Property Management",
        href: "/residential/property-management",
      },
    ],
  },
  {
    title: "Commercial & Retail",
    items: [
      {
        title: "Properties to Buy",
        href: "/commercial-retail/properties-to-buy",
      },
      {
        title: "Properties to Rent",
        href: "/commercial-retail/properties-to-rent",
      },
      {
        title: "Retail Precinct Directory",
        href: "/commercial-retail/retail-precinct-directory",
      },
    ],
  },
  {
    title: "Services",
    items: [
      { title: "Meriton 360", href: "/services/meriton-360" },
      { title: "Property Finance", href: "/services/property-finance" },
      { title: "Sell For Meriton", href: "/services/sell-for-meriton" },
      { title: "Property Management", href: "/services/property-management" },
      { title: "Property Resales", href: "/services/property-resales" },
    ],
  },
  {
    title: "About",
    items: [
      { title: "About Meriton", href: "/about/about-meriton" },
      { title: "Meriton News", href: "/about/meriton-news" },
      { title: "Careers at Meriton", href: "/about/careers-at-meriton" },
    ],
  },
];

function LinkItem({ children, className, href }: ILinkItem) {
  console.log("🚀 ~ LinkItem ~ className:", className);
  return (
    <Link
      href={href}
      className={clsx(
        "relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-left before:scale-x-0 before:bg-[#bc955c] before:transition-transform before:duration-500 hover:before:scale-x-100",
        className
      )}
    >
      {children}
    </Link>
  );
}

export default function Header() {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (isOpenSearch || isOpenMenu) {
        console.log("Come");
        setIsOpenMenu(false);
        setIsOpenSearch(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isOpenSearch, isOpenMenu]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (isOpenSearch && event.key === "Escape") {
        setIsOpenSearch(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <header className="fixed flex right-0 left-0 justify-center before:absolute before:content-[''] before:right-0 before:bg-primary before:h-full lg:px-0 bg-white">
      <div className="absolute w-[20vw] h-full bg-primary right-0 z-[-1] hidden lg:block" />
      <div
        className={clsx(
          "fixed left-0 top-0 h-screen w-screen bg-overlay backdrop-blur-lg transition-all duration-400 z-[10]",
          isOpenSearch || isOpenMenu
            ? "visible opacity-100"
            : "invisible opacity-0"
        )}
      />
      <div className="flex justify-between lg:justify-center items-center w-full relative z-[100]">
        <div className="w-full max-w-19.75 pr-4 lg:max-w-28.5 lg:py-3 lg:pr-8 lg:ml-6 ml-4">
          <Logo />
        </div>
        <div
          className={clsx(
            "absolute bg-white top-[100%] w-full z-[100] ease-in-out duration-300",
            "lg:relative lg:top-0 lg:flex lg:items-center lg:h-full lg:flex-1 lg:visible lg:left-0 lg:opacity-100",
            isOpenMenu
              ? "visible left-0 opacity-100"
              : "left-[100%] invisible opacity-0"
          )}
        >
          <ul
            className={clsx(
              "flex-col gap-3 text-primary flex",
              "lg:flex-row lg:flex-1 lg:gap-6 lg:px-8 lg:items-center lg:h-full"
            )}
          >
            {navLefts.map((link) => (
              <li key={link.href}>
                <LinkItem
                  href={link.href}
                  className={clsx(
                    "py-3 px-3 w-full border-b-[1px] border-primary flex justify-between",
                    "lg:border-none"
                  )}
                >
                  {link.title}
                  <ChevronRight className="lg:hidden" />
                </LinkItem>
              </li>
            ))}
          </ul>
          <ul
            className={clsx(
              "flex flex-col text-white bg-primary relative before:absolute before:content-[''] before:right-0 before:h-[30px] before:w-[1px] before:bg-white before:top-1/2 before:transform before:-translate-1/2",
              "lg:flex-row lg:h-full lg:gap-6 lg:items-center lg:px-6"
            )}
          >
            {navRights.map((link) => (
              <li key={link.href}>
                <LinkItem
                  href={link.href}
                  className={clsx(
                    "py-3 px-3 w-full border-b-[1px] border-gray-400 flex justify-between",
                    "lg:border-none"
                  )}
                >
                  {link.title}
                  <ChevronRight className="lg:hidden" />
                </LinkItem>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex h-full">
          <button
            className="p-5 bg-primary h-full flex items-center justify-center"
            onClick={() => {
              setIsOpenSearch(true);
            }}
          >
            <Search color="#fff" className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          <button
            className="p-5 h-full flex items-center justify-center lg:hidden"
            onClick={() => {
              setIsOpenMenu((prev) => !prev);
            }}
          >
            <Menu className="text-primary text-sm w-5 h-5 lg:w-6 lg:h-6" />
          </button>
        </div>
      </div>

      <div
        className={clsx(
          "bg-primary absolute top-0 right-0 w-full h-full flex items-center justify-center duration-700 transition-all z-[100]",
          isOpenSearch ? "translate-x-0 visible" : "translate-x-full invisible"
        )}
      />
      <div
        className={clsx(
          "absolute container flex items-center h-full transition-opacity duration-500 delay-300 px-3 lg:px-0 z-[100]",
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
        <div className="px-4 bg-primary h-full flex items-center justify-center -mr-3 lg:mr-0">
          <X color="#fff" size={24} onClick={() => setIsOpenSearch(false)} />
        </div>
      </div>
      <div
        className={clsx(
          "absolute top-full w-full bg-white duration-700 flex justify-center p-3 lg:p-0 z-[100]",
          isOpenSearch ? "max-h-[100vh] visible" : "max-h-0 invisible"
        )}
      >
        <div className="container overflow-y-auto pt-3 lg:px-10 lg:pt-5">
          <p className="cols-span-12 mb-6 text-xs lg:mb-10 text-gray-500">
            Hit enter to search or ESC to close
          </p>
          <div className="grid grid-cols-12 gap-5">
            {menuData.map((menu) => (
              <div
                key={menu.title}
                className="col-span-12 lg:col-span-3 lg:border-none border-b-[1px] border-secondary"
              >
                <h3 className="text-secondary eyebrow pb-3 text-gold-700 md:pb-5 text-sm font-semibold">
                  {menu.title}
                </h3>
                <ul>
                  {menu.items.map((item) => (
                    <li
                      key={item.href}
                      className="body-text-small-strong mb-3 block w-fit py-0 md:mb-1 md:py-1.5 text-sm"
                    >
                      <LinkItem
                        href={item.href}
                        className="text-primary font-medium"
                      >
                        {item.title}
                      </LinkItem>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
