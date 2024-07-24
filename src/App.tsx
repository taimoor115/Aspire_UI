import About from "./component/About";
import Brand from "./component/Brand";
import Carousel from "./component/Carousel";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Queries from "./component/Queries";
import Service from "./component/Service";
import Team from "./component/Team";

const App = () => {
  return (
    <>
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
      <Queries />
      <Footer />
    </>
  );
};

export default App;
