"use client";
import { motion } from "framer-motion";
import { Dispatch, RefObject } from "react";

type MenuBarProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  MenuBarRef: RefObject<HTMLButtonElement>;
};

const MenuBar = ({ isOpen, setIsOpen, MenuBarRef }: MenuBarProps) => {
  return (
    <button
      ref={MenuBarRef}
      onClick={() => setIsOpen(!isOpen)}
      className="flex justify-center items-center relative top-[-5px] z-[100]"
      aria-label="Toggle Menu"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        className="w-[26px] h-[26px]"
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <motion.rect
          width="20"
          height="2"
          rx="1"
          className="fill-current text-gray-800"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { x: 0, y: 6, rotate: 0 },
            open: { x: 0, y: 12, rotate: 45 },
          }}
        />
        <motion.rect
          width="20"
          height="2"
          rx="1"
          className="fill-current text-gray-800"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { opacity: 1, x: 0, y: 12 },
            open: { opacity: 0 },
          }}
        />
        <motion.rect
          width="20"
          height="2"
          rx="1"
          className="fill-current text-gray-800"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            closed: { x: 0, y: 18, rotate: 0 },
            open: { x: 0, y: 12, rotate: -45 },
          }}
        />
      </motion.svg>
    </button>
  );
};

export default MenuBar;
