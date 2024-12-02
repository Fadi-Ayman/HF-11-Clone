"use client";

import FormButton from "@/app/_components/FormButton";
import NavBar from "@/app/_components/navbar/NavBar";
import useTouchpadScroll from "@/app/_hooks/useTouchpadScroll";
import { useScroll } from "motion/react";
import { useRef } from "react";
import About from "./About";
import CarTour from "./CarTour";
import CarTourSm from "./CarTourSm";
import Footer from "./Footer";
import HomeSectionFive from "./HomeSectionFive";
import HomeSectionOne from "./HomeSectionOne";
import Ownership from "./Ownership";
import ToastProvider from "@/app/_components/Toast";

function HomeClient() {
  useTouchpadScroll(); // Reduce scroll sensitivity on touchpad & touchscreen
  const HomePageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: HomePageRef,
  });

  return (
    <div ref={HomePageRef} className="relative">
      <NavBar />

      {/* Sticky Sections */}
      <div className="relative">
        <HomeSectionOne scrollYProgress={scrollYProgress} />
        <Ownership />
        {/* Section 3 in Lg */}
        <CarTour />
      </div>

      {/* Section 3 in sm (not Sticky) */}
      <CarTourSm />

      {/* Normal sections */}
      <About />
      <HomeSectionFive />

      <Footer />

      {/* Form */}
      <FormButton size={"lg"} />
      {/* Toaster */}
      <ToastProvider />
    </div>
  );
}

export default HomeClient;
