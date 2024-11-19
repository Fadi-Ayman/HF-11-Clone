"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { sleep } from "../_lib/helpers";

// "bg-red-600  px-6 py-2 text-black h-14 w-[90%] [border-bottom-right-radius:20px] md:w-52"


type CustomLinkProps = {
  children: string;
  href: string;
  hasIcon: boolean;
  className?: string;
  hoverColor: string;
  withTransition: boolean;
  linkClassName?:string
};

function CustomLink({
  hasIcon,
  className ="",
  href,
  children,
  hoverColor,
  withTransition,
  linkClassName =""
}: CustomLinkProps) {
  const parentVariants: Variants = {
    initial: { opacity: 1 },
    hover: {
      backgroundColor: hoverColor,
      transition: {
        duration: 0.4,
        staggerChildren: 0.2,
      },
    },
  };

  const childrenVariants: Variants = {
    initial: {
      x: 0,
      opacity: 1,
    },
    hover: {
      x: [0, "150%", "-150%", 0],
      opacity: [1, 1, 1, 0, 0, 0, 1],
      scale: 1.03,
      transition: { duration: 0.5 },
    },
  };

  const router = useRouter();

  async function handleClick(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    if (withTransition) {
      e.preventDefault();
      document.body.classList.add("page-transition");
      await sleep(700);
      router.push(href);
      await sleep(700);
      document.body.classList.remove("page-transition");
    }
  }

  return (
    <Link
      className={`uppercase font-bold text-[0.85rem] ${linkClassName}`}
      href={href}
      onClick={handleClick}
    >
      <motion.span
        className={`inline-flex size-full justify-between w-full items-center ${className}`}
        variants={parentVariants}
        initial="initial"
        animate="initial"
        whileHover="hover"
      >
        <span className="inline-block overflow-hidden">
          <motion.span className="inline-block" variants={childrenVariants}>
            {children}
          </motion.span>
        </span>

        {hasIcon && (
          <span className="inline-flex justify-center items-center overflow-hidden">
            <motion.span
              className="inline-flex justify-center items-center"
              variants={childrenVariants}
            >
              <MdKeyboardDoubleArrowRight size={20} />
            </motion.span>
          </span>
        )}
      </motion.span>
    </Link>
  );
}

export default CustomLink;

// usage like this

// body {
//   transition-property: opacity, background, transform, filter;
//   transition-timing-function: ease-in-out;
//   transition-duration: 1000ms;
// }

// .page-transition {
//   opacity: 0;
//   background-color: white;
//   transform: translateY(-100%);
//   filter: blur(12px);
// }
