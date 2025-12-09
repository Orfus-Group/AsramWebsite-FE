export const theme = {
  // ------------------------------------
  // FONT SYSTEM
  // ------------------------------------
  font: {
    family: "font-montserrat",

    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },

    size: {
      xs: "text-[12px]",
      sm: "text-[14px]",
      base: "text-[16px]",
      lg: "text-[18px]",
      xl: "text-[20px]",
      "2xl": "text-[24px]",
      "3xl": "text-[28px]",
      "4xl": "text-[36px]",
    },

    leading: {
      none: "leading-none",
      tight: "leading-tight",
      snug: "leading-snug",
      normal: "leading-normal",
      relaxed: "leading-relaxed",
    },
  },

  // ------------------------------------
  // COLOR SYSTEM (DESIGN TOKENS)
  // ------------------------------------
color: {
  primary: "#008C8C",
 secondary: "#223F7F",
 dark: "#191919",
 extra: {
  dark80: "#191919CC",   // original #191919/80
  dark10: "rgba(25,25,25,0.10)",  // original #1919191A
},
  text: {
    main: "#1A2A44",
    dark: "#191919",
    light: "#FFF",
    secondary: "#223F7F",
    muted: "#6B7280",
    grayish: "#374151",
    researchMuted: "#4B5563",
  },

  border: "#E5E7EB",

  background: {
    white: "#FFFFFF",
    soft: "#F9FAFB",
    section: "#F7FAFF",
    programCard: "#F7F9FC",
  },
},



  // ------------------------------------
  // TAILWIND BACKGROUND UTILITY HELPERS
  // ------------------------------------
 bg: {
  white: "bg-white",
  soft: "bg-[#F9FAFB]",
  section: "bg-[#F7FAFF]",
  programCard: "bg-[#F7F9FC]",
},


  // ------------------------------------
  // SHADOW TOKENS
  // ------------------------------------
  shadow: {
    card: "shadow-[0px_3.94px_13.09px_rgba(0,0,0,0.05)]",
    soft: "shadow-[0px_2px_8px_rgba(0,0,0,0.04)]",
  },

  // ------------------------------------
  // BORDER RADIUS
  // ------------------------------------
  radius: {
    sm: "rounded-[6px]",
    md: "rounded-[9.87px]",
    lg: "rounded-[12px]",
  },

  // ------------------------------------
  // SPACING TOKENS
  // ------------------------------------
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },

  // ------------------------------------
  // COMPONENT DESIGN TOKENS (GENERIC)
  // ------------------------------------
  components: {
    // Card base style (used across Nursing, Research, Dashboard, etc.)
    card: {
      base: `
        bg-white 
        border border-[#E5E7EB]
        rounded-[9.87px]
        flex flex-col
      `,
      padding: "p-[33px]",
      gap: "gap-[20px]",
    },

    // Icon container (general purpose)
    iconContainer: `
      w-[55.26px]
      h-[55.26px]
      flex items-center justify-center
      bg-[#008C8C]
      rounded-[9.87px]
      shrink-0
    `,

    iconSmall: `
      w-[40px]
      h-[40px]
      flex items-center justify-center
      shrink-0
    `,

    iconImage: `
      w-[28px]
      h-[28px]
      object-contain
    `,
  },
};
