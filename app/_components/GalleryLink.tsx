"use client";
import { usePathname, useRouter } from "next/navigation";
import { sleep } from "../_lib/helpers";
import Link from "next/link";
import { motion, useAnimation, Variants } from "framer-motion";
import { PiPlusBold } from "react-icons/pi";

type GalleryLinkProps = {
  href: string;
};

function GalleryLink({ href }: GalleryLinkProps) {
  const pathName = usePathname();
  const router = useRouter();
  const isInGallery = pathName === "/gallery";
  const controls = useAnimation();

  console.log(pathName);

  async function handleClick(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    e.preventDefault();
    document.body.classList.add("page-transition");
    await sleep(700);

    if (isInGallery) {
      router.back();
    } else {
      router.push(href);
    }

    await sleep(700);
    document.body.classList.remove("page-transition");
  }

  const parentVariants: Variants = {
    initial: {
      backgroundColor: isInGallery ? "#dc2626" : "#16a34a",
      rotate: isInGallery ? "45deg" : "0deg",
    },
    hover: {
      backgroundColor: isInGallery ? "#16a34a" : "#dc2626",
      rotate: isInGallery ? "0deg" : "45deg",
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
    <Link
      className={`uppercase  font-bold text-[0.85rem] absolute  h-[3rem] md:h-[3.5rem]  top-[1.5rem] right-[1.5rem] md:top-1/2  md:translate-y-[-50%] md:right-[2rem] z-[99999] flex flex-row-reverse items-center`}
      href={href}
      onClick={handleClick}
    >
      {/* icon */}
      <motion.span
        variants={parentVariants}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial="initial"
        whileHover="hover"
        className="inline-flex items-center justify-center size-full  p-3 shrink-0  h-[3rem] md:w-[3.5rem] w-[3rem] md:h-[3.5rem]  rounded-full z-10"
      >
        <PiPlusBold fontSize={"1.5rem"} />
      </motion.span>

      {/* text */}

      <motion.span
        animate={controls}
        className="inline-flex items-center justify-center uppercase  h-full overflow-hidden translate-x-[1.85rem]  rounded-s-full  text-nowrap  bg-white  w-0 border border-gray-300"
      >
        {isInGallery ? "Close Gallery" : "View Gallery"}
      </motion.span>
    </Link>
  );
}

export default GalleryLink;
