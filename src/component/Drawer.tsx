import { IoReorderThreeOutline } from "react-icons/io5";
import { navItems } from "../lib/utils/contants";
import Button from "./Button";

const Drawer = () => {
  return (
    <div className="drawer block lg:hidden">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="drawer-button">
          <IoReorderThreeOutline className="text-4xl" />
        </label>
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu flex min-h-full w-72 flex-col justify-start gap-y-5 bg-white p-4 text-base-content">
          <h1 className="text-center font-bold">Products</h1>
          {navItems.map((item, index) => (
            <li className="rounded py-2 hover:bg-gray-500" key={index}>
              {item}
            </li>
          ))}
          <p>Login</p>
          <Button className="text-md rounded-full bg-secondary px-3 py-3 text-white">
            Get Started
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
