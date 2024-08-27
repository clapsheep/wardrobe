"use client";
import { TStyle } from "@/types/DatabaseTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface StyleCardProps {
  style: TStyle;
}

export const StyleCard = ({ style }: StyleCardProps) => {
  return (
    <li
      key={style._id}
      className="relative w-[calc(25%-1rem)] min-w-[150px] max-w-[220px]"
    >
      <Link
        href={`/stylecard/${style._id}`}
        className="absolute left-0 top-0 z-10 h-full w-full bg-black opacity-0 hover:opacity-40"
      ></Link>
      <figure className="relative w-full pt-[120%]">
        <Image
          className="object-cover"
          sizes="(max-width:540px) 100vw"
          fill
          src={style.image}
          alt=""
        />
        <figcaption className="sr-only">{style.hashtag.join()}</figcaption>
      </figure>
    </li>
  );
};
