"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

// Declare the showToast function to be used outside of the component
let showToast: (message: string) => void;

const ToastProvider: React.FC = () => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Function to show the toast with a custom message
  showToast = (message: string) => {
    setToastMessage(message);
    // Hide toast after 2 seconds
    setTimeout(() => setToastMessage(null), 2000);
  };

  return (
    <AnimatePresence>
      {toastMessage && (
        <motion.div
          key="toast"
          initial={{ opacity: 0, y: -20, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: -20, x: "-50%" }}
          transition={{ duration: 0.5 }}
          className="fixed top-4 left-1/2   bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 z-[999999999]"
        >
          <span className="text-center">{toastMessage}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Export the showToast function for use outside this component
export { showToast };
export default ToastProvider;
