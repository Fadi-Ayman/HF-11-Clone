"use client";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import { useEffect, useRef } from "react";
import CustomPointer from "../../_components/OneUseComponents/CustomPointer";

type PageSwiperProps = {
  images: string[];
  activeIndex: number;
  handleImageChange: React.Dispatch<React.SetStateAction<number>>;
};

function PageSwiper({
  images,
  activeIndex = 0,
  handleImageChange,
}: PageSwiperProps) {
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideTo(activeIndex);
    }
  }, [activeIndex]);

  const onSlideChange = (swiper: SwiperType) => {
    handleImageChange(swiper.activeIndex);
  };

  return (
    <Swiper
      ref={swiperRef}
      onSlideChange={onSlideChange}
      className="w-full h-full relative "
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            className={`w-full h-full block object-contain  sm:object-cover  `}
            src={image}
            alt="SwipperImage"
          />
          {/* overlay */}
          <div className="absolute top-0 left-0 w-full h-full "></div>
        </SwiperSlide>
      ))}
      <CustomPointer />
    </Swiper>
  );
}

export default PageSwiper;
