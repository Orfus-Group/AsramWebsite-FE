import React, { useEffect, useRef, useState } from "react";

export default function AnimatedStatValue({ value, className, style }) {
  return (
    <h3 className={className} style={style}>
      {value}
    </h3>
  );
}
