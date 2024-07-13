"use client";

import React, { useState } from "react";
import { Svg } from "@/components/atoms";

interface Tinput {
  id: string;
  type: "text" | "password";
  placeholder: string;
  label?: string;
  className?: string;
}

const BasicInput = ({ id, type, placeholder, label, className }: Tinput) => {
  const [inputTypeState, setInputTypeState] = useState(type);

  const handleVisibility = () => {
    setInputTypeState((prevType) =>
      prevType === "password" ? "text" : "password",
    );
  };

  const visibilityLabel = {
    true: "비밀번호가 화면에 문자로 보여지도록 합니다.",
    false: "비밀번호가 화면에서 보여지지 않도록 합니다.",
  };

  return (
    <div
      className={`relative flex w-full items-center justify-center ${className}`}
    >
      <label
        className={`${label ? "" : "sr-only"} w-[68px] text-b-4-semibold`}
        htmlFor={id}
      >
        {label ?? placeholder}
      </label>
      <input
        id={id}
        name={id}
        type={inputTypeState}
        className="h-full w-full rounded-sm border border-gray-300 px-[14px] py-[10px] text-b-2-regular placeholder:text-gray-300"
        placeholder={placeholder}
      />
      {type !== "password" ? (
        ""
      ) : (
        <button
          className="absolute right-3"
          aria-label={
            inputTypeState === "password"
              ? visibilityLabel.false
              : visibilityLabel.true
          }
          type="button"
          onClick={handleVisibility}
        >
          <Svg
            size={24}
            id={
              inputTypeState === "password" ? "visibility_on" : "visibility_off"
            }
          />
        </button>
      )}
    </div>
  );
};

export default BasicInput;
