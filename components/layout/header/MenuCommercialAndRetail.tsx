"use client";

import clsx from "clsx";
import { commercialRetailMenu } from "@/data/header";
import MenuBlock from "./MenuBlock";
import MenuNavigationButton from "./MenuNavigationButton";

export default function MenuCommercialAndRetail({
  onBack,
}: {
  onBack: () => void;
}) {
  return (
    <div className="bg-white w-full container2124">
      <MenuNavigationButton onClick={onBack} actionType="back">
        Commercial & Retail
      </MenuNavigationButton>

      <div className="grid grid-cols-12 gap-[50px]">
        <div className="col-span-12 lg:col-span-8">
          <div className="grid grid-cols-12 px-3 gap-x-10 w-full">
            {commercialRetailMenu.map((menuItem) => (
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
      </div>
    </div>
  );
}
