"use client";

import { useEffect, useRef } from "react";
import { AiFillSound } from "react-icons/ai";
import { motion } from "framer-motion";

function CarSoundOwnership() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio only once
    audioRef.current = new Audio("/HomeImages/EngineSound.mp3");

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handlePlaySound = () => {
    if (audioRef.current) {
      // Play the audio if paused or reset if it has ended
      if (audioRef.current.paused || audioRef.current.ended) {
        audioRef.current.play();
      }
    }
  };

  return (
    <div className="absolute top-[calc(100vh-65dvh)] md:top-1/2 left-[35%] md:left-auto md:right-[9%] transform -translate-x-1/2 -translate-y-1/2 text-white font-bold flex justify-between  items-start flex-col h-[60dvh] tracking-tighter ring-0">
      {/* Content */}
      <div className="flex flex-col gap-3">
        <h4 className="h-[31px] overflow-hidden">
          <motion.p
            initial={{ y: "30px", opacity: 0 }}
            whileInView={{ y: "0px", opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, margin: "0px 0px -100px 0px" }}
            className="uppercase leading-0 text-3xl"
          >
            oilstainlab
          </motion.p>
        </h4>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: false, margin: "0px 0px -200px 0px" }}
          className="uppercase text-xl leading-5"
        >
          where the past <br /> overtakes the future.
        </motion.p>
      </div>

      {/* Button */}
      <motion.button
        initial={{ opacity: 0, y: "100%" }}
        whileInView={{ opacity: 1, y: "0%" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        onClick={handlePlaySound}
        aria-label="Play engine sound"
        className="text-sm hover:bg-red-600 duration-500 uppercase flex items-center justify-center bg-white text-black px-4 py-2 rounded-full gap-2"
      >
        engine sound
        <span className="inline-block mt-[2.64px]">
          <AiFillSound size={15} />
        </span>
      </motion.button>
    </div>
  );
}

export default CarSoundOwnership;
