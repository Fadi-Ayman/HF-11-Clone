"use client";
import { motion, MotionValue, useTransform } from "framer-motion";

import AnimatedTitle from "@/app/_components/AnimatedTitle";
import CarSpecsSectionOne from "@/app/_components/OneUseComponents/CarSpecsSectionOne";
import useScreenSize from "@/app/_hooks/useScreenSize";

function HomeSectionOne({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const { width } = useScreenSize();
  const isWide = width > 768;
  const isExtraWide = width > 1280;
  const ImageScale = useTransform(scrollYProgress, [0, 0.1], [1, 1.3]);
  const textTranslate = useTransform(
    scrollYProgress,
    [0, 0.035],
    ["0%", "-55.5dvh"]
  );

  return (
    <section className="w-screen mx-auto  h-dvh bg-[#eaeceb] sticky top-0  overflow-hidden">
      <motion.img
        initial={{ y: "-100%" }}
        animate={{ y: isWide ? "5%" : "20%" }}
        style={{ scale: ImageScale }}
        transition={{ duration: 2.5, delay: 1.2 }}
        className="w-full md:h-full h-[55%] object-cover "
        src="/HomeImages/HomeTopImage.webp"
        alt="TopImage"
      />

      <AnimatedTitle
        title="HF"
        delay={3.5}
        endAnimationInOneSec={false}
        className="absolute top-[4rem] left-[1.5dvw] text-black z-10 text-responsive-12xl h-responsive-12xl "
      />

      <AnimatedTitle
        style={{ translateY: isExtraWide ? textTranslate : 0 }}
        title="11"
        delay={3.5}
        endAnimationInOneSec={false}
        className="absolute top-[4rem] xl:top-auto xl:bottom-[2rem] right-[1vw] text-black z-10 text-responsive-12xl h-responsive-12xl font-normal"
      />

      <CarSpecsSectionOne />
    </section>
  );
}

export default HomeSectionOne;
