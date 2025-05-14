import { GalleryItem, galleryTitle } from "@/app/_types/Types";
import GalleryClient from "../_sections/GalleryClient";
import { Metadata } from "next";
import { GALLERY_DATA } from "@/data/db";


type Props = {
  params: Promise<{ title: galleryTitle }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const title = (await params).title;
  return {
    title: `Gallery - ${title.toUpperCase()}`,
  };
}

export default async function Gallery({
  params,
}: {
  params: Promise<{ title: galleryTitle }>;
}) {
  const { title } = await params;

  const matchedItem = GALLERY_DATA.find(
    (item) => item.title.toLowerCase() === title.toLowerCase()
  );

  if (!matchedItem) {
    throw new Error("Gallery item not found");
  }

  return (
    <GalleryClient
      images={matchedItem.images}
      title={matchedItem.title as galleryTitle}
      description={matchedItem.description}
    />
  );
}
