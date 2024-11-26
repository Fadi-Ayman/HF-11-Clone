"use client";

import { useScroll } from "motion/react";
import { useRef } from "react";
import { useTransform, motion } from "framer-motion";
import Video from "@/app/_components/Video";
import SectionThreeCarGalleries from "@/app/_components/OneUseComponents/SectionThreeCarGalleries";
import DownloadSpecsLink from "@/app/_components/OneUseComponents/DownloadSpecsLink";

function HomeSectionThree() {
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

        {/* Gradient for make a smooth transition color between video and bg */}
        <span
          className="block absolute bottom-[calc(50%+5rem)] z-[100] w-full h-[20rem] 
          bg-gradient-to-b from-[#aeaeaf] via-[#b9b9b9] to-[#aeaeaf00] mix-blend-luminosity "
        ></span>

        {/* car Galleries Uls */}
        <SectionThreeCarGalleries isSmallScreen={false} />

        {/* Download Specs */}

        <DownloadSpecsLink />
      </motion.div>
    </section>
  );
}

export default HomeSectionThree;
