// src/assets/icons/CarouselSlideIcon.jsx
import React from "react";

const CarouselSlideIcon = ({ activeIndex = 0 }) => {
  // Figma constants
  const CONTAINER_WIDTH = 95.5;
  const CONTAINER_HEIGHT = 27.1;
  const DOT_SIZE = 13.1;
  const DOT_RADIUS = 6.2;
  const GAP = 5;
  const PADDING_X = 5; // (95.5 - (5*13.1 + 4*5)) / 2 = 5
  const PADDING_Y = 7; // (27.1 - 13.1) / 2 = 7

  const DOTS = [0, 1, 2, 3, 4];

  return (
    <svg
      width={CONTAINER_WIDTH}
      height={CONTAINER_HEIGHT}
      viewBox={`0 0 ${CONTAINER_WIDTH} ${CONTAINER_HEIGHT}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute z-[10]"
      style={{
        bottom: "80px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {/* Background Pill */}
      <rect
        width={CONTAINER_WIDTH}
        height={CONTAINER_HEIGHT}
        rx="12.3"
        fill="white"
        fillOpacity="0.3"
      />

      {/* Dots */}
      {DOTS.map((index) => (
        <rect
          key={index}
          x={PADDING_X + index * (DOT_SIZE + GAP)}
          y={PADDING_Y}
          width={DOT_SIZE}
          height={DOT_SIZE}
          rx={DOT_RADIUS}
          fill={index === activeIndex ? "#223F7F" : "#FFFFFF"}
        />
      ))}
    </svg>
  );
};

export default CarouselSlideIcon;
