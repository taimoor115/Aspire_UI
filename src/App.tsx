import {
  About,
  Brand,
  Carousel,
  Footer,
  Hero,
  Navbar,
  Queries,
  Service,
  Team,
} from "./component";
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
