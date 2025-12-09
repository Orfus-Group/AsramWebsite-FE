import React from "react";
import { T } from "../../theme";

export default function Button({
  children,
  bg = T.color.primary,
  color = T.color.background.white,
  font = T.font.family,
  weight = T.font.weight.regular,
  size = "md",
  radius = "md",
  rounded,          // NEW
  width,
  height,
  px,
  py,
  customPadding,     // NEW
  textSize,
  leading,
  tracking = "tracking-[0px]",
  gap = "",          // NEW: icon/text spacing
  borderColor,       // NEW
  borderWidth,       // NEW
  borderStyle = "solid", // NEW

  icon = null,       // NEW
  customClass = "",  // NEW
  className = "",
  ...rest
}) {
  /** -------------------------------
   * SIZE PRESETS (fallback)
   --------------------------------*/
  const SIZE_MAP = {
    sm: {
      text: T.font.size.sm,
      padding: "px-[12px] py-[6px]",
      leading: "leading-[18px]",
    },
    md: {
      text: "text-[15px]",
      padding: "px-[20px] py-[10px]",
      leading: "leading-[23px]",
    },
    lg: {
      text: T.font.size.lg,
      padding: "px-[28px] py-[14px]",
      leading: T.font.leading.normal,
    },
  };

  const current = SIZE_MAP[size] || SIZE_MAP.md;

  return (
    <button
      className={`
        flex items-center justify-center
        ${font}
        ${weight}
        ${textSize || current.text}
        ${leading || current.leading}
        ${tracking}

        ${rounded ? "" : T.radius[radius]}
        ${rounded ? "" : ""}

        ${customPadding ? customPadding : ""}
        ${!customPadding && !px && !py ? current.padding : ""}
        ${px ? `px-[${px}]` : ""}
        ${py ? `py-[${py}]` : ""}

        ${gap ? `gap-[${gap}]` : "gap-[0px]"}
        
        ${className}
        ${customClass}
      `}
      style={{
        backgroundColor: bg,
        color: color,
        width: width || "auto",
        height: height || "auto",
        borderColor: borderColor || "transparent",
        borderWidth: borderWidth || 0,
        borderStyle: borderStyle,
        borderRadius: rounded || undefined,
      }}
      {...rest}
    >
      {children}

      {icon && (
        <span className="ml-[6px] flex items-center">
          {icon}
        </span>
      )}
    </button>
  );
}
