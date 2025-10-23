import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

export default function MenuButton({
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
