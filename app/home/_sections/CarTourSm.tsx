import DownloadSpecsLink from "@/app/_components/OneUseComponents/DownloadSpecsLink";
import SectionThreeCarGalleries from "@/app/_components/OneUseComponents/CarTourCarGalleries";
import Video from "@/app/_components/Video";

function CarTourSm() {
  return (
    <section 
    id="car-tour-sm"

    className="block lg:hidden w-screen  ">
      <div className="size-full  relative bg-[#aeaeaf]  ">
        {/* Vedio */}
        <Video
          posterSrc="/HomeImages/sectionThreeVedioPoster.avif"
          src="/HomeImages/SectionThreeVedio.mp4"
          withLoop={false}
        />

        {/* content */}
        <div className="bg-white/70 pb-5 flex flex-col gap-5 items-center justify-center overflow-hidden">
          <SectionThreeCarGalleries isSmallScreen={true} />

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

export default CarTourSm;
