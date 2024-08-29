"use client";
import React from "react";
import Svg from "./Svg";
import { useRouter } from "next/navigation";

const ModalCloseBtn = () => {
  const router = useRouter();

  const handleClose = () => {
    router.back();
  };
  return (
    <button
      onClick={handleClose}
      className="absolute right-4 top-4 z-20 text-xl font-bold text-white"
    >
      <Svg id="cancel" size={18} color="#A0A0A0" />
    </button>
  );
};

export default ModalCloseBtn;
