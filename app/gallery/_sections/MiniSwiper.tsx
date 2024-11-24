"use client";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Swiper as SwiperType } from "swiper"; // Import Swiper type
import { useEffect, useRef } from "react";

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
      slidesPerView={3}
      spaceBetween={10}
      className={` absolute h-[135px] w-1/2 bottom-[calc(1.5dvh+140px)] left-[23%]  z-999  `}
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
