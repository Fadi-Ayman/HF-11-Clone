import AnimatedTitle from "./_components/AnimatedTitle";
import IntroVideo from "./_components/IntroVideo";
import IntroBottomNav from "./_sections/Intro/IntroBottomNav";

export default function Intro() {
  return (
    <div className="relative w-dvw h-dvh overflow-hidden ">
      {/* Intro video */}
      <IntroVideo />

      {/* overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-1 px-5 md:px-7 py-9 md:py-2 text-white">
        <AnimatedTitle title="Bespoke" />
        <AnimatedTitle className="ms-[27dvw]" title="Myth" />
        <AnimatedTitle title="Chaos" />
        <AnimatedTitle className="ms-[9dvw]" title="Maniac" />
        <IntroBottomNav />
      </div>
    </div>
  );
}
