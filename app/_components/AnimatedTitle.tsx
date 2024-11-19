"use client";
import { motion, Variants } from "framer-motion";

type AnimatedTitleProps = {
  title: string;
  className?: string;
};

function AnimatedTitle({ title, className = "" }: AnimatedTitleProps) {
  const letters = title.split("");

  const parentVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
        duration: 0.3,
      },
    },
  };
  const childrenVariants: Variants = {
    hidden: { y: 0 },
    visible: {
      y: "-100%",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.h1
      variants={parentVariants}
      initial="hidden"
      animate="visible"
      className={`text-responsive-9xl font-bold text-white uppercase leading-none overflow-hidden w-fit h-responsive-9xl ${className}`}
    >
      {letters.map((letter, index) => (
        <motion.span
          variants={childrenVariants}
          className="inline-block leading-none"
          key={index}
        >
          {letter}
        </motion.span>
      ))}
      <br />
      {letters.map((letter, index) => (
        <motion.span
          variants={childrenVariants}
          className="inline-block leading-none"
          key={index}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export default AnimatedTitle;
