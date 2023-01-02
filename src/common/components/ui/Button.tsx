import React from "react";

const variants = {
  default: "bg-white/10 hover:bg-black/10",
  selected: "bg-black/20 hover:bg-black/30",
  unselected: "bg-transparent hover:bg-black/10",
  black: "bg-gray-700 text-white hover:bg-gray-800",
  ghost: "",
};

interface Props {
  children: React.ReactNode;
  props?: any;
  className?: string;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  isDisabled?: boolean;
  variant?: "default" | "selected" | "unselected" | "black" | "ghost";
  ariaLabel: string;
}

export const Button = ({
  children,
  props,
  onClick,
  className = "",
  isDisabled = false,
  variant = "default",
  ariaLabel,
}: Props) => {
  return (
    <button
      {...props}
      onClick={onClick}
      disabled={isDisabled}
      className={`rounded py-2 px-4 text-sm dark:text-gray-200 font-semibold ${className} ${variants[variant]}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};
