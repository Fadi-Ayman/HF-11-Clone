"use client";

import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "framer-motion";
import DynamicImages from "../DynamicImages";

function AboutContentOneImages({ images }: { images: string[] }) {
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
    <div
      ref={textContainerRef}
      className="w-full h-full bg-[#d1d0d0b7]  relative aspect-square  
      lg:aspect-[1/0.9]  leading-[0.8] select-none overflow-hidden uppercase font-bold"
    >
      {Array.from({ length: 10 }, (_, index) => (
        <motion.p
          style={{
            translateX: index % 2 === 0 ? oddTextTranslate : evenTextTranslate,
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

      <DynamicImages
        images={images}
        delayInSec={0.35}
        className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 w-[45%] md:w-[35%] h-[60%] md:h-[50%] "
      />
    </div>
  );
}

export default AboutContentOneImages;
