import Image from "next/image";

interface UserImgProps {
  sizeType: "large" | "small";
}

export default function UserImg({ sizeType }: UserImgProps) {
  const style = {
    imgSize: sizeType === "large" ? "w-56 h-56" : "w-9 h-9",
    margin: sizeType === "large" ? "-mt-4" : "mt-[6px]",
  };

  return (
    <figure
      className={`${style.imgSize} ${style.margin} relative overflow-hidden rounded-full`}
    >
      <Image
        style={{ objectFit: "cover" }}
        fill={true}
        src="/svg/defaultProfile.svg"
        alt=""
        priority
      />
      <figcaption className="sr-only">유저 프로필 이미지</figcaption>
    </figure>
  );
}
