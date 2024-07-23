// interface CarouselProps {
//     url: string;
//     id: number;
//   }

// flex py-1 md:gap-x-6 md:py-2 lg:gap-x-8 lg:py-3"

import { C1, C2, C3, C4 } from "../assets/images";

//   const CarouselItem = ({ url, id }: CarouselProps) => {
//     return (
//       <>
//         <div key={id} >
//           {<img className="h-6 object-cover py-1 md:h-8 lg:h-9" src={url} />}
//         </div>
//       </>
//     );
//   };

//   export default CarouselItem;

interface CarouselProps {
  url: string;
  id: number;
}

const CarouselItem = ({ url, id }: CarouselProps) => {
  return (
    <>
      <div>
        {<img className="h-6 object-cover py-1 md:h-8 lg:h-9" src={C1} />}
      </div>
      <div>
        {<img className="h-6 object-cover py-1 md:h-8 lg:h-9" src={C2} />}
      </div>
      <div>
        {<img className="h-6 object-cover py-1 md:h-8 lg:h-9" src={C3} />}
      </div>
      <div>
        {<img className="h-6 object-cover py-1 md:h-8 lg:h-9" src={C4} />}
      </div>
    </>
  );
};

export default CarouselItem;
