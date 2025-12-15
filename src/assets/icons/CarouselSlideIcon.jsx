// src/assets/icons/CarouselSlideIcon.jsx
import React from "react";

const CarouselSlideIcon = ({ activeIndex = 0 }) => {
  // Figma constants (DO NOT CHANGE)
  const DOT_SIZE = 12.3077;
  const DOT_RADIUS = 6.15385;
  const X = 7.38464;

  const Y_POSITIONS = [
    7.38452,
    24.6155,
    41.8462,
    59.0769,
    76.3076,
  ];

  return (
    <svg
      width="27.0769"
      height="96"
      viewBox="0 0 28 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute z-[10]"
      style={{
        left: "52.5px",
        top: "332px",
      }}
    >
      {/* Background Pill */}
      <rect
        width="27.0769"
        height="96"
        rx="12.3077"
        fill="white"
        fillOpacity="0.3"
      />

      {/* Dots */}
      {Y_POSITIONS.map((y, index) => (
        <rect
          key={index}
          x={X}
          y={y}
          width={DOT_SIZE}
          height={DOT_SIZE}
          rx={DOT_RADIUS}
          fill={index === activeIndex ? "#223F7F" : "#D9D9D9"}
        />
      ))}
    </svg>
  );
};

export default CarouselSlideIcon;
