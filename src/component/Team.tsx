import { rightArrowColored } from "../assets/icon";
import { teamData } from "../lib/utils/contants";
import Button from "./Button";
import TeamCard from "./TeamCard";

const Team = () => {
  return (
    <section className="container">
      <div className="select-none px-5 py-20 md:px-7 md:py-24 lg:px-24 lg:py-32">
        <div className="flex justify-center">
          <Button className="bg-[#F63A611A] px-[15px] py-[5px] text-[12px] font-medium text-secondary">
            Out Team
          </Button>
        </div>
        <div className="mt-5">
          <h1 className="text-center font-serif text-4xl font-bold text-primary md:text-5xl lg:text-[56px] lg:leading-[60px]">
            Meet out dream Team
          </h1>
        </div>
        <div className="mt-5">
          <p className="text-center text-[10px] font-normal md:text-sm lg:text-base">
            We’re dedicated group of Sed ut perspiciatis unde omnis iste natus
            error sit voluptatem accusantium doloremque laudantium
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4">
          {teamData.map((team) => (
            <TeamCard
              url={team.url}
              key={team.id}
              name={team.name}
              designation={team.desgination}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 bg-grayBackground px-3 py-16 md:grid-cols-1-1.7 md:px-6 md:py-16 lg:grid-cols-1-1.7 lg:px-12 lg:py-16">
          <div className="text-xl font-medium text-primary md:text-2xl lg:pl-3 lg:text-3xl lg:leading-[34.41px]">
            Join our team
          </div>
          <div>
            <div className="mt-4 md:mt-0 lg:mt-0">
              <p className="text-[10px] md:text-xs lg:text-sm lg:leading-[19.38px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque <br />
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi <br />
                architecto beatae vitae dicta sunt explicabo.
              </p>
              <div className="mt-3 flex items-center gap-x-1">
                <p className="text-[10px] font-medium text-secondary md:text-sm lg:text-base">
                  View Current Openings
                </p>
                <img src={rightArrowColored} alt="icon" className="h-2.5 w-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
