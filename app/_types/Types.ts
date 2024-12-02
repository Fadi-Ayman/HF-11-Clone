export type galleryTitle =
  | "car"
  | "power"
  | "origin"
  | "beauty"
  | "asylum"
  | "obsession"
  | "strength";

export type GalleryItem = {
  id: number;
  title: string;
  description: string;
  images: string[];
};
