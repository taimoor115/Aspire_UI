import About from "./component/About";
import Carousel from "./component/Carousel";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";

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
    </div>
  );
};

export default App;
