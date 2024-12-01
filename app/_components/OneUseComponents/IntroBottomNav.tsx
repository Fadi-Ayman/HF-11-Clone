"use client";
import CustomLink from "@/app/_components/CustomLink";
import { motion, Variants } from "framer-motion";

type IntroBottomNavProps = {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
};

function IntroBottomNav({handleMouseLeave,handleMouseEnter}:IntroBottomNavProps) {
  

  const sectionVariants: Variants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 1.3,
      },
    },
  };

  return (
    <motion.div
      variants={sectionVariants}
      initial="initial"
      animate="visible"
      className="flex flex-col justify-center items-center w-full absolute bottom-0 left-0 py-7 sm:py-4  md:py-8 gap-3 sm:flex-row sm:justify-between sm:px-8 z-10"
    >
      <p className="uppercase text-xs md:text-base ">California, USA, 90757</p>

      <CustomLink
        hasIcon={true}
        href="/home"
        hoverColor="#25ff55"
        className="bg-red-600   py-2 text-black h-14  [border-bottom-right-radius:20px] "
        withTransition={true}
        linkClassName={`w-[90%] sm:w-[25%] md:w-52`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Enter
      </CustomLink>
    </motion.div>
  );
}

export default IntroBottomNav;
