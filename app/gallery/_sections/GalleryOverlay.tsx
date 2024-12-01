"use client";
import DynamicImages from "@/app/_components/DynamicImages";
import GalleryLink from "@/app/_components/GalleryLink";
import { sleep } from "@/app/_lib/helpers";
import { galleryTitle } from "@/app/_types/Types";
import { AnimatePresence, Variants, motion } from "motion/react";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
// Variants Under component

type GalleryOverlayProps = {
  images: string[];
  title?: galleryTitle;
  text: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function GalleryOverlay({
  title,
  images,
  text,
  isOpen,
  setIsOpen,
}: GalleryOverlayProps) {
  const router = useRouter();

  async function handleBackButton() {
    setIsOpen(false);
    await sleep(2800);
    router.back();
  }

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div
          className={`absolute  top-0 left-0 size-full z-[9999999] bg-cover `}
        >
          <motion.div
            variants={grandparentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className=" w-full lg:w-[50%] bg-white h-dvh lg:h-[96%] fixed top-0 lg:top-[2%] right-0 lg:right-[1rem] 
            z-[99999999] px-3 pt-[4rem] pb-[1.5rem] md:pt-0  overflow-auto flex flex-col gap-[4%] justify-between"
          >
            {/* title */}
            <motion.h1
              className="font-bold select-none uppercase leading-none overflow-hidden text-5xl h-[48px] w-fit md:text-8xl md:h-[96px] "
              variants={parentVariants}
            >
              {!!title &&
                title.split("").map((letter, i) => (
                  <motion.span
                    key={i}
                    className="inline-block leading-none will-change-transform"
                    variants={childVariants}
                  >
                    {letter}
                  </motion.span>
                ))}
            </motion.h1>

            {/* Dynamic Images */}
            <motion.div
              variants={ImagesVariants}
              className="w-[90%] aspect-square lg:w-[40%] lg:aspect-[1/1.1] mx-auto max-h-[50%]"
            >
              <DynamicImages
                images={images}
                delayInSec={0.3}
                className="size-full"
              />
            </motion.div>

            {/* text */}
            <motion.p
              variants={TextVariants}
              className="w-[90%] max-h-[25%] pb-2 sm:w-[80%] mx-auto overflow-scroll text-[17px] font-normal text-gray-500 leading-5"
            >
              {text}
            </motion.p>

            {/* flying back btn */}
            <motion.button
              variants={buttonVariants}
              onClick={handleBackButton}
              className="uppercase absolute top-[1.3rem] md:top-[1.5rem] right-[1rem] md:right-[1.5rem] text-sm md:text-base px-3 py-1 md:px-4 md:py-2 text-black bg-[#ef4826] font-semibold"
            >
              back
            </motion.button>

            {/* GalleryLink */}
            <GalleryLink
              place="outsideGallery"
              onClick={() => setIsOpen(false)}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default GalleryOverlay;

const grandparentVariants: Variants = {
  initial: { y: "110%" },
  animate: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    y: "110%",
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10,
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const parentVariants: Variants = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0,
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  exit: {
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      when: "afterChildren",
      staggerChildren: 0.15,
    },
  },
};

const childVariants: Variants = {
  initial: { y: "100%" },
  animate: {
    y: "0%",
    transition: {
      type: "spring",
      stiffness: 30,
      damping: 10,
    },
  },
  exit: {
    y: "100%",
    transition: {
      type: "spring",
      stiffness: 30,
      damping: 10,
    },
  },
};

const ImagesVariants: Variants = {
  initial: { opacity: 0, x: "-20%" },
  animate: {
    opacity: 1,
    x: "0%",
    transition: {
      type: "spring",
      stiffness: 30,
      damping: 10,
    },
  },
  exit: {
    opacity: 0,
    x: "-20%",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const TextVariants: Variants = {
  initial: { opacity: 0, y: "110%" },
  animate: {
    opacity: 1,
    y: "0%",
    transition: {
      type: "spring",
      stiffness: 30,
      damping: 10,
    },
  },
  exit: {
    opacity: 0,
    y: "110%",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const buttonVariants: Variants = {
  initial: { x: "110%", opacity: 0 },
  animate: {
    x: "0%",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 30,
      damping: 10,
    },
  },
  exit: {
    x: "110%",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};
