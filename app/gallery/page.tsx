"use client";
import PageSwiper from "../_components/PageSwiper";
import MiniSwiper from "../_components/MiniSwiper";
import { useState } from "react";
import GalleryLink from "../_components/GalleryLink";
import useScreenSize from "../_hooks/useScreenSize";

const images = [
  "../MainGallery/1.avif",
  "../MainGallery/2.avif",
  "../MainGallery/3.avif",
  "../MainGallery/4.avif",
  "../MainGallery/5.avif",
  "../MainGallery/6.avif",
  "../MainGallery/7.avif",
  "../MainGallery/8.avif",
  "../MainGallery/9.avif",
  "../MainGallery/10.avif",
  "../MainGallery/11.avif",
  "../MainGallery/12.avif",
  "../MainGallery/13.avif",
  "../MainGallery/14.avif",
  "../MainGallery/15.avif",
];

function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { width } = useScreenSize();
  const miniSwiperCondition = width > 1124;
  return (
    <div className="h-dvh w-dvw max-h-dvh relative overflow-hidden">
      <PageSwiper
        images={images}
        activeIndex={activeIndex}
        handleImageChange={setActiveIndex}
      />

      {miniSwiperCondition && (
        <MiniSwiper
          images={images}
          activeIndex={activeIndex}
          handleImageChange={setActiveIndex}
        />
      )}

      <GalleryLink href="/" />
    </div>
  );
}

export default Gallery;
