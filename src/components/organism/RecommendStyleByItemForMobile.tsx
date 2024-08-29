"use client";
import { TStyle } from "@/types/DatabaseTypes";
import { Svg } from "@/components/atoms";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { StyleCard } from "../molecules/StyleCard";
const RecommendStyleByItemForMobile = ({
  data,
}: {
  data: { name: string; productId: string; style: TStyle[] }[];
}) => {
  return data.map((item) => {
    return (
      <li key={item.name} className="pb-[138px] mobile:pb-10">
        <p className="flex w-full items-center justify-between border-b-2 pb-2">
          <span className="mobile:text-b-regular overflow-hidden text-ellipsis whitespace-nowrap text-h-5-regular text-gray-450">
            {item.name}
          </span>
          <Link
            className="ml-2 flex items-center whitespace-nowrap mobile:text-b-2-regular"
            href={`/style/${item.productId}`}
          >
            SEARCH ALL
            <Svg id="arrow-up-right" size={28} />
          </Link>
        </p>
        <Swiper
          slidesPerView={3}
          spaceBetween={8}
          className="mt-6 flex w-full justify-start gap-4 mobile:gap-2"
          wrapperClass="w-full"
        >
          {item.style.map((style) => {
            return (
              <SwiperSlide
                key={style._id}
                className="w-[calc(25%-1rem)] min-w-[150px] max-w-[220px]"
              >
                {/* <figure className="relative w-full pt-[120%]">
                  <Image
                    className="object-cover"
                    sizes="(max-width:540px) 100vw"
                    fill
                    src={style.image}
                    alt=""
                  />
                  <figcaption className="sr-only">
                    {style.hashtag.join()}
                  </figcaption>
                </figure> */}
                <StyleCard style={style} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </li>
    );
  });
};
export default RecommendStyleByItemForMobile;
