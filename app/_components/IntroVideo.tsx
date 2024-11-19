"use client";
import { useEffect, useState } from "react";

function IntroVideo() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <video
      className="z-0 object-cover size-full"
      poster="/Intro/IntroPoster.avif"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/Intro/HF11-Intro.mp4" type="video/mp4" />
      This browser does not support HTML5 video.
    </video>
  );
}

export default IntroVideo;
