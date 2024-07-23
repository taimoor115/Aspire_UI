import Hero from "./component/Hero";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <div className="">
      <div className="container">
        <Navbar />
        <hr className="mx-auto w-[90%]" />
      </div>
      <Hero />
    </div>
  );
};

export default App;
