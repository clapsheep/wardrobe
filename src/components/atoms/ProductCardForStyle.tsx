import Image from "next/image";
import Svg from "./Svg";
import { TProduct } from "@/types/DatabaseTypes";
import Link from "next/link";

type Props = {
  item: TProduct;
  size: string;
};

const ProductCardForStyle = ({ item, size }: Props) => {
  return (
    <li className="group relative aspect-square w-full">
      <Link
        href={item.site}
        target="_blank"
        className="absolute inset-0 z-10 flex items-end justify-start bg-black p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-40"
      >
        <span className="z-20 text-balance text-b-3-regular text-white">
          상품링크로 이동하기
        </span>
      </Link>
      <div className="absolute left-2 top-[-8px] z-20">
        <span className="absolute left-0 top-0 my-[2px] block w-full text-center text-b-3-regular text-white">
          {size}
        </span>
        <Svg size={24} id="sizeBadge" />
      </div>
      <Image objectFit="contain" src={item.image} alt={item.name} fill />
    </li>
  );
};

export default ProductCardForStyle;
