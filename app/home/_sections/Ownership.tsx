"use client";

import { useScroll } from "motion/react";
import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import CarSoundOwnership from "@/app/_components/OneUseComponents/CarSoundOwnership";

function Ownership() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [0.2, 0.75]);

  return (
    <section
    id="ownership"
      ref={sectionRef}
      className=" w-screen h-[calc(100dvh+2rem)]  md:h-[calc(110dvh+2rem)] bg-black  rounded-t-[3rem] sticky top-[-2rem]  overflow-hidden "
    >
      {/* Image */}
      <motion.div
        style={{ opacity }}
        className="bg-[url('/HomeImages/SecondSectionImage2.avif')]  lg:bg-[url('/HomeImages/SecondSectionImage.avif')]  bg-cover bg-no-repeat bg-center size-full  "
      ></motion.div>

      {/* content & button */}
      <CarSoundOwnership />
    </section>
  );
}

export default Ownership;
