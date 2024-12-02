"use client";
import { useEffect, useRef, useState } from "react";

type DynamicImagesProps = {
  delayInSec: number;
  images: string[];
  className?: string;
};

function DynamicImages({
  delayInSec = 1,
  images,
  className = "",
}: DynamicImagesProps) {
  const [activeImage, setActiveImage] = useState<string>(images[0]);
  const [pause, setPause] = useState<boolean>(false);
  const IndexRef = useRef<number>(0);

  useEffect(() => {
    if (!pause) {
      IndexRef.current = IndexRef.current + 1;
      if (IndexRef.current === images.length) IndexRef.current = 0;
      const interval = setInterval(() => {
        setActiveImage(images[IndexRef.current]);
      }, delayInSec * 1000);
      return () => clearInterval(interval);
    }
  }, [activeImage, pause]);

  return (
    <div
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
      className={` select-none ${className} `}
    >
      <img
        className="size-full object-cover "
        src={activeImage}
        alt={"Image"}
      />
    </div>
  );
}

export default DynamicImages;
