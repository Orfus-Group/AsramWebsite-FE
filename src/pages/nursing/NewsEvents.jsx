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
import PageSection from "../../features/common/layout/PageContainer";

const NewsEvents = () => {
  return (
    <PageSection bg="bg-white">
      {/* ---------------------------------- WRAPPER (1200px content alignment) ---------------------------------- */}
      <div className="w-full max-w-[1200px] mx-auto">

        {/* Heading */}
        <h2
          className={`
            ${T.font.family}
            ${T.font.weight.bold}
            text-[32px] md:text-[42px]
            leading-[40px] md:leading-[48px]
            tracking-[0px]
          `}
          style={{ color: T.color.text.secondary }}
        >
          News
        </h2>

        <p
          className="
            font-montserrat font-medium
            text-[16px] md:text-[20px]
            leading-[26px]
            text-[#191919]
            mt-[16px] mb-[32px]
            max-w-[800px]
          "
        >
          Latest highlights from our campus, hospital, and academic community.
        </p>

        {/* --------------------------- MAIN DESKTOP GRID (Aligned perfectly to 1200px width) --------------------------- */}
        <div className="hidden lg:grid w-full gap-[15px]"
          style={{
            gridTemplateColumns:
              "minmax(250px, 1fr) minmax(450px, 1.3fr) minmax(250px, 1fr)",
            height: "585px",
          }}
        >
          {/* LEFT column */}
          <div className="flex flex-col gap-[15px]">
            <div className="relative rounded-[10px] overflow-hidden group h-[285px]">
              <img loading="lazy" decoding="async"
                src={img1}
                className="w-full h-full object-cover group-hover:scale-105 duration-300"
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <p className="absolute bottom-4 left-4 text-white font-semibold text-lg leading-6">
                Advanced Oncology & <br /> Precision Treatment
              </p>
            </div>

            <div className="relative rounded-[10px] overflow-hidden group h-[285px]">
              <img loading="lazy" decoding="async"
                src={img2}
                className="w-full h-full object-cover group-hover:scale-105 duration-300"
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <p className="absolute bottom-4 left-4 text-white font-semibold text-lg leading-6">
                Comprehensive <br /> Healthcare for Every
              </p>
            </div>
          </div>

          {/* CENTER main card */}
          <div className="rounded-[10px] overflow-hidden group bg-black w-full h-[585px]">
            <div className="relative w-full h-full">
              <img loading="lazy" decoding="async"
                src={img3}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 duration-300"
              />

              <div className="absolute bottom-0 left-0 right-0 h-[180px] bg-gradient-to-t from-black/85 to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-semibold text-2xl leading-snug mb-3">
                  Leading Excellence in Medical Education <br /> & Clinical
                  Training
                </h3>

                <div className="flex items-center gap-6 text-white/90 text-sm">
                  <span className="flex items-center gap-1">
                    <img loading="lazy" decoding="async" src={usericon} className="w-[16px] h-[16px]" />
                    Ganesh Garuda
                  </span>

                  <span className="flex items-center gap-1">
                    <img loading="lazy" decoding="async" src={calicon} className="w-[16px] h-[16px]" />
                    14 Nov 2025
                  </span>

                  <span className="flex items-center gap-1">
                    <img loading="lazy" decoding="async"
                      src={notificationicon}
                      className="w-[16px] h-[16px]"
                    />
                    23
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT column */}
          <div className="flex flex-col gap-[15px]">
            <div className="relative rounded-[10px] overflow-hidden group h-[285px]">
              <img loading="lazy" decoding="async"
                src={img4}
                className="w-full h-full object-cover group-hover:scale-105 duration-300"
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <p className="absolute bottom-4 left-4 text-white font-semibold text-lg leading-6">
                Shaping Skilled & <br /> Compassionate Nurses
              </p>
            </div>

            <div className="relative rounded-[10px] overflow-hidden group h-[285px]">
              <img loading="lazy" decoding="async"
                src={img5}
                className="w-full h-full object-cover group-hover:scale-105 duration-300"
                alt=""
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <p className="absolute bottom-4 left-4 text-white font-semibold text-lg leading-6">
                Training Professionals <br /> for Modern Healthcare
              </p>
            </div>
          </div>
        </div>

        {/* --------------------------- MOBILE/TABLET VERSION --------------------------- */}
        <div className="lg:hidden flex flex-col gap-4">
          <div className="relative rounded-[10px] overflow-hidden group h-[400px] sm:h-[500px]">
            <img loading="lazy" decoding="async"
              src={img3}
              className="w-full h-full object-cover group-hover:scale-105 duration-300"
              alt=""
            />

            <div className="absolute bottom-0 left-0 right-0 h-[180px] bg-gradient-to-t from-black/85 to-transparent"></div>

            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white font-semibold text-lg sm:text-xl md:text-2xl leading-snug mb-2">
                Leading Excellence in Medical Education & Clinical Training
              </h3>

              <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-white/90 text-xs sm:text-sm">
                <span className="flex items-center gap-1">
                  <img loading="lazy" decoding="async" src={usericon} className="w-[14px] h-[14px]" />
                  Ganesh Garuda
                </span>

                <span className="flex items-center gap-1">
                  <img loading="lazy" decoding="async" src={calicon} className="w-[14px] h-[14px]" />
                  14 Nov 2025
                </span>

                <span className="flex items-center gap-1">
                  <img loading="lazy" decoding="async" src={notificationicon} className="w-[14px] h-[14px]" />
                  23
                </span>
              </div>
            </div>
          </div>

          {/* Small cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[img1, img2, img4, img5].map((src, index) => (
              <div
                key={index}
                className="relative rounded-[10px] overflow-hidden group h-[180px] sm:h-[220px]"
              >
                <img loading="lazy" decoding="async"
                  src={src}
                  className="w-full h-full object-cover group-hover:scale-105 duration-300"
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </PageSection>
  );
};

export default NewsEvents;
