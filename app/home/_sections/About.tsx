"use client";
import AboutContent from "@/app/_components/OneUseComponents/AboutContent";
import AboutMainImages from "@/app/_components/OneUseComponents/AboutMainImages";
import AboutMainImagesSm from "@/app/_components/OneUseComponents/AboutMainImagesSm";
import { useScroll, motion, useTransform } from "motion/react";
import { useRef } from "react";

function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const sectionTranslate = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["1%", "0%"]
  );

  return (
    <motion.section
      style={{ translateY: sectionTranslate }}
      id="about"
      ref={sectionRef}
      className="w-screen min-h-[200dvh] will-change-transform flex lg:justify-start flex-col lg:flex-row items-center lg:items-start  overflow-visible h-fit  bg-white   "
    >
      {/* MainImages */}
      <AboutMainImages scrollYProgress={scrollYProgress} />
      <AboutMainImagesSm />

      {/* Content */}
      <AboutContent />
    </motion.section>
  );
}

export default About;
