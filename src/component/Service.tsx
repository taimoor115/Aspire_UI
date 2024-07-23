import { cardData } from "../lib/utils/contants";
import Card from "./Card";

const Service = () => {
  return (
    <section className="container">
      <div className="flex flex-col flex-nowrap items-center px-6 py-12 lg:px-8 lg:py-24">
        <div className="md:w-[830px] lg:w-[905px]">
          <p className="text-center font-serif text-xl font-bold text-primary lg:text-[56px] lg:leading-[60px]">
            Our 12 years of together have given us much to be proud of
          </p>
        </div>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {cardData.map((item) => (
            <Card
              key={item.id}
              icon={item.icon}
              description={item.description}
              id={item.id}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
