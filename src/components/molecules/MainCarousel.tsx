"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { TStyle } from "@/types/DatabaseTypes";

const MainCarousel = ({ list }: { list: TStyle[] }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={5}
      onSlideChange={() => console.log("slide Change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {list.map((style) => {
        return (
          <SwiperSlide key={style._id}>
            <figure className="h-[408px] w-[340px]">
              <Image
                style={{ objectFit: "cover" }}
                fill={true}
                alt=""
                src={style.image}
              />
              <figcaption className="sr-only">{style._id}</figcaption>
            </figure>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default MainCarousel;
