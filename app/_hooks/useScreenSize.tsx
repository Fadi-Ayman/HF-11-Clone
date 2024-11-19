
import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    // Define the update function
    const updateScreenSize = () => {
      const { innerWidth, innerHeight } = window;
      setScreenSize((prev) => {
        // Only update if the size actually changes
        if (prev.width !== innerWidth || prev.height !== innerHeight) {
          return { width: innerWidth, height: innerHeight };
        }
        return prev;
      });
    };

    // Use throttling to limit updates
    let throttleTimer: NodeJS.Timeout | null = null;
    const handleResize = () => {
      if (!throttleTimer) {
        throttleTimer = setTimeout(() => {
          updateScreenSize();
          throttleTimer = null; // Reset timer
        }, 200); // Adjust delay as needed
      }
    };

    // Add event listeners for resize and orientation change
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    // Initial call to set dimensions
    updateScreenSize();

    return () => {
      // Cleanup event listeners and timers
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
