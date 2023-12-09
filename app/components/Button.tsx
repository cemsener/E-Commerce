import React from "react";
import classNames from "classnames";

interface ButtonProps {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "tertiary";
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({
  size = "md",
  variant = "primary",
  type = "button",
  children,
  className,
  onClick,
}: ButtonProps) => {
  const classes = classNames(
    "rounded-md shadow",
    {
      "text-slate-50 bg-indigo-600 hover:bg-indigo-700": variant === "primary",
      "text-slate-900 bg-slate-50 hover:bg-slate-100": variant === "secondary",
      "text-slate-50 bg-red-600 hover:bg-red-700": variant === "tertiary",
      "text-sm py-1 px-3": size === "sm",
      "px-4 py-2": size === "md",
      "text-lg py-3 px-6": size === "lg",
    },
    className
  );
  return (
    <button className={classes} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
