import About from "./component/About";
import Brand from "./component/Brand";
import Carousel from "./component/Carousel";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Service from "./component/Service";
import Team from "./component/Team";

const App = () => {
  return (
    <div className="">
      <div className="container">
        <Navbar />
        <hr className="mx-auto w-[90%]" />
        <Hero />
      </div>

      <Carousel />
      <About />
      <Service />
      <Brand />
      <Team />
    </div>
  );
};

export default App;
