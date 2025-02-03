import React from "react";

const ScrollDownIndicator = () => {
  return (
    <div className="flex flex-col items-center justify-center relative bottom-0">
      <p className="text-white mb-4">Scroll Down to know more</p>
      <svg
        className="size-8 animate-bounce border-2 rounded-full text-white" // Add animate-bounce here
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        ></path>
      </svg>
    </div>
  );
};

export default ScrollDownIndicator;