import React from "react";
import img1 from "../../assets/asram/newsart1.svg";
import img2 from "../../assets/asram/newsart2.svg";
import img3 from "../../assets/asram/newsart3.svg";
import img4 from "../../assets/asram/newsart4.svg";
import img5 from "../../assets/asram/newsart5.svg";
import usericon from "../../assets/asram/username.svg";
import calicon from "../../assets/asram/cal.svg";
import notificationicon from "../../assets/asram/notific.svg";
import { T } from "../../theme";

const AsramNewsEvents = () => {
  return (
<section
  className={`w-full ${T.bg.programCard} py-16`}
  id="news"
>
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Heading */}
        <h2
          className={`
            ${T.font.family}
            ${T.font.weight.bold}
            text-[42px] leading-[48px]
            tracking-[0px]
          `}
          style={{ color: T.color.text.secondary }}
        >
          News 
        </h2>

<p
  className="font-montserrat font-medium text-[22px] leading-[100%] tracking-[0px] text-[#191919]"
  style={{
    width: "797px",
    height: "27px",
    marginTop: "20px",      // Figma: News → Subtitle spacing
    marginBottom: "42px",   // Figma: Subtitle → Image grid spacing
  }}
>
  Latest highlights from our campus, hospital, and academic community.
</p>




        {/* Main Grid Card */}
       {/* Main Grid Card */}
<div
  className={`rounded-[10px] p-2 overflow-hidden ${T.bg.programCard}`}
>
  <div
    className="grid gap-2 h-[585px]"
    style={{
      gridTemplateColumns: "304.51px 580px 304.51px",
    }}
  >



            {/* LEFT column */}
            <div className="flex flex-col gap-2">
              <div className="relative rounded-lg overflow-hidden group" style={{ height: "282px" }}>
                <img src={img1} alt="" className="w-[304.51px] h-[282px] object-cover group-hover:scale-105 duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg leading-6">
                  Advanced Oncology & <br /> Precision Treatment
                </p>
              </div>

              <div className="relative rounded-lg overflow-hidden group" style={{ height: "282px" }}>
                <img src={img2} alt="" className="w-[304.51px] h-[282px] object-cover group-hover:scale-105 duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg leading-6">
                  Comprehensive <br /> Healthcare for Every
                </p>
              </div>
            </div>

{/* CENTER main card */}
<div
  className="rounded-lg overflow-hidden group bg-black mx-auto block"
  style={{ width: "550px", height: "576px" }}
>
  <div className="relative w-full h-full">
    <img
      src={img3}
      alt=""
      className="w-[550px] h-[576px] object-cover object-center mx-auto group-hover:scale-105 duration-300"
    />

    <div className="absolute bottom-0 left-0 right-0 h-[180px] 
                    bg-gradient-to-t from-black/85 to-transparent"></div>

    <div className="absolute bottom-6 left-6 right-6">
      <h3 className="text-white font-semibold text-2xl leading-snug mb-3">
        Leading Excellence in Medical Education & <br /> Clinical Training
      </h3>
      <div className="flex items-center gap-6 text-white/90 text-sm">
        <span className="flex items-center gap-1">
          <img src={usericon} className="w-[16px] h-[16px]" /> Ganesh Garuda
        </span>
        <span className="flex items-center gap-1">
          <img src={calicon} className="w-[16px] h-[16px]" /> 14 Nov 2025
        </span>
        <span className="flex items-center gap-1">
          <img src={notificationicon} className="w-[16px] h-[16px]" /> 23
        </span>
      </div>
    </div>
  </div>
</div>




            {/* RIGHT column */}
            <div className="flex flex-col gap-2">
              <div className="relative rounded-lg overflow-hidden group" style={{ height: "282px" }}>
                <img src={img4} alt="" className="w-[304.51px] h-[282px] object-cover group-hover:scale-105 duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg leading-6">
                  Shaping Skilled & <br /> Compassionate Nurses
                </p>
              </div>

              <div className="relative rounded-lg overflow-hidden group" style={{ height: "282px" }}>
                <img src={img5} alt="" className="w-[304.51px] h-[282px] object-cover group-hover:scale-105 duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <p className="absolute bottom-4 left-4 text-white font-semibold text-lg leading-6">
                  Training Professionals <br /> for Modern Healthcare
                </p>
              </div>
            </div>

          </div>
          

          {/* Button */}
         <div className="w-full flex justify-center mt-8 mb-4">
  <button
    className="
      w-[182px]
      h-[46px]
      bg-[#223F7F]
      text-white
      font-montserrat
      font-medium
      flex
      items-center
      justify-center
      gap-[10px]
      rounded-[9.4px]
      hover:bg-[#007a7a]
      duration-200
    "
  >
    View All News
  </button>
</div>

        </div>
      </div>
    </section>
  );
};

export default AsramNewsEvents;
