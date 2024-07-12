import Link from "next/link";
import React from "react";

interface Tbutton {
  type?: "submit" | "button";
  size: "xs" | "sm" | "md" | "lg";
  color: "primary" | "secondary";
  shadow?: boolean;
  round?: boolean;
  disabled?: boolean;
  className?: string;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}
const BasicButton = ({
  type,
  size,
  color = "primary",
  shadow = false,
  round = false,
  disabled = false,
  className,
  href,
  onClick,
  children,
}: Tbutton) => {
  const sizeStyle = {
    xs: "h-6 w-full text-b-4-regular",
    sm: "h-9 w-full text-b-2-regular",
    md: "h-[52px] w-full text-b-0-regular",
    lg: "h-16 w-full text-b-0-regular",
  };
  const colorStyle = {
    primary: "bg-black text-white",
    secondary: "border border-gray-300 text-gray-800",
    disabled: "bg-gray-200 text-gray-400",
  };

  if (!disabled) {
    if (href) {
      return (
        <Link
          href={disabled ? "#" : href}
          className={`flex items-center justify-center ${!disabled ? colorStyle[color] : colorStyle["disabled"]} ${sizeStyle[size]} ${round ? "rounded" : ""} ${className}`}
        >
          {children}
        </Link>
      );
    }
  }
  if (onClick || type) {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${!disabled ? colorStyle[color] : colorStyle["disabled"]} ${sizeStyle[size]} ${round ? "rounded" : ""} ${shadow ? "shadow-lg" : ""} ${className}`}
      >
        {children}
      </button>
    );
  }
  return (
    <div
      className={`flex items-center justify-center ${!disabled ? colorStyle[color] : colorStyle["disabled"]} ${sizeStyle[size]} ${round ? "rounded" : ""} ${shadow ? "shadow-lg" : ""} ${className}`}
    >
      {children}
    </div>
  );
};
export default BasicButton;
