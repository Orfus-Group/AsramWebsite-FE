import React from "react";
import { T } from "../../theme";

const links = ["Faculty", "Students", "Admissions", "About"];

const ShortcutLinks = () => (
  <div
    className="
      flex items-center justify-end
      gap-[40px]
      h-[40px]
      px-[60px]
    "
    style={{
      color: T.color.background.white,
      fontFamily: T.font.family.replace("font-", ""), // ensures actual font loaded
      fontWeight: 500, // theme equivalent of font-medium
      fontSize: "14px",
      lineHeight: "14px",
    }}
  >
    {links.map((item) => (
      <button
        key={item}
        className="hover:opacity-80 transition"
        style={{
          color: T.color.background.white,
          fontFamily: T.font.family.replace("font-", ""),
        }}
      >
        {item}
      </button>
    ))}
  </div>
);

export default ShortcutLinks;
