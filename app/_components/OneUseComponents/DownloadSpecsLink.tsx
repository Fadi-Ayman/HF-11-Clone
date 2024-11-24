"use client";

import { motion, Variants } from "framer-motion";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const parentVariants: Variants = {
  initial: { opacity: 1 },
  hover: {
    backgroundColor: "rgb(0,0,0)",
    transition: {
      duration: 0.4,
      staggerChildren: 0,
    },
  },
};

const childrenVariants: Variants = {
  initial: {
    opacity: 1,
    x: "-100%",
  },
  hover: {
    x: "0%",
    transition: { duration: 0.35 },
  },
};

function DownloadSpecsLink() {
  return (
    // Add return here to fix the issue
    <a
      className={`block font-bold text-[0.85rem] bg-transparent uppercase w-[90%] lg:w-fit h-12 lg:absolute lg:bottom-[4rem] lg:left-[2rem] mx-auto lg:mx-0`}
      href="/HomeImages/specs.pdf"
      download
    >
      <motion.span
        className={`inline-flex size-full  justify-between gap-[0.5rem] items-center px-5 border border-black p-0 hover:text-white lg:w-fit  text-black [border-bottom-right-radius:18px]`}
        variants={parentVariants}
        initial="initial"
        animate="initial"
        whileHover="hover"
      >
        <span className="inline-flex justify-evenly overflow-hidden items-center w-fit">
          <span className="inline-flex items-center overflow-hidden w-full">
            <motion.span
              className="inline-flex whitespace-nowrap"
              variants={childrenVariants}
            >
              <span className="overflow-hidden">{"download specs"}</span>
              <span className="overflow-visible w-0">{"download specs"}</span>
            </motion.span>
          </span>
        </span>

        <span className="inline-flex overflow-hidden items-center w-fit">
          <span className="inline-flex items-center overflow-hidden">
            <motion.span
              className="inline-flex whitespace-nowrap items-center"
              variants={childrenVariants}
            >
              <span className="overflow-hidden">
                <MdKeyboardDoubleArrowRight size={20} />
              </span>
              <span className="overflow-visible w-0">
                <MdKeyboardDoubleArrowRight size={20} />
              </span>
            </motion.span>
          </span>
        </span>
      </motion.span>
    </a>
  );
}

export default DownloadSpecsLink;
