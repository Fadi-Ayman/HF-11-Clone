"use client";
import { motion, Variants } from "framer-motion";
import { useRouter } from "next/navigation";

const Lis = ["power", "origin", "beauty", "asylum", "obsession", "strength"];

const parentVariants: Variants = {
  initial: { opacity: 1 },
  inView: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
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

// Single Li Element for Lg Screens
function LgGalleriesLi({ children }: { children: string }) {
  const router = useRouter();

  return (
    <motion.li
      onClick={() => router.push(`gallery/${children}`)}
      variants={childrenVariants}
      className="w-full tracking-tighter cursor-pointer hover:text-[1.1rem] gap-[0.7rem] flex items-center justify-start opacity-50 hover:opacity-100 
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

// Single Li Element for Sm Screens
function SmGalleriesLi({ children }: { children: string }) {
  const router = useRouter();
  return (
    <li
      onClick={() => router.push(`gallery/${children}`)}
      className="h-full px-[3rem] border-e flex  items-center justify-center hover:text-black hover:bg-[#0000000c] cursor-pointer border-e-[#0003] tracking-tighter"
    >
      {children}
    </li>
  );
}

// List (ul)
function CarTourCarGalleries({ isSmallScreen }: { isSmallScreen: boolean }) {
  if (isSmallScreen) {
    return (
      <ul className=" overflow-auto flex  w-full h-[3rem] uppercase font-bold text-xs text-[#00000088]   border-t border-[#0003] ">
        {Lis.map((li, index) => (
          <SmGalleriesLi key={index}>{li}</SmGalleriesLi>
        ))}
      </ul>
    );
  } else {
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
          <LgGalleriesLi key={index}>{li}</LgGalleriesLi>
        ))}
      </motion.ul>
    );
  }
}

export default CarTourCarGalleries;
