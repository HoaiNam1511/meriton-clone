import { ChevronRight, ChevronLeft } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

import clsx from "clsx";
import MenuButton from "./MenuButton";

interface IMenuNavigationButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  actionType?: "next" | "back";
}

export default function MenuNavigationButton({
  actionType = "next",
  ...props
}: IMenuNavigationButtonProps) {
  return (
    <MenuButton
      {...props}
      className={clsx(
        "py-5 px-3 w-full border-b-[1px] border-primary flex",
        "lg:border-none",
        actionType === "next" ? "justify-between" : "gap-2",
        props.className
      )}
    >
      {actionType === "back" && <ChevronLeft className="lg:hidden" size={20} />}
      {props.children}
      {actionType === "next" && (
        <ChevronRight className="lg:hidden" size={20} />
      )}
    </MenuButton>
  );
}
