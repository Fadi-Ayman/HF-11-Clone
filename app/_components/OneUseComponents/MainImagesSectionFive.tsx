
function MainImagesSectionFive() {

  return (
    <div className="size-full  bg-red-500  ">

      <div className="w-full h-[300dvh] bg-no-repeat sticky top-0 overflow-hidden">
        <img
          className="w-full h-[120dvh] object-cover  object-[0%]"
          src="/HomeImages/SectionFourMainImageOne.avif"
          alt="1st Image"
          />
      </div>

      <div className="w-full h-[300dvh] bg-no-repeat sticky top-0 overflow-hidden">
        <img
          className="w-full h-[110dvh] object-cover  object-[50%]"
          src="/HomeImages/SectionFourMainImageTwo.avif"
          alt="2nd Image"
        />
      </div>

      <div className="w-full bg-no-repeat sticky top-0 overflow-hidden">
        <img
          className="w-full h-[110dvh] object-cover  object-[50%]"
          src="/HomeImages/SectionFourMainImageThree.avif"
          alt="3rd Image"
          />
      </div>

    </div>
  );
}

export default MainImagesSectionFive;
