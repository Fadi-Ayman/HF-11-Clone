"use client"
import AboutContent from "@/app/_components/OneUseComponents/AboutContent";
import AboutMainImages from "@/app/_components/OneUseComponents/AboutMainImages";
import { useScroll } from "motion/react";
import { useRef } from "react";


function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({target:sectionRef,offset:["start end","end end"]})

  return (
    <section 
    id="about"
    ref={sectionRef} className="w-screen h-[1000dvh] bg-blue-500  ">

      <div className="flex justify-start   h-full">
        {/* MainImages */}
        <AboutMainImages scrollYProgress={scrollYProgress}/>

        {/* Content */}
      <AboutContent  scrollYProgress={scrollYProgress}/>

      </div>


    </section>
  );
}

export default About;
