import React from "react";
import { T } from "../theme";

const PixelsSliderDots = ({ total = 5, activeIndex = 0 }) => {
  const dot = 12.31; 
  const gap = 7.4;
  const padding = 7.4;

  return (
    <div
      className={`
        absolute
        left-[52.5px]
        top-[332px]
        flex flex-col items-center
        backdrop-blur-[4px]
      `}
      style={{
        width: "27.08px",
        height: "96px",
        padding: `${padding}px 0`,
        gap: `${gap}px`,
        // 12px radius exists → Closest to Zeplin 12.3px
        borderRadius: "12px",
        backgroundColor: "rgba(255,255,255,0.30)",
      }}
    >
      {[...Array(total)].map((_, i) => (
        <span
          key={i}
          style={{
            width: `${dot}px`,
            height: `${dot}px`,
            borderRadius: "50%",
            backgroundColor:
              i === activeIndex
                ? T.color.text.secondary  // using theme (closest dark blue)
                : "#D9D9D9", // Zeplin exact
          }}
        />
      ))}
    </div>
  );
};

export default PixelsSliderDots;
