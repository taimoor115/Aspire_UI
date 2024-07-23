import { about, arrowRightIcon } from "../assets/images";

const About = () => {
  return (
    <section className="container">
      <div className="md: bg-[#0A85EA] px-4 py-6 md:px-9 md:py-14 lg:px-40 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:gap-x-4">
          <div className="flex flex-col">
            <p className="text-3xl font-bold text-white md:text-5xl lg:text-[56px] lg:font-bold lg:leading-[60px]">
              About our company
            </p>
            <div className="mt-5 flex items-end md:mt-14 md:gap-x-1 lg:mt-[60px] lg:gap-x-2">
              <p className="text-xs text-white md:text-sm lg:text-[16px] lg:font-medium lg:leading-[19.66px]">
                Learn More
              </p>
              <img src={arrowRightIcon} alt="arrow icon" className="mb-1" />
            </div>
          </div>
          <div className="text-paragraph mt-5 space-y-2 text-xs md:mt-0 md:space-y-3 md:text-xs lg:mt-0 lg:space-y-4 lg:text-base lg:font-normal lg:leading-[19.38px]">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo
            </p>
          </div>
          <div className="mt-10 md:col-span-2 md:mt-20 lg:col-span-2 lg:mt-28">
            <img src={about} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
