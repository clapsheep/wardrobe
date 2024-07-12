"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { TStyle } from "@/types/DatabaseTypes";

const MainCarousel = ({ list }: { list: TStyle[] }) => {
  return (
    <Swiper
      className="w-full"
      spaceBetween={10}
      slidesPerView={5}
      loop={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      // onSlideChange={() => console.log("slide Change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {list.map((style) => {
        return (
          <SwiperSlide key={style._id}>
            <figure className="h-[408px] w-[340px]">
              <Image
                className="object-cover"
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
