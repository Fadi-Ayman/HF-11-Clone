"use client";
import { useRouter } from "next/navigation";
import { sleep } from "../_lib/helpers";
import { motion, useAnimation, Variants } from "framer-motion";
import { PiPlusBold } from "react-icons/pi";

type GalleryLinkProps = {
  place: "insideGallery" | "outsideGallery";
  onClick?: () => void;
};

function GalleryLink({ place, onClick }: GalleryLinkProps) {
  const router = useRouter();
  const controls = useAnimation();

  async function handleClick() {
    !!onClick && onClick();

    if (place === "insideGallery") {
      document.body.classList.add("page-transition");
      await sleep(700);
      router.back();
      await sleep(700);
      document.body.classList.remove("page-transition");
    }
  }

  const parentVariants: Variants = {
    initial: {
      backgroundColor: place === "insideGallery" ? "#dc2626" : "#25ff55",
      rotate: place === "insideGallery" ? "45deg" : "0deg",
    },
    hover: {
      backgroundColor: place === "insideGallery" ? "#25ff55" : "#dc2626",
      rotate: place === "insideGallery" ? "0deg" : "45deg",
    },
  };

  const handleMouseEnter = () => {
    controls.start({
      width: "12rem",
      paddingInlineEnd: "2rem",
      transition: { duration: 0.3, ease: "easeInOut" },
    });
  };

  const handleMouseLeave = () => {
    controls.start({
      width: "0%",
      paddingInlineEnd: "0rem",
      transition: { duration: 0.3, ease: "easeInOut" },
    });
  };

  return (
    <button
      className={`uppercase w-fit font-bold text-[0.85rem] absolute  h-[2.1rem] md:h-[3.5rem]  top-[1rem] left-[1.5rem] md:left-auto md:top-1/2  md:translate-y-[-50%] md:right-[2rem] z-[99999] flex flex-row-reverse items-center overflow-hidden `}
      onClick={handleClick}
    >
      {/* icon */}
      <motion.span
        variants={parentVariants}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial="initial"
        whileHover="hover"
        className="inline-flex overflow-hidden items-center justify-center size-full  md:p-3 shrink-0  h-[2.1rem] md:w-[3.5rem] w-[2.1rem] md:h-[3.5rem]  rounded-full z-10"
      >
        <PiPlusBold className={"text-[1rem] md:text-[1.5rem]"} />
      </motion.span>

      {/* text */}

      <motion.span
        animate={controls}
        className=" hidden md:inline-flex items-center justify-center uppercase  h-full overflow-hidden translate-x-[1.05rem]  md:translate-x-[1.85rem]  rounded-s-full text-nowrap bg-white w-0 border border-gray-300"
      >
        {place === "insideGallery" ? "Close Gallery" : "View Gallery"}
      </motion.span>
    </button>
  );
}

export default GalleryLink;
