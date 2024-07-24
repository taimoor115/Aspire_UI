import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { C1, C2, C3, C4 } from "../assets/images";

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
    pauseOnHover: false,
    initialSlide: 0,
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
    <section className="container max-w-[1440px]">
      <div className="px-8 py-12 md:px-32 md:py-20 lg:px-48 lg:py-28">
        <div className="flex justify-center">
          <p className="text-center text-base font-medium leading-[27.04px] text-primary md:text-[18px] lg:text-[22px]">
            Trusted by 1000k plus customers
          </p>
        </div>
        <Slider {...settings} className="mt-14">
          <div>
            <img className="h-6 object-cover py-1 md:h-8 lg:h-9" src={C1} />
          </div>
          <div>
            <img className="h-6 object-cover py-1 md:h-8 lg:h-9" src={C2} />
          </div>
          <div>
            <img className="h-6 object-cover py-1 md:h-8 lg:h-9" src={C3} />
          </div>
          <div>
            <img className="h-6 object-cover py-1 md:h-8 lg:h-9" src={C4} />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;
