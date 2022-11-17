import React from "react";

const variants = {
  default: "bg-white/10",
  selected: "bg-black/20",
  unselected: "bg-transparent",
};

interface Props {
  children: React.ReactNode;
  props?: any;
  className?: string;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  isDisabled?: boolean;
  variant?: "default" | "selected" | "unselected";
}

export const Button = ({
  children,
  props,
  onClick,
  className,
  isDisabled = false,
  variant = "default",
}: Props) => {
  return (
    <button
      {...props}
      onClick={onClick}
      isDisabled={isDisabled}
      className={`rounded py-2 px-4 text-sm ${className} ${variants[variant]}`}
    >
      {children}
    </button>
  );
};
