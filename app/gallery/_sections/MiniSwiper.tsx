"use client";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Swiper as SwiperType } from "swiper"; // Import Swiper type
import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
    <AnimatePresence>
      <motion.div
        initial={{ bottom: "-100%" }}
        animate={{ bottom: "1.5%" }}
        exit={{ bottom: "-100%" }}
        transition={{ duration: 1, delay: 2 }}
        className={` absolute  h-[135px] w-1/2 bottom-[0.8rem] right-[0.5rem]  z-999  `}
      >
        <Swiper
          ref={swiperRef}
          onSlideChange={onSlideChange}
          slidesPerView={3}
          spaceBetween={10}
          className="size-full"
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
                className="w-full h-full select-none block md:object-cover object-contain  "
                src={image}
                alt="SwipperImage"
              />
              {/* overlay */}
              <div className="absolute top-0 left-0 w-full h-full cursor-pointer"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </AnimatePresence>
  );
}

export default MiniSwiper;
