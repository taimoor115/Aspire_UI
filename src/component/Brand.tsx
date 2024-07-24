import Button from "./Button";

const Brand = () => {
  return (
    <div className="container">
      <div className="select-none p-2 md:p-16 lg:p-24">
        <div className="flex flex-col rounded-[10px] bg-brand">
          <div className="mt-16 md:mt-20 lg:mt-24">
            <p className="text-center font-serif text-3xl font-bold text-white md:px-16 md:text-5xl lg:px-20 lg:text-[56px] lg:leading-[60px]">
              Get Started with Aspire Today
            </p>
          </div>

          <div className="mt-5 md:px-16 lg:px-[300px]">
            <p className="px-10 font-serif text-[10px] font-normal text-white md:text-sm lg:text-[16px] lg:leading-[19.38px]">
              We are self-service data analytics software that lets you create
              visually appealing data visualisations and insightful dashboards
              in minutes.
            </p>
          </div>
          <div className="mt-10 flex justify-center md:mt-[42px] lg:mt-[50px]">
            <div className="flex rounded-full border-border bg-white px-2 py-2 shadow md:px-3 md:py-2 lg:px-6 lg:py-2">
              <input
                type="search"
                name="search"
                placeholder="Enter your work email"
                className="ps-2 text-sm focus:outline-none md:text-base"
              />

              <Button className="border-1 whitespace-nowrap border-secondary px-2 py-1.5 text-[9px] md:px-4 md:py-1.5 md:text-sm lg:py-2 lg:text-sm">
                Get Started
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <p className="mb-14 mt-5 text-xs text-white md:mb-16 lg:mb-20">
              No credit card required
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
