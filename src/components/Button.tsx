import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const baseClasses =
    "px-[35px] py-5 rounded-button text-center font-normal text-xl";

  const variantClasses = {
    primary: "bg-darkGreen text-white",
    secondary: "bg-green text-black",
    outline: "border border-darkGreen text-black",
  };

  return (
    <button
      className={twMerge(baseClasses, variantClasses[variant], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
