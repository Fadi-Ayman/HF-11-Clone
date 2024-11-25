import AnimatedTitleInView from "@/app/_components/AnimatedTitleInView";
import FormButton from "@/app/_components/FormButton";

function HomeSectionFive() {
  return (
    <section className="w-screen   h-[85dvh] relative md:h-[155dvh]  bg-[#ebebed]  overflow-hidden">
      {/* Content */}
      <div className="z-[100] relative text-[#202020] ps-[5%] md:ps-[3%] pt-[2rem] md:pt-[2rem] ">
        <AnimatedTitleInView
          title="Descend into"
          delay={0.3}
          className="text-responsive-8xl h-responsive-8xl"
        />
        <AnimatedTitleInView
          title="Madness"
          delay={0.3}
          className="text-responsive-8xl h-responsive-8xl ml-[11%]"
        />
        <AnimatedTitleInView
          title="With     Your"
          delay={0.3}
          className="text-responsive-8xl h-responsive-8xl"
        />
        <AnimatedTitleInView
          title="Hf"
          delay={0.3}
          className="text-responsive-8xl h-responsive-8xl me-[4%] inline-block ml-[28%]"
        />
        <AnimatedTitleInView
          title="11"
          delay={1}
          className="text-responsive-8xl h-responsive-8xl text-red-500  inline-block font-normal"
        />
      </div>

      {/* Image */}
      <div className="bg-[url('/HomeImages/SectionFiveImage.avif')] bg-cover  bg-bottom    bg-no-repeat w-full h-[50%]  md:h-[70%] bottom-[3rem] md:bottom-[-4rem] absolute"></div>

      {/* Gradient for make a smooth transition color between image and bg */}
      <span
        className="block absolute  md:bottom-[calc(70%-21rem)]  bottom-[calc(50%-2rem)] h-[10rem] w-full md:h-[30rem] 
          bg-gradient-to-b from-[#ebebecee] via-[#e6e4e4]  to-[#fff0]  z-0"
      ></span>

      {/* Form On small screens */}
      <FormButton />
    </section>
  );
}

export default HomeSectionFive;
