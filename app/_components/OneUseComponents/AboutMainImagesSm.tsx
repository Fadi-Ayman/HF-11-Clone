
function AboutMainImagesSm() {
  return (
    <div className="size-full relative select-none block lg:hidden overflow-hidden">
      <img
        className="w-full scale-125 object-cover object-[0%]"
        src="/HomeImages/SectionFourMainImageOne.avif"
        alt="About Image"
      />

      <div className=" size-full absolute top-0 left-0 flex items-center justify-center bg-black/20">
        <p className="text-5xl font-bold tracking-tight  text-white ">About</p>
      </div>

    </div>
  );
}

export default AboutMainImagesSm;
