"use client";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import CustomPointer from "../CustomPointer";
import { useRef } from "react";

type AboutContentTwoSwiperProps = {
  images: string[];
};

export default function AboutContentTwoSwiper({
  images,
}: AboutContentTwoSwiperProps) {
  const swiperRef = useRef<SwiperRef>(null);

  return (
    <Swiper ref={swiperRef} className="size-full relative">
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            className="w-full h-full block object-cover "
            src={image}
            alt="SwipperImage"
          />
        </SwiperSlide>
      ))}

      <CustomPointer place="home" ParentRef={swiperRef} />
    </Swiper>
  );
}
