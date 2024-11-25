import {  motion, useAnimationControls } from "motion/react";

function AnimatedTitleInView({
  title,
  delay = 1,
  className = "",

}: {
  title: string;
  delay: number;  
  className?: string;

}) {
  const letters = title.split("");
  const totalDuration = 1;
  const delayPerLetter = totalDuration / letters.length;
  
  const controls = useAnimationControls();

  function handleSecondSpanAnimation() {
    controls.start({
      y: "-100%",
    });
  }


  return (
    <motion.h1
      onViewportEnter={handleSecondSpanAnimation}
      className={` font-bold select-none uppercase my-1 leading-none overflow-hidden w-fit ${className}   `}
    >
      {letters.map((letter, index) => (
        <motion.span
          className={`inline-block leading-none `}
          key={index}
          initial={{ y: 0 }}
          whileInView={{
            y: "-100%",
            transition: {
              type: "spring",
              stiffness: 30,
              damping: 10,
              delay: index * delayPerLetter + delay, 
            },
          }}
          viewport={{ once: true, amount: 0 }}
        >
          {letter === " " ? <>&nbsp;</> : letter}
        </motion.span>
      ))}
      <br />
      {letters.map((letter, index) => (
        <motion.span
          initial={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 30,
            damping: 10,
              delay: index * delayPerLetter + delay, 
          }}
          animate={controls}
          className={`inline-block leading-none `}
          key={index}
        >
          {letter === " " ? <>&nbsp;</> : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}

export default AnimatedTitleInView;
