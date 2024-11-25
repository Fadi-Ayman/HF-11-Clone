"use client";
import { motion, MotionStyle, Variants } from "framer-motion";

type AnimatedTitleProps = {
  title: string;
  delay?: number;
  className?: string;
  style?: MotionStyle;
  endAnimationInOneSec: boolean;
};

function AnimatedTitle({
  title,
  className = "",
  delay = 1,
  style = {},
  endAnimationInOneSec = true,
}: AnimatedTitleProps) {
  const letters = title.split("");

  const totalDuration = 1;
  const normalDuration = 0.15;
  const delayPerLetter = endAnimationInOneSec
    ? totalDuration / letters.length
    : normalDuration;

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
      style={style}
      initial="hidden"
      animate="visible"
      className={` font-bold select-none uppercase leading-none overflow-hidden w-fit   ${className} `}
    >
      {letters.map((letter, index) => (
        <motion.span
          initial={{ y: 0 }}
          animate={{
            y: "-100%",
            transition: {
              type: "spring",
              stiffness: 30,
              damping: 10,
              delay: index * delayPerLetter + delay,
            },
          }}
          className="inline-block leading-none"
          key={index}
        >
          {letter === " " ? <>&nbsp;</> : letter}
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
              stiffness: 30,
              damping: 10,
              delay: index * delayPerLetter + delay,
            },
          }}
          className="inline-block leading-none"
          key={index}
        >
          {letter === " " ? <>&nbsp;</> : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export default AnimatedTitle;
