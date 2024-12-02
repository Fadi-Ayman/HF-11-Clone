"use client";

import { useEffect, useState } from "react";
import { BsPlusCircleFill } from "react-icons/bs";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { AnimatePresence, Variants as ModalVariants } from "framer-motion";
import { showToast } from "./Toast";

const parentVariants: Variants = {
  initial: { opacity: 1 },
  hover: {
    backgroundColor: "#25ff55",
    transition: {
      duration: 0.4,
      staggerChildren: 0,
    },
  },
};

const childrenVariants: Variants = {
  initial: {
    opacity: 1,
    x: "-100%",
  },
  hover: {
    x: "0%",
    transition: { duration: 0.4 },
  },
};

// Main Component
function FormButton({ size }: { size: "sm" | "lg" }) {
  const { scrollYProgress } = useScroll();
  const [isModalOpen, setModalOpen] = useState(false);

  const ButtonTranslateY = useTransform(
    scrollYProgress,
    [0.04, 0.041, 0.1, 0.11, 0.88, 0.885, 0.94, 0.95],
    ["0rem", "-4.5rem", "-4.5rem", "0rem", "0rem", "-4.5rem", "-4.5rem", "0rem"]
  );

  function handleOpenForm() {
    setModalOpen(true);
  }

  function handleCloseForm() {
    setModalOpen(false);
  }

  if (size === "sm") {
    return (
      <>
        <button
          onClick={handleOpenForm}
          className="md:hidden w-full h-[4rem] flex justify-between px-6 items-center absolute bottom-0 bg-[#ef4826] uppercase text-[15px] font-semibold tracking-tighter"
        >
          <p>Order Your HF-11</p>
          <BsPlusCircleFill size={27} className="bg-white rounded-full" />
        </button>
        <FormModal isOpen={isModalOpen} onClose={handleCloseForm} />
      </>
    );
  } else {
    return (
      <>
        <motion.button
          style={{ translateY: ButtonTranslateY }}
          onClick={handleOpenForm}
          variants={parentVariants}
          initial="initial"
          whileHover="hover"
          className="hidden md:flex w-[50%] h-[4.5rem] justify-between px-10 items-center fixed bottom-[-4.5rem] bg-[#ef4826] uppercase text-[18px] font-[600] tracking-tighter rounded-tr-[30px] z-[99]"
        >
          <p>
            <span
              className={`inline-flex size-full will-change-transform justify-between gap-[0.5rem] items-center px-5`}
            >
              <span className="inline-flex justify-evenly overflow-hidden items-center w-fit ">
                <span className="inline-flex items-center overflow-hidden w-full ">
                  <motion.span
                    className="inline-flex whitespace-nowrap will-change-transform "
                    variants={childrenVariants}
                  >
                    <span className="overflow-hidden">Order Your HF-11</span>
                    <span className="overflow-visible w-0">
                      Order Your HF-11
                    </span>
                  </motion.span>
                </span>
              </span>
            </span>
          </p>
          <BsPlusCircleFill
            size={38}
            className="bg-white rounded-full backdrop-blur-sm"
          />
        </motion.button>
        <FormModal isOpen={isModalOpen} onClose={handleCloseForm} />
      </>
    );
  }
}

export default FormButton;

const modalVariants: ModalVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: "100%",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

function FormModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("w-1/2");
    } else {
      document.body.classList.remove("w-1/2");
    }
  }, [isOpen]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[99] flex items-center justify-center bg-black bg-opacity-50"
          onClick={onClose}
          key="modal"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white w-full max-w-lg mx-auto rounded-lg shadow-lg p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-700">
                Commission Your HF-11
              </h2>
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-gray-900 transition-all"
              >
                ✕
              </button>
            </div>
            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                showToast("Thank You, Form submitted!");
                setTimeout(onClose, 1000);
              }}
            >
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-600"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ef4826]"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ef4826]"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-600"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ef4826]"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="address"
                  className="text-sm font-medium text-gray-600"
                >
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder="Enter your address"
                  className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ef4826]"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-600"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Enter your message"
                  className="border  max-h-[10rem] min-h-10 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ef4826]"
                />
              </div>
              <button
                type="submit"
                className="bg-[#ef4826] text-white px-4 py-2 rounded hover:bg-[#d64120] transition-all"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
