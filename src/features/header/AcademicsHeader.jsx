import React from "react";
import { T } from "../../theme";
import LogoFull from "../../assets/nursing/asramlogo.svg";
import SearchIcon from "../../assets/nursing/Search.svg";
import ShortcutLinks from "./ShortcutLinks";
import NursingPage from "../../pages/nursing/NursingPage";

const AcademicsHeader = () => {
  return (
    <>
      <div
        className="px-[100px]"
        style={{ backgroundColor: T.color.text.secondary }} // #1E3E7B
      >
        <div className="w-[1440px] max-w-full mx-auto flex justify-end items-center h-[46px]">
          <ShortcutLinks />
        </div>
      </div>

      <nav className="w-full bg-white ">
        <div
          className="
          w-full 
          max-w-[1440px] 
          mx-auto 
          flex items-center justify-between
          h-[66px]
        "
          style={{
            paddingLeft: "120px",
            paddingRight: "120px",
          }}
        >
          {/* LEFT: Logo + Text */}
          <div className="flex items-center gap-[10px]">
            <img
              src={LogoFull}
              alt="Asram Logo"
              className="h-[46px] w-[191px]"
            />
          </div>

          {/* RIGHT: Nav Links + Search */}
          <div className="flex items-center gap-[40px]">
            {["Academics", "Research", "Global & Community", "News"].map(
              (item) => (
                <button
                  key={item}
                  className={`
                     flex items-center
        gap-[40px]                        
        ${T.font.family}                  
        ${T.font.weight.semibold}         
        ${T.font.size.base}               
        leading-[20px]                    
        tracking-[0px]                    
        text-[#4A5565]    
        hover:text-[${T.color.text.secondary}]
                transition
                whitespace-nowrap
              `}
                >
                  {item}
                </button>
              )
            )}

            {/* Search Icon */}
            <button>
              <img
                src={SearchIcon}
                alt="Search"
                className="h-[18px] w-[18px]"
              />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default AcademicsHeader;
