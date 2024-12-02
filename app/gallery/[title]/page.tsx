import { GalleryItem, galleryTitle } from "@/app/_types/Types";
import GalleryClient from "../_sections/GalleryClient";
import { Metadata } from "next";
const baseUrl ="https://hf-11-clone.vercel.app"

type Props = {
  params: Promise<{ title: galleryTitle }>
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const title = (await params).title
  return {
    title: `Gallery - ${title.toUpperCase()}`,
  }
}


export default async function Gallery({
  params,
}: {
  params: Promise<{ title: galleryTitle }>;
}) {
  const { title } = await params;
  const res = await fetch(`${baseUrl}/api/gallery?title=${title}`);
  const [{ images, description }]: [GalleryItem] = await res.json();

  return (
    <GalleryClient images={images} title={title} description={description} />
  );
}
