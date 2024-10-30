"use client";
import React from "react";
import Svg from "./Svg";
import { useRouter } from "next/navigation";

const ModalCloseBtn = ({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) => {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };
  return (
    <button
      onClick={onClick ?? handleClose}
      className={className ? className : `absolute right-4 top-4 z-20`}
    >
      <Svg id="cancel" size={18} color="#A0A0A0" />
    </button>
  );
};

export default ModalCloseBtn;
