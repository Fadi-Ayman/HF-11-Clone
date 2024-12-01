import { galleryTitle } from "@/app/_types/Types";
import GalleryClient from "../_sections/GalleryClient";

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

const dummyText =
  "Slide 2 of 6. The HF-11 is full psycho about aerodynamic performance and aesthetic purity. We lost our minds in the mission to never compromise. Resulting in a proportion that is foreign yet immediately understandable. In the back, the guts of the massive powertrain are rebelliously exposed. Pronounced fenders shroud the wide tires and declare war on static air, the body side is sculpted to cajole the air towards the massive ground effects and hidden rear wing, ripping downforce unto the ground. Just like the air, you’ll know when it’s here. *Pre-production images shown.";

export default async function Gallery({
  params,
}: {
  params: Promise<{ title: galleryTitle }>}) {
  const { title } = await params;
  return <GalleryClient images={images} title={title} text={dummyText} />;
}
