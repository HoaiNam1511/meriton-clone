"use client";

import { useState } from "react";
import clsx from "clsx";
import { residentialMenu, residentialRentMenu } from "@/data/header";
import Image from "next/image";
import MenuButton from "./MenuButton";
import MenuBlock from "./MenuBlock";
import MenuNavigationButton from "./MenuNavigationButton";

export default function MenuResidential({ onBack }: { onBack: () => void }) {
  const tabs = ["buy", "rent"];
  const [tabActive, setTabActive] = useState(tabs[0]);

  return (
    <div className="bg-white w-full container2124">
      <MenuNavigationButton onClick={onBack} actionType="back">
        Residential
      </MenuNavigationButton>

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
          <div className={clsx("col-span-9 gap-4 hidden", "lg:flex")}>
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
