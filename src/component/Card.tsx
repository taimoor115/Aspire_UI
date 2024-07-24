import { CardProps } from "../lib/utils/types";

const Card = ({ icon, title, description, id }: CardProps) => {
  return (
    <div
      key={id}
      className="flex h-56 select-none flex-col rounded-md bg-[#F6F5F8] lg:h-[287px]"
    >
      <div className="p-6 md:p-7 lg:p-10">
        <img
          src={icon}
          alt="icon"
          className="h-11 w-11 rounded-[10px] md:h-11 md:w-11 lg:h-[70px] lg:w-[70px]"
        />
        <p className="mt-3 text-3xl font-bold text-primary md:text-3xl md:leading-[40px] lg:mt-5 lg:text-4xl lg:leading-[49.8px]">
          {title}
        </p>
        <p className="mt-4 line-clamp-3 text-xs text-primary lg:mt-[10px] lg:text-sm lg:font-normal lg:leading-[19.38px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
