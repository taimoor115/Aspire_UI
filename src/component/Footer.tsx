import { footerData } from "../lib/utils/contants";
import FooterItems from "./FooterItems";

const Footer = () => {
  return (
    <section className="container">
      <div className="bg-primary py-12 md:px-14 md:py-24 lg:px-32 lg:py-32">
        <div className="gird-cols-1 md:grid-cols-1.2-1 lg:grid-cols-1.2-1 grid gap-y-10 text-[#FFFFFF] md:gap-y-0 lg:gap-y-0">
          <div className="flex gap-x-5">
            {footerData?.map((data) => (
              <FooterItems
                key={data.id}
                title={data.title}
                items={data.children}
              />
            ))}
          </div>
          <div className="ml-4 md:px-8 lg:px-10">
            <h1 className="text-sm font-medium md:text-base lg:text-[18px] lg:leading-[22.12px]">
              Download
            </h1>
            <p className="mt-4 text-xs opacity-50 md:text-sm lg:text-base">
              Join millions of people who build a <br /> fully integrated sales
              and maketing <br /> solution.
            </p>
          </div>
        </div>
        <div className="px-1 py-10 opacity-50 md:py-14 lg:py-16">
          <hr />
        </div>
        <div className="mx-2 flex justify-between py-5 text-[9px] text-[#FFFFFF] md:py-7 md:text-sm lg:py-10 lg:text-base">
          <p>Copyright @2023 Aspire. All Rights Reserved.</p>
          <p>Terms & Conditions ~ Privacy Policy</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
