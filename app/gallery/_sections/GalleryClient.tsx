"use client";

import { useState } from "react";
import PageSwiper from "./PageSwiper";
import useScreenSize from "@/app/_hooks/useScreenSize";
import MiniSwiper from "./MiniSwiper";
import GalleryLink from "@/app/_components/GalleryLink";
import { galleryTitle } from "@/app/_types/Types";
import GalleryOverlay from "./GalleryOverlay";

type GalleryClientProps = {
  images: string[];
  title?: galleryTitle;
  description?: string;
};

function GalleryClient({ images, title, description }: GalleryClientProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { width } = useScreenSize();
  const miniSwiperCondition = width > 1124;
  const [isOpen, setIsOpen] = useState(title === "car" ? false : true);

  return (
    <div className="h-dvh w-dvw max-h-dvh relative overflow-hidden">
      <PageSwiper
        images={images}
        activeIndex={activeIndex}
        handleImageChange={setActiveIndex}
        isOpen={isOpen}
      />

      {miniSwiperCondition && !isOpen && (
        <MiniSwiper
          images={images}
          activeIndex={activeIndex}
          handleImageChange={setActiveIndex}
        />
      )}

      {!isOpen && <GalleryLink place="insideGallery" />}

      {title !== "car" && (
        <GalleryOverlay
          title={title}
          images={images}
          description={description}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
}

export default GalleryClient;
