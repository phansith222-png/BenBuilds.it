"use client";

import { motion } from "framer-motion";

export const SplitScreen = ({
  leftContent,
  rightContent,
}: {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      {/* Left Gray Panel */}
      <motion.div
        className="w-full md:w-1/2 min-h-[100dvh] md:min-h-0 bg-gray-panel text-text-gray-main flex flex-col p-8 md:p-16 lg:p-24 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {leftContent}
      </motion.div>

      {/* Right Black Panel */}
      <motion.div
        className="w-full md:w-1/2 min-h-[100dvh] md:min-h-0 bg-black-panel text-text-black-main flex flex-col p-8 md:p-16 lg:p-24 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {rightContent}
      </motion.div>
    </div>
  );
};
