import { useEffect } from "react";
import useScreenSize from "./useScreenSize";

const useTouchpadScroll = () => {
    const { width } = useScreenSize();



  useEffect(() => {
    if(width < 600) return;
    const handleScroll = (event: WheelEvent) => {
      let deltaY = event.deltaY;
      if (deltaY === 100 || deltaY === -100) return;

      event.preventDefault();

      deltaY = deltaY * 0.8;
      window.scrollBy(0, deltaY);
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);
};

export default useTouchpadScroll;
