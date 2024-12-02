"use client";
import { motion } from "framer-motion";
import AnimatedTitle from "../AnimatedTitle";

function CarSpecsSectionOne() {
  return (
    <motion.div
      initial={{ y: "120%", x: "-50%" }}
      animate={{ y: "0%", x: "-50%" }}
      transition={{ duration: 2.5, delay: 1.2 }}
      className="lg:w-[30%] xl:w-[20%] w-[80%] absolute bottom-[2rem] lg:bottom-[1.4rem] bg-black mix-blend-difference  left-[50%] lg:left-[60%]  z-10 "
    >
      <div className="text-4xl font-bold uppercase  antialiased w-fit ">
        <AnimatedTitle
          title="Less is more"
          delay={3.5}
          endAnimationInOneSec={true}
          className=" text-white   text-4xl h-[36px] "
        />
        <AnimatedTitle
          title="more is less."
          delay={3.5}
          endAnimationInOneSec={true}
          className=" text-white   text-4xl h-[36px] "
        />
      </div>

      <br />

      <div className="px-1">
        <div className="flex w-full text-white justify-between items-center text-2xl border-b border-gray-600 py-3  font-normal">
          <AnimatedTitle
            title="1,950"
            delay={3.6}
            endAnimationInOneSec={false}
            className=" text-white  text-2xl h-[24px] font-normal "
          />
          <p>Weight (LBS)</p>
        </div>

        <div className="flex w-full text-white justify-between items-center text-2xl border-b border-gray-600 py-3  font-normal">
          <AnimatedTitle
            title="3.2"
            delay={3.7}
            endAnimationInOneSec={false}
            className=" text-white  text-2xl h-[24px] font-normal "
          />
          <p>Seconds (0-60)</p>
        </div>

        <div className="flex w-full text-white justify-between items-center text-2xl border-b border-gray-600 py-3  font-normal">
          <AnimatedTitle
            title="12,000"
            delay={3.8}
            endAnimationInOneSec={false}
            className=" text-white  text-2xl h-[24px] font-normal "
          />
          <p>RPM</p>
        </div>

        <div className="flex w-full text-white justify-between items-center text-2xl  py-3  font-normal">
          <AnimatedTitle
            title="650"
            delay={3.9}
            endAnimationInOneSec={false}
            className=" text-white  text-2xl h-[24px] font-normal "
          />
          <p>HP</p>
        </div>
      </div>
    </motion.div>
  );
}

export default CarSpecsSectionOne;
