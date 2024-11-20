"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, RefObject, useEffect, useRef } from "react";
import CustomLink from "../CustomLink";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  MenuBarRef: RefObject<HTMLButtonElement>;
};

function Sidebar({ isOpen, setIsOpen, MenuBarRef }: SidebarProps) {
  const sideBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (MenuBarRef.current?.contains(event.target as Node)) return;
      if (
        sideBarRef.current &&
        !sideBarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    // overlay
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ width: "0px" }}
          animate={{ width: "100dvw" }}
          exit={{ width: "0px" }}
          className="absolute  top-0 right-0 w-[100dvw] h-[100dvh] backdrop-blur-[2px] z-[50] overflow-hidden"
        >
          {/* sidebar */}

          <motion.div
            ref={sideBarRef}
            initial={{ width: "0px" }}
            animate={{ width: "60dvw" }}
            exit={{ width: "0px" }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="absolute top-0 right-0  h-[100dvh] bg-white border-s border-s-gray-600 z-[50] pt-[5rem] overflow-clip will-change-transform flex items-center flex-col justify-start gap-5 "
          >
            <CustomLink
              className="py-2 px-10 text-base"
              hasIcon={false}
              href="/gallery"
              withTransition={true}
              withAnimation={false}
              onClick={() => setIsOpen(false)}
              linkClassName="w-full bg-gray-200 flex justify-center items-center"
            >
              Gallery
            </CustomLink>

            <CustomLink
              className="py-2 px-10 text-base"
              hasIcon={false}
              href="#car-tour"
              withTransition={false}
              withAnimation={false}
              onClick={() => setIsOpen(false)}
              linkClassName="w-full bg-gray-200 flex justify-center items-center"
            >
              Car Tour
            </CustomLink>

            <CustomLink
              className="py-2 px-10 text-base"
              hasIcon={false}
              href="#about"
              withTransition={false}
              withAnimation={false}
              onClick={() => setIsOpen(false)}
              linkClassName="w-full bg-gray-200 flex justify-center items-center"
            >
              About
            </CustomLink>

            <CustomLink
              className="py-2 px-10 text-base"
              hasIcon={false}
              href="#ownership"
              withTransition={false}
              withAnimation={false}
              onClick={() => setIsOpen(false)}
              linkClassName="w-full bg-gray-200 flex justify-center items-center"
            >
              Ownership
            </CustomLink>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
