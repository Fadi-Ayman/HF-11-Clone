"use client";
import { BsPlusCircleFill } from "react-icons/bs";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

const parentVariants: Variants = {
  initial: { opacity: 1 },
  hover: {
    backgroundColor: "#25ff55",
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
    transition: { duration: 0.4 },
  },
};
function FormButton({ size }: { size: "sm" | "lg" }) {
  const { scrollYProgress } = useScroll();

  const ButtonTranslateY = useTransform(
    scrollYProgress,
    [0.04, 0.041, 0.1, 0.11, 0.88, 0.885, 0.94, 0.95],
    ["0rem", "-4.5rem", "-4.5rem", "0rem", "0rem", "-4.5rem", "-4.5rem", "0rem"]
  );

  function handleOpenForm() {
    alert("form Opend");
  }

  if (size === "sm") {
    return (
      <button
        onClick={handleOpenForm}
        className="md:hidden w-full h-[4rem] flex justify-between px-6 items-center absolute bottom-0 bg-[#ef4826] uppercase text-[15px] font-semibold tracking-tighter"
      >
        <p>Order Your HF-11</p>
        <BsPlusCircleFill size={27} className="bg-white rounded-full" />
      </button>
    );
  } else {
    return (
      <motion.button
        style={{ translateY: ButtonTranslateY }}
        onClick={handleOpenForm}
        variants={parentVariants}
        initial="initial"
        whileHover="hover"
        className="hidden md:flex w-[50%] h-[4.5rem] justify-between px-10 items-center fixed bottom-[-4.5rem] bg-[#ef4826] uppercase  text-[18px] font-[600] tracking-tighter rounded-tr-[30px] z-[99] "
      >
        <p>
          <span
            className={`inline-flex size-full will-change-transform justify-between gap-[0.5rem] items-center px-5  $`}
          >
            <span className="inline-flex justify-evenly overflow-hidden items-center w-fit ">
              <span className="inline-flex items-center overflow-hidden w-full ">
                <motion.span
                  className="inline-flex whitespace-nowrap will-change-transform "
                  variants={childrenVariants}
                >
                  <span className="  overflow-hidden">Order Your HF-11</span>
                  <span className="overflow-visible w-0">Order Your HF-11</span>
                </motion.span>
              </span>
            </span>
          </span>
        </p>
        <BsPlusCircleFill
          size={38}
          className="bg-white rounded-full backdrop-blur-sm"
        />
      </motion.button>
    );
  }
}

export default FormButton;
