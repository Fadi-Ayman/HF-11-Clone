"use client";
import {
  AboutContentTwoSwiperImages,
  TimerImagesFour,
  TimerImagesOne,
  TimerImagesThree,
  TimerImagesTwo,
} from "@/app/_lib/constants";
import AboutContentReusableSection from "../AboutContentReusableSection";
import AboutContentOneImages from "./AboutContentOneImages";
import AboutContentTwoSwiper from "./AboutContentTwoSwiper";
import DynamicImages from "../DynamicImages";


function AboutContent() {
  return (
    <div className="size-full   overflow-hidden  lg:mt-[180dvh]">
      {/* Sections Container */}

      <div className="overflow-hidden py-5 px-[6%] lg:px-[7.5%]">
        {/* Section one */}
        <AboutContentReusableSection
          title="maniacs"
          description="Twins, born in Ukraine, raised in Canada. High School dropouts. Trained
        in Italy and California. Oilstainlab is their un-medicated vision, a
        pure manifest of automotive excess & Fun."
          withSeparator
          bottomLeftText={"Double Vision"}
          bottomRightText="Our founders “the twins” as commonly referred to by the industry, have
          been breaking rules and records; clinching world championships and
          responsible for 6.5 million street cars. Maniacally obsessed with
          forging vehicles, experiences and technologies beyond sanity. Inspired
          by those before them, Oilstainlab is a new generation of trouble
          makers, maniacs creating for maniacs."
          bottomRightSize="normal"
        >
          <AboutContentOneImages images={TimerImagesOne} />
        </AboutContentReusableSection>

        {/* Section two */}
        <AboutContentReusableSection
          title="Mission"
          description="When we started Oilstainlab in 2018, we promised never to be sane. Instead, we embraced that part of ourselves that had always been truest."
          withSeparator
          bottomLeftText={"TooFar Gone"}
          bottomRightText="We’re too far gone to resist. Our inner demons have full control. We pine for the frenzy and madness of a bygone era. We vowed to distill this into everything we do, windswept with the latest in technology and innovation. Because we know there are others just like us, tired of lukewarm thrills. Just as addicted to progress as they are to the past."
          bottomRightSize="normal"
        >
          <AboutContentTwoSwiper images={AboutContentTwoSwiperImages} />
        </AboutContentReusableSection>

        {/* Section Three */}
        <AboutContentReusableSection
          title="Time Machine"
          withSeparator={false}
          bottomLeftText={"DIVERGENT PAST"}
          bottomRightText="To find our future we needed to break free from the grip of time."
          bottomRightSize="large"
        >
          <DynamicImages
            images={TimerImagesTwo}
            delayInSec={1}
            className="size-full"
          />
        </AboutContentReusableSection>

        {/* Section Four */}
        <AboutContentReusableSection
          className="mt-20"
          withSeparator={false}
          bottomLeftText={"Time Machine"}
          bottomRightText="Do you believe in time machines? Neither did we, until we built one. A gateway to the purest era of motorsport. Timeless process and materials, an escaped science experiment from an alternate reality. Few go back to go forward. It would have been insane for us not to."
          bottomRightSize="normal"
        >
          <DynamicImages
            images={TimerImagesThree}
            delayInSec={0.9}
            className="h-full w-full lg:w-[95%] ms-auto aspect-[1/0.9]"
          />
        </AboutContentReusableSection>

        {/* Section Five */}
        <AboutContentReusableSection
          className="mt-20 pb-10"
          title="When the past overtakes the future. Half-11 Prototype."
          withSeparator={false}
        >
          <DynamicImages
            images={TimerImagesFour}
            delayInSec={0.8}
            className="size-full aspect-[1/0.85]"
          />
        </AboutContentReusableSection>
      </div>
    </div>
  );
}

export default AboutContent;
