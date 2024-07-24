import { FooterItemsProps } from "../lib/utils/types";

const FooterItems = ({ title, items }: FooterItemsProps) => {
  return (
    <div className="w-full">
      <h3 className="ml-4 text-sm font-medium md:text-sm lg:text-[18px] lg:leading-[22.12px]">
        {title}
      </h3>
      <ul className="ml-4 mt-5 flex flex-col gap-y-2 lg:gap-y-3">
        {items.map((item) => (
          <li
            key={item.id}
            className="whitespace-nowrap text-[10px] font-normal opacity-50 md:text-xs lg:text-base lg:leading-[19.38px]"
          >
            {item.item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterItems;
