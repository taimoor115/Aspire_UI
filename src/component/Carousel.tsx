import Slider from "react-slick";
import { carouselItem } from "../lib/utils/contants";

const Carousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="container max-w-[1440px] bg-red-300">
      <div className="bg-base-200 px-10 py-12 md:px-32 md:py-20 lg:px-48 lg:py-28">
        <div className="flex justify-center">
          <p className="text-center text-base font-medium leading-[27.04px] text-primary md:text-[18px] lg:text-[22px]">
            Trusted by 1000k plus customers
          </p>
        </div>
        <Slider {...settings} className="mt-14 flex items-center">
          {carouselItem.map((item) => (
            <div
              className="flex py-1 md:gap-x-6 md:py-2 lg:gap-x-8 lg:py-3"
              key={item.id}
            >
              {
                <img
                  className="h-7 object-cover py-1 md:h-8 lg:h-9"
                  src={`/images/${item.url}.png`}
                />
                // index
              }
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;