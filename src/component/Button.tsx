import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}
const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={twMerge(
        "text-white bg-secondary text-md rounded-full",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
