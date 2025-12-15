import React from "react";
import { T } from "@/theme";

const links = ["Academics", "Research", "Global & Community", "News"];

const NavLinks = () => {
  return (
    <nav
      className={`
        flex items-center
        gap-[40px]                        
        ${T.font.family}                  
        ${T.font.weight.semibold}         
        ${T.font.size.base}               
        leading-[20px]                    
        tracking-[0px]                    
        text-[#4A5565]                    
      `}
    >
      {links.map((item) => (
        <button
          key={item}
          className={`
            whitespace-nowrap              /* 🔥 FIX FOR MULTI-LINE ISSUE */
            hover:text-[#1E3E7B]
            transition duration-200
          `}
        >
          {item}
        </button>
      ))}
    </nav>
  );
};

export default NavLinks;
