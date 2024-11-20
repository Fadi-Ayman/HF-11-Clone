"use client";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import useScreenSize from "../_hooks/useScreenSize";
import { Swiper as SwiperType } from "swiper"; // Import Swiper type
import { useEffect, useRef, useState } from "react";

type PageSwiperProps = {
  images: string[];
  activeIndex: number;
  handleImageChange: React.Dispatch<React.SetStateAction<number>>;
};

interface MySwiper extends SwiperRef {
  getBoundingClientRect: () => {
    height: number;
  };
}

function MiniSwiper({
  images,
  activeIndex = 0,
  handleImageChange,
}: PageSwiperProps) {
  const swiperRef = useRef<MySwiper>(null);
  const [swiperHeight, setSwiperHeight] = useState(0);
  const { width ,height } = useScreenSize();

  useEffect(() => {
    if (swiperRef.current) {
      setSwiperHeight(swiperRef.current.getBoundingClientRect().height || 120);
    }

    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideTo(activeIndex);
    }
  }, [activeIndex, width]);

  const onSlideChange = (swiper: SwiperType) => {
    handleImageChange(swiper.activeIndex);
  };

  return (
    <Swiper
      ref={swiperRef}
      style={{
        bottom: `${swiperHeight + height / 50}px`,
      }}
      onSlideChange={onSlideChange}
      slidesPerView={width < 500 ? 2 : 3}
      spaceBetween={10}
      className={`absolute block w-[70%]  md:w-1/2 left-0  md:left-[23%]   z-999  `}
    >
      {images.map((image, index) => (
        <SwiperSlide
          className={`${
            index === activeIndex
              ? "filter-none opacity-90 md:opacity-100"
              : "[filter:grayscale(100%)] scale-90 opacity-35 md:opacity-70"
          } duration-200 relative`}
          onClick={() => handleImageChange(index)}
          key={index}
        >
          <img
            className="w-full h-full block md:object-cover object-contain  "
            src={image}
            alt="SwipperImage"
          />
          {/* overlay */}
          <div className="absolute top-0 left-0 w-full h-full cursor-pointer"></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MiniSwiper;
