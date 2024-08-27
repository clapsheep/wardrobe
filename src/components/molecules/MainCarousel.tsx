"use client";
import { TStyle } from "@/types/DatabaseTypes";
import Image from "next/image";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const MainCarouselDesktop = ({ list }: { list: TStyle[] }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={5}
      loop={true}
      wrapperClass="w-full"
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {list?.map((style) => {
        return (
          <SwiperSlide key={style._id}>
            <figure className="relative aspect-[3/4] max-h-[408px] min-h-[220px]">
              <Image
                priority
                sizes="40vw"
                className="object-contain"
                fill
                alt=""
                src={style.image}
              />
              <figcaption className="sr-only">
                {style.hashtag.join()}
              </figcaption>
            </figure>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export const MainCarouselMobile = ({ list }: { list: TStyle[] }) => {
  return (
    <Swiper
      className="w-full"
      // spaceBetween={10}
      slidesPerView={1}
      loop={true}
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      // onSlideChange={() => console.log("slide Change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {list?.map((style) => {
        return (
          <SwiperSlide key={style._id}>
            <figure className="relative h-[600px] w-full bg-black">
              <Image
                priority
                sizes="100vw"
                className="object-cover"
                fill
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
