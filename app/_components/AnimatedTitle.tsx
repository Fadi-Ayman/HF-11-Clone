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
        delay: 0.8,
        duration: 1,
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
          initial={{ y: 0 }}
          animate={{
            y: "-100%",
            transition: {
              type: "spring",
              stiffness: 50,
              damping: 10,
              delay: index * 0.15 + 1,
            },
          }}
          className="inline-block leading-none"
          key={index}
        >
          {letter}
        </motion.span>
      ))}
      <br />
      {letters.map((letter, index) => (
        <motion.span
          initial={{ y: 0 }}
          animate={{
            y: "-100%",
            transition: {
              type: "spring",
              stiffness: 50,
              damping: 10,
              delay: index * 0.15 + 1,
            },
          }}
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
