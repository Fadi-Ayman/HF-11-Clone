"use client";
import { useEffect, useState } from "react";

type VedioProps = {
  src: string;
  type?: string;
  posterSrc: string;
  withLoop: boolean;
  className?:string
};

function Video({ src, type = "video/mp4", posterSrc, withLoop ,className =""}: VedioProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <video
      className={`z-0 object-cover size-full ${className}`}
      poster={posterSrc}
      autoPlay={true}
      loop={withLoop}
      muted={true}
      playsInline={true}
    >
      <source src={src} type={type} />
      This browser does not support HTML5 video.
    </video>
  );
}

export default Video;
