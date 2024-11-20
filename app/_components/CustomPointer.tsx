"use client";
import React, { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { sleep } from "../_lib/helpers";
import useScreenSize from "../_hooks/useScreenSize";

const CustomPointer = () => {
  const { width, height } = useScreenSize();
  const [position, setPosition] = useState({
    x: width / 2,
    y: height / 2,
  });
  const [isFirstTime, setIsFirstTime] = useState(true);
  const showCondition = position.x < width - 150 && position.y < height - 200;

  // Track the mouse position
  useEffect(() => {
    const handleMouseMove = async (e: MouseEvent) => {
      await sleep(50);
      setPosition({ x: e.clientX, y: e.clientY });
      setIsFirstTime(false);
    };

    if (width < 768) {
      if (position.x === 100 && position.y === 50) return;
      setPosition({ x: 100, y: 50 });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [position.x, position.y, width]);

  const parentVariants: Variants = {
    hidden: { opacity: 0, width: "0px" },
    visible: {
      opacity: 1,
      width: "110px",
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        delay: isFirstTime ? 1.4 : 0.2,
      },
    },
    exit: { opacity: 0, width: "0px", transition: { duration: 0.2 } },
  };

  const childVariantsOne: Variants = {
    hidden: { x: 0, opacity: 1 },
    visible: {
      x: [0, "-50%", "-100%"],
      opacity: [1, 1, 0],
      transition: { duration: 1, easings: "ease-in-out", repeat: Infinity },
    },
  };
  const childVariantsTwo: Variants = {
    hidden: { x: 0, opacity: 1 },
    visible: {
      x: [0, "50%", "100%"],
      opacity: [1, 1, 0],
      transition: { duration: 1, easings: "ease-in-out", repeat: Infinity },
    },
  };

  return (
    <AnimatePresence initial={true}>
      {showCondition && (
        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            position: "absolute",
            top: position.y,
            left: position.x,
            height: "45px",
            backgroundColor: "#dc2626",
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textTransform: "uppercase",
            fontWeight: "bold",
            pointerEvents: "none",
            fontSize: "0.85rem",
            gap: width < 550 ? "8px" : "5px",
            overflow: "hidden",
          }}
        >
          <span
            style={{
              rotate: width < 550 ? "120deg" : "0deg",
            }}
            className="inline-flex justify-center items-center overflow-hidden"
          >
            <motion.span variants={childVariantsOne} className="inline-block">
              <MdKeyboardDoubleArrowLeft fontSize={"1.3rem"} />
            </motion.span>
          </span>

          <span>{width < 550 ? "Flip" : "drag"}</span>

          <span
            style={{ rotate: width < 550 ? "120deg" : "0deg" }}
            className="inline-flex justify-center items-center overflow-hidden"
          >
            <motion.span variants={childVariantsTwo} className="inline-block">
              <MdKeyboardDoubleArrowRight fontSize={"1.3rem"} />
            </motion.span>
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CustomPointer;
