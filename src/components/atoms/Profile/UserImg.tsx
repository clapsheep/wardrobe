import Image from "next/image";

interface UserImgProps {
  sizeType: "large" | "small";
}

export default function UserImg({ sizeType }: UserImgProps) {
  const style = {
    imgSize: sizeType === "large" ? "w-64 h-64" : "w-9 h-9",
    margin: sizeType === "large" ? "-mt-4" : "mt-[6px]",
  };

  return (
    <figure
      className={`${style.imgSize} ${style.margin} relative overflow-hidden rounded-full bg-gray-300`}
    >
      <Image style={{ objectFit: "cover" }} fill={true} src="" alt="" />
      <figcaption className="sr-only">유저 프로필 이미지</figcaption>
    </figure>
  );
}
