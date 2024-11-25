"use client";

import {  useScroll } from "motion/react";
import NavBar from "./_sections/navbar/NavBar";
import HomeSectionOne from "./_sections/HomeSectionOne";
import { useRef } from "react";
import HomeSectionTwo from "./_sections/HomeSectionTwo";
import HomeSectionThree from "./_sections/HomeSectionThree";
import HomeSectionFour from "./_sections/HomeSectionFour";
import HomeSectionFive from "./_sections/HomeSectionFive";
import Footer from "./_sections/Footer";
import HomeSectionThreeSm from "./_sections/HomeSectionThreeSm";
import useTouchpadScroll from "../_hooks/useTouchpadScroll";

function Home() {
  useTouchpadScroll() // to reduce scroll sensitivity on touchpad & touchscreen
  const HomePageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: HomePageRef,
  });

  return (
    <div ref={HomePageRef} className=" relative  ">

      <NavBar />

      {/* Sticky Sections */}
      <div className="relative  ">
      <HomeSectionOne scrollYProgress={scrollYProgress} />
      <HomeSectionTwo  />
      {/* Section 3 in Lg */}
      <HomeSectionThree  />
      </div>

      {/* Section 3 in sm (not Sticky) */}
      <HomeSectionThreeSm   />


      {/* Normal sections */}
      <HomeSectionFour  />
      <HomeSectionFive  />

      <Footer  />
    </div>
  );
}

export default Home;
