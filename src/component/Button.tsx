import { twMerge } from "tailwind-merge";
import { ButtonProps } from "../lib/utils/types";

const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "text-md rounded-full bg-secondary text-white",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
