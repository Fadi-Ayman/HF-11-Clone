import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const updateScreenSize = () => {
      const { innerWidth, innerHeight } = window;
      setScreenSize({ width: innerWidth, height: innerHeight });
    };

    let throttleTimer: NodeJS.Timeout | null = null;
    const handleResize = () => {
      if (!throttleTimer) {
        throttleTimer = setTimeout(() => {
          updateScreenSize();
          throttleTimer = null;
        }, 200);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    updateScreenSize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, [isClient]);

  return screenSize;
};

export default useScreenSize;
