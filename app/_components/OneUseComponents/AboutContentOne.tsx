"use client";

import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "framer-motion";
import DynamicImages from "../DynamicImages";



const TimerImagesOne = [
  "/HomeImages/TimerImagesOne/1.jpg",
  "/HomeImages/TimerImagesOne/2.jpg",
  "/HomeImages/TimerImagesOne/3.jpg",
  "/HomeImages/TimerImagesOne/4.jpg",
  "/HomeImages/TimerImagesOne/5.jpg",
  "/HomeImages/TimerImagesOne/6.jpg",
  "/HomeImages/TimerImagesOne/7.jpg",
  "/HomeImages/TimerImagesOne/8.jpg",
  "/HomeImages/TimerImagesOne/9.jpg",
  "/HomeImages/TimerImagesOne/10.jpg",
  "/HomeImages/TimerImagesOne/11.jpg",
  "/HomeImages/TimerImagesOne/12.jpg",
  "/HomeImages/TimerImagesOne/13.jpg",
  "/HomeImages/TimerImagesOne/14.jpg",
  "/HomeImages/TimerImagesOne/15.jpg",
];


function AboutContentOne() {
  const textContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: textContainerRef,
    offset: ["start end", "end start"],
  });

  const oddTextTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    ["-50%", "0%"]
  );
  const evenTextTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    ["-50%", "-100%"]
  );



  return (
    <div className="flex flex-col w-full gap-6  lg:gap-14">
      {/* Title */}
      <h2 className="uppercase text-responsive-5xl font-bold">maniacs</h2>

      {/* description */}
      <p className="uppercase text-responsive-3xl leading-none tracking-tighter font-bold">
        Twins, born in Ukraine, raised in Canada. High School dropouts. Trained
        in Italy and California. Oilstainlab is their un-medicated vision, a
        pure manifest of automotive excess & Fun.
      </p>

      {/* Animated Text */}
      <div
        ref={textContainerRef}
        className="w-full h-full bg-[#d1d0d0b7]  relative aspect-square  
      lg:aspect-[1/0.9]  leading-[0.8] select-none  overflow-hidden uppercase font-bold"
      >
        {Array.from({ length: 10 }, (_, index) => (
          <motion.p
            style={{
              translateX:
                index % 2 === 0 ? oddTextTranslate : evenTextTranslate,
              translateY: "-50%",
            }}
            key={index}
            className="text-minMax-9xl   will-change-transform  whitespace-nowrap tracking-tighter"
          >
            maniacs * maniacs
          </motion.p>
        ))}

        {/* overlay */}
        <span className="absolute top-0 left-0 size-full block bg-cover bg-[url('/HomeImages/scrollTextAnimationSectionFour.avif')]  mix-blend-screen  z-[2]"></span>

        <DynamicImages images={TimerImagesOne} delayInSec={0.35} className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 w-[45%] md:w-[35%] h-[60%] md:h-[50%] " />

      </div>

      <div className="flex lg:gap-[20%] lg:justify-start lg:flex-row flex-col gap-3  ">

        <p className="text-sm font-bold leading-none">Double <br/> Vision</p>

        <p className="text-[17px] font-normal text-gray-500 leading-5 ">
Our founders “the twins” as commonly referred to by the industry, have been breaking rules and records; clinching world championships and responsible for 6.5 million street cars. Maniacally obsessed with forging vehicles, experiences and technologies beyond sanity. Inspired by those before them, Oilstainlab is a new generation of trouble makers, maniacs creating for maniacs.</p>

      </div>


    </div>
  );
}

export default AboutContentOne;
