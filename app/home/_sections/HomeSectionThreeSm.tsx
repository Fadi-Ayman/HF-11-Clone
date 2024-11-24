import DownloadSpecsLink from "@/app/_components/OneUseComponents/DownloadSpecsLink";
import Video from "@/app/_components/Video";

function HomeSectionThreeSm() {
  return (
    <section className="block lg:hidden w-screen  ">
      <div className="size-full  relative bg-[#aeaeaf]  ">
        {/* Vedio */}
        <Video
          className="   w-full   object-cover   relative 
          bottom-[calc(0px-50%)] "
          posterSrc="/HomeImages/sectionThreeVedioPoster.avif"
          src="/HomeImages/sectionThreeVedio.mp4"
          withLoop={false}
        />

        {/* content */}
        <div className="bg-white/50 pb-5 flex flex-col gap-2 items-center justify-center">
          <div className="  w-full h-[4rem] border border-gray-500 ">asdad</div>

          {/* Download Specs  */}
          <DownloadSpecsLink />
        </div>

        {/* Gradient for make a smooth transition color between video and bg */}
        <span
          className="block absolute top-[-6rem]  w-full h-[12rem] 
          bg-gradient-to-b from-[#a1a1a15b] via-[#a2a2a2] to-[#aeaeaf00] mix-blend-luminosity "
        ></span>
      </div>
    </section>
  );
}

export default HomeSectionThreeSm;
