import { TeamCardProps } from "../lib/utils/types";

const TeamCard = ({ name, designation, url }: TeamCardProps) => {
  return (
    <div>
      <div>
        <img
          src={url}
          alt="image"
          className="h-[150px] rounded-[10px] object-cover md:h-[240px] lg:h-[280px] lg:w-[280px]"
        />
      </div>
      <div className="mt-4">
        <p className="text-center text-[18px] text-base font-medium md:text-sm">
          {name}
        </p>
      </div>
      <div className="mb-16 mt-1.5">
        <p className="text-center text-xs text-primary md:text-sm lg:text-base">
          {designation}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
