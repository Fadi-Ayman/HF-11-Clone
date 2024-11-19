import CustomLink from "../_components/CustomLink";
import GalleryLink from "../_components/GalleryLink";

function Home() {
  return (
    <div className="min-h-screen ">
      <CustomLink
        hasIcon
        hoverColor="#16a34a"
        href="/gallery"
        withTransition
        className="bg-red-600 px-6 py-2 text-black h-14 w-[90%] [border-bottom-right-radius:20px] md:w-52"
      >
        Gallery
      </CustomLink>

      <GalleryLink href="/gallery" />
    </div>
  );
}

export default Home;
