import { useEffect } from "react";

const useTouchpadScroll = () => {
  useEffect(() => {
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
