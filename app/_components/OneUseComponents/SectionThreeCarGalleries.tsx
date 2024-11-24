"use client";
import { motion, Variants } from "framer-motion";

const Lis = ["power", "origin", "beauty", "asylum", "obsession", "strength"];

const parentVariants: Variants = {
  initial: { opacity: 1 },
  inView: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const childrenVariants: Variants = {
  initial: { x: "-10rem" },
  inView: {
    x: "0px",
    transition: {
      duration: 0.3,
    },
  },
};

// Single Li Element
function GalleriesLi({ children }: { children: string }) {
  return (
    <motion.li
      variants={childrenVariants}
      className="w-full cursor-pointer hover:text-[1.1rem] gap-[0.7rem] flex items-center justify-start opacity-50 hover:opacity-100 
      duration-150
    before:w-0 before:h-[2px] before:bg-black before:block before:transition-all before:duration-200 hover:before:w-[3rem] py-[5px]
    relative group"
    >
      {/* Red Ball */}
      <span className=" bg-red-500 rounded-full w-[7px] h-[7px] opacity-0 duration-0 group-hover:opacity-100"></span>
      {children}
    </motion.li>
  );
}

// List (ul)
function SectionThreeCarGalleries() {
  return (
    <motion.ul
      variants={parentVariants}
      initial="initial"
      whileInView="inView"
      viewport={{ amount: 0.5 }}
      className="uppercase text-black text-sm font-bold absolute   bottom-[calc(28%)]  
    flex flex-col gap-[10px]"
    >
      {Lis.map((li, index) => (
        <GalleriesLi key={index}>{li}</GalleriesLi>
      ))}
    </motion.ul>
  );
}

export default SectionThreeCarGalleries;
