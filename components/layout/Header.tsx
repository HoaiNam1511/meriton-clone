"use client";

import { Search, X, Menu, ChevronRight, ChevronLeft } from "lucide-react";
import { ButtonHTMLAttributes, useEffect, useState } from "react";
import clsx from "clsx";

import Logo from "@/public/icons/Logo";
import {
  NavLeft,
  navLefts,
  navRights,
  residentialMenu,
  residentialRentMenu,
  searchMenu,
} from "@/data/header";
import { INavData } from "@/interfaces";
import Image from "next/image";

function MenuButton({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={clsx(
        "relative before:absolute before:bottom-0 before:left-0 before:h-[1px] before:w-full before:origin-left before:scale-x-0 before:bg-[#bc955c] before:transition-transform before:duration-500 hover:before:scale-x-100",
        className
      )}
    >
      {children}
    </button>
  );
}

function MenuBlock({ title, data }: { title: string; data: INavData[] }) {
  return (
    <div>
      <h3 className="text-secondary eyebrow pb-3 text-gold-700 md:pb-5 text-sm font-semibold">
        {title}
      </h3>
      <ul>
        {data.map((item) => (
          <li
            key={item.href}
            className="body-text-small-strong mb-3 block w-fit py-0 md:mb-1 md:py-1.5 text-sm"
          >
            <MenuButton className="text-primary font-medium">
              {item.title}
            </MenuButton>
            <p className="text-[12px] lg:text-[16px] mt-3 text-gray-500">
              {item.subtitle}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MenuResidential({ onBack }: { onBack: () => void }) {
  const tabs = ["buy", "rent"];
  const [tabActive, setTabActive] = useState(tabs[0]);

  return (
    <div className="bg-white w-full container2124">
      <MenuButton
        className={clsx(
          "py-5 px-3 w-full border-b-[1px] border-secondary flex gap-2 text-primary",
          "lg:hidden"
        )}
        onClick={onBack}
      >
        <ChevronLeft size={20} />
        Residential
      </MenuButton>

      <div
        className={clsx(
          "w-full border-secondary flex gap-3 px-3 border-b-[1px]",
          "lg:mb-10"
        )}
      >
        {tabs.map((tab) => (
          <MenuButton
            className={clsx("py-5 capitalize relative text-primary", {
              "after:absolute after:content-[''] after:h-[2px] after:w-full after:bg-amber-700 after:bottom-0 after:left-0":
                tabActive === tab,
            })}
            onClick={() => setTabActive(tab)}
            key={tab}
          >
            {tab}
          </MenuButton>
        ))}
      </div>

      {tabActive === tabs[0] ? (
        <div className="grid grid-cols-12 gap-[50px]">
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-12 px-3 gap-x-10 w-full">
              {residentialMenu.map((menuItem) => (
                <div
                  key={menuItem.href}
                  className={clsx(
                    "col-span-12 text-primary border-b-[1px] border-secondary py-5",
                    "lg:col-span-6 not-first:border-none"
                  )}
                >
                  <MenuBlock
                    title={menuItem.title}
                    data={menuItem?.children ?? []}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-4 py-5 hidden lg:flex flex-col items-start">
            <div className="w-[402px] h-[288px] aspect-square relative ">
              <Image
                src="/images/I10_South_Living_Lv87_3B_Dusk.webp"
                alt="I10_South_Living_Lv87_3B_Dusk.webp"
                fill
              />
            </div>

            <MenuButton className="text-primary mt-3">Cypress Palms</MenuButton>
            <p className="text-sm text-gray-500">
              The highest residences on the Gold Coast
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-12 px-3 lg:mb-10">
          {residentialRentMenu.map((menuItem) => (
            <div
              key={menuItem.href}
              className="col-span-12 lg:col-span-3 text-primary border-b-[1px] lg:border-none border-secondary py-5 lg:not-first:hidden"
            >
              <MenuBlock
                title={menuItem.title}
                data={menuItem?.children ?? []}
              />
            </div>
          ))}
          <div className="col-span-9 flex gap-4">
            {residentialRentMenu?.[1]?.children?.map((menuItem) => (
              <div>
                <div className="relative w-full h-[15rem] overflow-hidden">
                  <Image
                    src={menuItem?.image ?? ""}
                    fill
                    alt={menuItem?.image ?? ""}
                    className="object-cover hover:scale-110  duration-300"
                  />
                </div>

                <MenuButton className="text-primary font-medium">
                  {menuItem.title}
                </MenuButton>
                <p className="text-[12px] lg:text-[16px] mt-3 text-gray-500">
                  {menuItem.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [menuActive, setMenuActive] = useState<NavLeft | null>(null);

  useEffect(() => {
    function handleResize() {
      if (isOpenSearch || isOpenMenu) {
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
          isOpenSearch || isOpenMenu || menuActive
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
              "flex-col text-primary flex",
              "lg:flex-row lg:flex-1 lg:gap-6 lg:px-8 lg:items-center lg:h-full"
            )}
          >
            {navLefts.map((link) => (
              <li key={link.href}>
                <MenuButton
                  className={clsx(
                    "py-5 px-3 w-full border-b-[1px] border-primary flex justify-between",
                    "lg:border-none"
                  )}
                  onClick={() =>
                    setMenuActive((prev) =>
                      prev === link.href ? null : (link.href as NavLeft)
                    )
                  }
                >
                  {link.title}
                  <ChevronRight className="lg:hidden" size={20} />
                </MenuButton>
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
                <MenuButton
                  className={clsx(
                    "py-5 px-3 w-full border-b-[1px] border-gray-400 flex justify-between",
                    "lg:border-none"
                  )}
                >
                  {link.title}
                  <ChevronRight className="lg:hidden" size={20} />
                </MenuButton>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={clsx(
            "absolute top-full w-full bg-white duration-400 z-[100] delay-[0ms]",
            "lg:left-0 lg:right-0 lg:flex lg:overflow-y-hidden lg:container lg:mx-auto lg:justify-center",
            menuActive === NavLeft.RESIDENTIAL
              ? "visible left-0 lg:max-h-[900px]"
              : "invisible left-full lg:max-h-0"
          )}
        >
          <MenuResidential
            onBack={() => {
              setMenuActive(null);
            }}
          />
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
              setMenuActive(null);
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
            {searchMenu.map((menu) => (
              <div
                key={menu.title}
                className="col-span-12 lg:col-span-3 lg:border-none border-b-[1px] border-secondary"
              >
                <MenuBlock title={menu.title} data={menu.children} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
