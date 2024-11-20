"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { sleep } from "../_lib/helpers";

// "bg-red-600  px-6 py-2 text-black h-14 w-[90%] [border-bottom-right-radius:20px] md:w-52"

type CustomLinkProps = {
  children: string | React.ReactNode;
  href: string;
  hasIcon?: boolean;
  className?: string;
  hoverColor?: string;
  withTransition: boolean;
  linkClassName?: string;
  withAnimation?: boolean;
  onClick?: () => void;
};

function CustomLink({
  hasIcon = false,
  className = "",
  href,
  children,
  hoverColor = "rgba(0, 0, 0, 0)",
  withTransition,
  linkClassName = "",
  withAnimation = true,
  onClick,
}: CustomLinkProps) {
  const parentVariants: Variants = {
    initial: { opacity: 1 },
    hover: {
      backgroundColor: hoverColor,
      transition: {
        duration: 0.4,
        staggerChildren: 0,
      },
    },
  };

  const childrenVariants: Variants = {
    initial: {
      opacity: 1,
      x: "-50%",
    },
    hover: {
      x: "0%",
      transition: { duration: 0.35 },
    },
  };

  const router = useRouter();

  async function handleClick(
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    if (onClick) onClick();
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
      className={`uppercase block  font-bold text-[0.85rem] ${linkClassName}  `}
      href={href}
      onClick={handleClick}
    >
      {withAnimation ? (
        <motion.span
          className={`inline-flex size-full justify-between items-center  ${className} `}
          variants={parentVariants}
          initial="initial"
          animate="initial"
          whileHover="hover"
        >
          
          <span className="inline-flex justify-evenly overflow-hidden items-center w-fit ">
            <span className="inline-flex items-center overflow-hidden w-1/2 ">
              <motion.span
                className="inline-flex whitespace-nowrap "
                variants={childrenVariants}
              >
                {children}
                {children}
              </motion.span>
            </span>
          </span>

          {hasIcon && (
            <span className="inline-flex overflow-hidden  items-center w-fit">
              <span className="inline-flex items-center overflow-hidden w-1/2 ">
                <motion.span
                  className="inline-flex whitespace-nowrap  items-center  "
                  variants={childrenVariants}
                >
                  <MdKeyboardDoubleArrowRight size={20} />
                  <MdKeyboardDoubleArrowRight size={20} />
                </motion.span>
              </span>
            </span>
          )}
        </motion.span>
      ) : (
        <span
          className={`inline-flex size-full justify-between w-full items-center ${className}`}
        >
          <span className="inline-block overflow-hidden">{children}</span>
          {hasIcon && (
            <span className="inline-flex justify-center items-center overflow-hidden">
              <MdKeyboardDoubleArrowRight size={20} />
            </span>
          )}
        </span>
      )}
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
