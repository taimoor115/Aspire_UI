import Button from "./Button";

const Hero = () => {
  return (
    <section className="mt-12 flex flex-col items-center md:mt-[60px] lg:mt-20">
      <div className="max-w-96 md:max-w-[710px] lg:max-w-[835px]">
        <div className="flex justify-center">
          <div className="w-[90%] md:w-[700px] lg:w-[835px]">
            <h1 className="font-serif text-lg font-bold leading-9 md:text-[48px] md:leading-[48px] lg:text-[56px] lg:leading-[60px]">
              <div className="flex flex-col items-center justify-center">
                Multipurpose Website Templates
                <span>That boost your sales</span>
              </div>
            </h1>
          </div>
        </div>
        <div className="mt-3 flex justify-center">
          <div className="h-3.5 w-[90%] md:h-4 md:w-[570px] lg:h-[19px] lg:w-[613px]">
            <p className="text-center text-[9px] font-normal text-subline opacity-50 md:text-xs lg:text-sm">
              Empowering Your Financial Journey through Customized Asset
              Management Services
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center md:mt-[42px] lg:mt-[50px]">
          <div className="flex rounded-full border-border px-2 py-2 shadow md:px-3 md:py-2 lg:px-6 lg:py-2">
            <input
              type="search"
              name="search"
              placeholder="Enter your work email"
              className="ps-2 text-sm focus:outline-none md:text-base"
            />

            <Button className="border-1 whitespace-nowrap border-secondary px-2 py-1.5 text-[9px] md:px-4 md:py-1.5 md:text-lg lg:py-2 lg:text-lg">
              Get Started
            </Button>
          </div>
        </div>
        <div className="mt-2 flex justify-center md:mt-3 lg:mt-5">
          <p className="text-center text-xs opacity-[40%] lg:font-[400]">
            No credit card required
          </p>
        </div>

        <div className="flex justify-center">
          <div className="mt-10 max-h-[300px] max-w-[300px] rounded-lg border-[6px] border-black md:mt-16 md:max-h-[500px] md:max-w-[830px] md:border-8 lg:mt-20 lg:max-h-[522] lg:max-w-[857px] lg:border-8">
            <img
              src="/images/hero.png"
              alt="Hero image"
              className="h-full w-full border-b-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
