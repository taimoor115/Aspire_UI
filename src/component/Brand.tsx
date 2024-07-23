import Button from "./Button";

const Brand = () => {
  return (
    <div className="container">
      <div className="select-none p-2 md:p-16 lg:p-24">
        <div className="bg-brand flex flex-col rounded-[10px]">
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
          {/* <div className="mt-10 flex justify-center">
            <div className="flex justify-between rounded-full border border-border bg-white px-4 py-1 shadow shadow-border">
              <input
                type="search"
                className="focus:outline-none"
                placeholder="Enter your email"
              />
              <Button className="font-sm whitespace-nowrap px-1 py-1 md:px-4 md:py-3 lg:px-4 lg:py-3">
                Get Started
              </Button>
            </div>
          </div> */}
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
