"use client";

import { useScroll } from "motion/react";
import { useRef } from "react";
import { useTransform, motion } from "framer-motion";
import Video from "@/app/_components/Video";
import CarTourCarGalleries from "@/app/_components/OneUseComponents/CarTourCarGalleries";
import DownloadSpecsLink from "@/app/_components/OneUseComponents/DownloadSpecsLink";

function CarTour() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7], [0.2, 1]);

  return (
    <section
      ref={sectionRef}
      className="hidden lg:block w-screen h-[calc(130dvh+2rem)]  bg-black rounded-t-[3rem] sticky top-[-2rem] overflow-hidden "
    >
      <motion.div
      id="car-tour"
        className="size-full  relative  rounded-t-[inherit] bg-[#aeaeaf]  "
        style={{ opacity }}
      >
        {/* Vedio */}
        <Video
          className="h-dvh w-full object-cover absolute 
          bottom-0 "
          posterSrc="/HomeImages/sectionThreeVedioPoster.avif"
          src="/HomeImages/SectionThreeVedio.mp4"
          withLoop={false}
        />

        {/* Gradient for make a smooth transition color between video and bg (top) */}
        <span
          className="block absolute bottom-[calc(50%+5rem)] z-[100] w-full h-[20rem] 
          bg-gradient-to-b from-[#aeaeaf] via-[#b9b9b9] to-[#aeaeaf00] mix-blend-luminosity "
        ></span>
          {/* Gradient for make a smooth transition color between video and bg (bottom) */}
        <span
          className="block absolute bottom-0 left-0 w-full h-[10rem] 
          bg-gradient-to-b from-[#aeaeaf00] via-[#ffffff7e] to-[#fff] "
        ></span>

        {/* car Galleries Uls */}
        <CarTourCarGalleries isSmallScreen={false} />

        {/* Download Specs */}

        <DownloadSpecsLink />
      </motion.div>
    </section>
  );
}

export default CarTour;
