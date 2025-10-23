import { INavData } from "@/interfaces";
import MenuButton from "./MenuButton";

export default function MenuBlock({
  title,
  data,
}: {
  title: string;
  data: INavData[];
}) {
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
