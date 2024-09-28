"use client";
import Link from "next/link";
import React from "react";
import { useFormStatus } from "react-dom";
import Svg from "./Svg";
import Image from "next/image";

interface Tbutton {
  type?: "submit" | "button";
  form?: string;
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
  form,
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
    xs: "h-6 text-b-4-regular",
    sm: "h-9 text-b-2-regular",
    md: "h-[52px] text-b-0-regular",
    lg: "h-16 text-b-0-regular",
  };
  const colorStyle = {
    primary: "bg-black text-white",
    secondary: "border border-gray-300 text-gray-800",
    disabled: "bg-gray-200 text-gray-400",
  };

  const { pending } = useFormStatus();

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
        form={form}
        onClick={onClick}
        disabled={disabled || pending}
        className={`${!disabled ? colorStyle[color] : colorStyle["disabled"]} ${sizeStyle[size]} ${round ? "rounded" : ""} ${shadow ? "shadow-lg" : ""} ${className}`}
      >
        {pending ? (
          <div className="flex items-center justify-center">
            <Image
              src="/spinner/buttonPendingSpinner.svg"
              alt="로딩 중"
              width={24}
              height={24}
            />
          </div>
        ) : (
          children
        )}
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
