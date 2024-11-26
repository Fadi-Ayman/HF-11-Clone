import MainImagesSectionFive from "@/app/_components/OneUseComponents/MainImagesSectionFive";

function HomeSectionFour() {
  return (
    <section className="w-screen h-[900dvh] bg-blue-500  ">

      <div className="flex justify-start  h-full">
        {/* MainImages */}
        <MainImagesSectionFive />

        {/* Content */}
        <div className="w-full bg-grreen-500 h-full">content</div>

      </div>


    </section>
  );
}

export default HomeSectionFour;
