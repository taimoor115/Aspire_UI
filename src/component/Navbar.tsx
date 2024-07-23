import { Logo } from "../assets/images";
import { navItems } from "../lib/utils/contants";
import Button from "./Button";
import Drawer from "./Drawer";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-3 py-5 md:px-2 lg:px-14">
      <div>
        <img src={Logo} alt="image" />
      </div>
      <ul className="hidden md:flex md:gap-x-3 lg:flex lg:gap-x-10">
        {navItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="hidden gap-4 md:flex md:items-center lg:flex lg:items-center">
        <p>Login</p>
        <Button className="px-3 py-1.5">Get Started</Button>
      </div>
      <div className="block md:hidden lg:hidden">
        <Drawer />
      </div>
    </nav>
  );
};

export default Navbar;
