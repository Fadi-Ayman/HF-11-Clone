"use client";
import AnimatedTitle from "./_components/AnimatedTitle";
import Video from "./_components/Video";
import IntroBottomNav from "./_components/OneUseComponents/IntroBottomNav";
import { motion, useAnimation } from "framer-motion";

export default function Intro() {
  const controls = useAnimation();

  const handleMouseEnter = () => {
    controls.start({ opacity: 1, scale: 1, rotate: 0, display: "block" });
  };
  const handleMouseLeave = () => {
    controls.start({ opacity: 0, scale: 1.2, rotate: 8, display: "none" });
  };

  return (
    <div className="relative w-dvw h-dvh overflow-hidden ">
      {/* Intro video */}
      <Video
        posterSrc={"/Intro/IntroPoster.avif"}
        withLoop
        src={"/Intro/HF11-Intro.mp4"}
      />

      {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-full  px-5 md:px-7 py-9  md:py-4 text-white z-10">
        <AnimatedTitle
        endAnimationInOneSec={true}
          className="text-responsive-9xl h-responsive-9xl"
          title="Bespoke"
        />
        <AnimatedTitle
        endAnimationInOneSec={true}
          className="ms-[27dvw] text-responsive-9xl h-responsive-9xl"
          title="Myth"
        />
        <AnimatedTitle
        endAnimationInOneSec={true}
          className="text-responsive-9xl h-responsive-9xl"
          title="Chaos"
        />
        <AnimatedTitle
        endAnimationInOneSec={true}
          className="ms-[9dvw] text-responsive-9xl h-responsive-9xl"
          title="Maniac"
        />
        <IntroBottomNav
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      </div>
      <motion.img
        initial={{ opacity: 0, scale: 1.2, rotate: 8, display: "none" }}
        animate={controls}
        transition={{
          duration: 0.5,
          easings: "cubic-bezier(0.85, 0, 0.15, 1)",
        }}
        className="absolute top-0 left-0 w-full h-full z-[5] object-cover"
        src="/Intro/HF-11-Intro-Image.avif"
        alt="img"
      />
    </div>
  );
}
