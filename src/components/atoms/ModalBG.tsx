"use client";
import { useRouter } from "next/navigation";

const ModalBG = ({ onClick }: { onClick?: () => void }) => {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };
  return (
    <div
      onClick={onClick ?? handleClose}
      className="absolute inset-0 bg-black opacity-50"
    ></div>
  );
};

export default ModalBG;
