"use client";

import { useScroll } from "motion/react";
import NavBar from "../_components/navbar/NavBar";
import HomeSectionOne from "./_sections/HomeSectionOne";
import { useRef } from "react";
import Ownership from "./_sections/Ownership";
import CarTour from "./_sections/CarTour";
import About from "./_sections/About";
import HomeSectionFive from "./_sections/HomeSectionFive";
import Footer from "./_sections/Footer";
import CarTourSm from "./_sections/CarTourSm";
import useTouchpadScroll from "../_hooks/useTouchpadScroll";


function Home() {
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
    </div>
  );
}

export default Home;
