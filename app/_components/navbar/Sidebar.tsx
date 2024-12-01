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
  const sideBarRef = useRef<HTMLUListElement>(null);

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
  }, []);

  return (
    // overlay
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ width: "0px" }}
          animate={{ width: "100dvw" }}
          exit={{ width: "0px" }}
          className="fixed block top-0 right-0 w-[100dvw] h-[100dvh] backdrop-blur-[3px] z-[50] overflow-hidden"
        >
          {/* sidebar */}

          <motion.ul
            ref={sideBarRef}
            initial={{ width: "0px" }}
            animate={{ width: "60dvw" }}
            exit={{ width: "0px" }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="fixed top-0 right-0  h-[100dvh] bg-gray-200 border-s border-s-gray-300 z-[50] pt-[5rem] overflow-clip will-change-transform flex items-center flex-col justify-start gap-5 max-w-[300px]"
          >
            <li className="w-full">
              <CustomLink
                className="py-2 px-10 text-[0.85rem]"
                hasIcon={false}
                href="/gallery/car"
                withTransition={true}
                withAnimation={false}
                onClick={() => setIsOpen(false)}
                linkClassName="w-full bg-gray-300 flex justify-center items-center"
              >
                Gallery
              </CustomLink>
            </li>

            <li className="w-full">
              <CustomLink
                className="py-2 px-10 text-[0.85rem]"
                hasIcon={false}
                href="#car-tour-sm"
                withTransition={false}
                withAnimation={false}
                onClick={() => setIsOpen(false)}
                linkClassName="w-full bg-gray-300 flex justify-center items-center"
              >
                Car Tour
              </CustomLink>
            </li>
            <li className="w-full">
              <CustomLink
                className="py-2 px-10 text-[0.85rem]"
                hasIcon={false}
                href="#about"
                withTransition={false}
                withAnimation={false}
                onClick={() => setIsOpen(false)}
                linkClassName="w-full bg-gray-300 flex justify-center items-center"
              >
                About
              </CustomLink>
            </li>
            <li className="w-full">
              <CustomLink
                className="py-2 px-10 text-[0.85rem]"
                hasIcon={false}
                href="#ownership"
                withTransition={false}
                withAnimation={false}
                onClick={() => setIsOpen(false)}
                linkClassName="w-full bg-gray-300 flex justify-center items-center"
              >
                Ownership
              </CustomLink>
            </li>
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Sidebar;
