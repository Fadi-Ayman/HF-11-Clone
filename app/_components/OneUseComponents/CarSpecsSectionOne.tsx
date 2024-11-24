import { motion } from "framer-motion";

function CarSpecsSectionOne() {
  return (
    <motion.div
      initial={{ y: "120%", x: "-50%" }}
      animate={{ y: "0%", x: "-50%" }}
      transition={{ duration: 2.5, delay: 1.2 }}
      className="lg:w-[20%] w-[80%] absolute bottom-[2rem] lg:bottom-[1.4rem] bg-black mix-blend-difference  left-[50%] lg:left-[60%]  z-10 "
    >
      <h6 className="text-4xl font-bold uppercase antialiased w-fit ">
        <p className="text-white ">Less is more</p>
        <p className="text-white ">more is less.</p>
      </h6>

      <br />

      <div className="px-1">
        <div className="flex w-full text-white justify-between items-center text-2xl font-semibold border-b border-gray-600 py-3">
          <p>1,950</p>
          <p>Weight (LBS)</p>
        </div>

        <div className="flex w-full text-white justify-between items-center text-2xl font-semibold border-b border-gray-600 py-3">
          <p>3.2</p>
          <p>Seconds (0-60)</p>
        </div>

        <div className="flex w-full text-white justify-between items-center text-2xl font-semibold border-b border-gray-600 py-3">
          <p>12,000</p>
          <p>RPM</p>
        </div>

        <div className="flex w-full text-white justify-between items-center text-2xl font-semibold  py-3">
          <p>650</p>
          <p>HP</p>
        </div>
      </div>
    </motion.div>
  );
}

export default CarSpecsSectionOne;
