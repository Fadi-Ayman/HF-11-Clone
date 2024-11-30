"use client";
import React, { RefObject, useEffect, useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { AnimatePresence, motion, Variants } from "framer-motion";
import useScreenSize from "../_hooks/useScreenSize";
import { sleep } from "../_lib/helpers";
import { SwiperRef } from "swiper/react";

const CustomPointer = ({
  place,
  ParentRef,
}: {
  place: "gallery" | "home";
  ParentRef: RefObject<HTMLDivElement> | RefObject<SwiperRef>;
}) => {
  const { width, height } = useScreenSize();
  const [position, setPosition] = useState({
    x: place === "gallery" ? (width > 500 ? width / 2 : 100) : 0,
    y: place === "gallery" ? (width > 500 ? height / 2 : 100) : 0,
  });
  const [isFirstTime, setIsFirstTime] = useState(place === "gallery");
  const [isMouseInRef, setIsMouseInRef] = useState(false);

  const showConditionGallery =
    position.x < width - 150 && position.y < height - 200;
  const showConditionHome = width > 500 && isMouseInRef;
  const showCondition =
    place === "gallery" ? showConditionGallery : showConditionHome;

  useEffect(() => {
    const handleMouseMove = async (e: MouseEvent) => {
      if (!ParentRef.current) return;
      // @ts-ignore
      if (!ParentRef.current?.contains(e.target as Node)) {
        setIsMouseInRef(false);
        return;
      }

      setIsMouseInRef(true);

      const parentRect = (
        ParentRef.current as HTMLElement
      ).getBoundingClientRect();

      if (
        e.clientX >= parentRect.left &&
        e.clientX <= parentRect.right &&
        e.clientY >= parentRect.top &&
        e.clientY <= parentRect.bottom
      ) {
        // Mouse is inside the parent
        const relativeX = e.clientX - parentRect.left;
        const relativeY = e.clientY - parentRect.top;

        await sleep(50);
        setPosition({ x: relativeX, y: relativeY });
        setIsFirstTime(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [ParentRef]);

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
            gap: width < 550 && place === "gallery" ? "8px" : "5px",
            overflow: "hidden",
          }}
        >
          <span
            style={{
              rotate: width < 550 && place === "gallery" ? "120deg" : "0deg",
            }}
            className="inline-flex justify-center items-center overflow-hidden"
          >
            <motion.span variants={childVariantsOne} className="inline-block">
              <MdKeyboardDoubleArrowLeft fontSize={"1.3rem"} />
            </motion.span>
          </span>

          <span>{width < 550 && place === "gallery" ? "Flip" : "drag"}</span>

          <span
            style={{
              rotate: width < 550 && place === "gallery" ? "120deg" : "0deg",
            }}
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
