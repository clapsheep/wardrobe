"use client";
import { TStyle } from "@/types/DatabaseTypes";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Svg } from "@/components/atoms";

interface StyleCardProps {
  style: TStyle;
}

export const StyleCard = ({ style }: StyleCardProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsBookmarked(!isBookmarked);
  };
  return (
    <div key={style._id} className="group relative max-w-[260px]">
      <Link href={`/style/${style._id}`} className="block">
        <div className="absolute inset-0 z-10 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-30"></div>
        <button
          type="button"
          onClick={handleBookmark}
          className="absolute right-2 top-2 z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <Svg
            size={28}
            id={isBookmarked ? "bookmark_true2" : "bookmark_false2"}
          />
        </button>
        <figure className="relative w-full pt-[120%]">
          <Image
            sizes="(max-width:540px) 100vw"
            fill
            src={style.image}
            className="object-cover"
            alt=""
          />
          <figcaption className="sr-only">{style.hashtag.join()}</figcaption>
        </figure>
      </Link>
    </div>
  );
};
