// src/sections/home/AsramFooter.jsx
import React from "react";
import phoneIcon from "../../assets/asram/phone.svg";
import addressIcon from "../../assets/asram/address.svg";
import mailIcon from "../../assets/asram/mail.svg";
import facebookIcon from "../../assets/asram/facebook.svg";
import twitterIcon from "../../assets/asram/twitter.svg";
import instaIcon from "../../assets/asram/insta.svg";
import linkedincon from "../../assets/asram/linkedin.svg";
import youtubeIcon from "../../assets/asram/youtube.svg";
import { T } from "../../theme";

const AsramFooter = () => {
  return (
    <footer className="w-full bg-[#F7F8FA]">

      {/* TOP CONTACT BAR */}
      <div className="w-full bg-[#223F7F] border-t" style={{ borderTop: "0.76px solid rgba(25,25,25,0.10)" }}>
        <div
          className="
            w-full max-w-[1440px] mx-auto
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex
            items-center gap-y-[18px] gap-x-[38px]
            px-4 sm:px-6 md:px-10 lg:px-[120px]
            py-[12.866px]
          "
        >
          {[ 
            { icon: phoneIcon, text: "+91 8812 345678" },
            { icon: phoneIcon, text: "+91 8812 345678" },
            { icon: mailIcon, text: "info@asram.edu.in" },
            { icon: mailIcon, text: "info@asram.edu.in" },
            { icon: addressIcon, text: "Eluru, Andhra Pradesh, India – 534005" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-[10px] whitespace-nowrap">
              <div
                className="flex items-center justify-center"
                style={{
                  width: "30.27px",
                  height: "30.27px",
                  borderRadius: "6.05px",
                  background: "white",
                }}
              >
                <img loading="lazy" decoding="async" src={item.icon} style={{ width: "40.13px", height: "40.13px" }} />
              </div>
              <span className={`${T.font.family} text-white text-[14px] font-medium`}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER GRID */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[120px] pt-[40px] pb-[60px]">
        <div className="grid gap-[24.2px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          {/* COLUMN 1 */}
          <div className="flex flex-col">
            <h3 className={`${T.font.family} text-[18px] font-bold text-[#223F7F] mb-[12px]`}>
              About ASRAM
            </h3>

            <p className={`${T.font.family} text-[12px] leading-[19.67px] text-[#595959] w-[244.41px] mb-[20px]`}>
              A Legacy of Healing and Education. Empowering healthcare
              professionals and serving communities with compassion and
              excellence since our foundation.
            </p>

            <div className="flex items-center gap-[10px]">
              <img loading="lazy" decoding="async" src={facebookIcon} className="w-[30.3px] h-[30.3px]" />
              <img loading="lazy" decoding="async" src={twitterIcon} className="w-[30.3px] h-[30.3px]" />
              <img loading="lazy" decoding="async" src={instaIcon} className="w-[30.3px] h-[30.3px]" />
              <img loading="lazy" decoding="async" src={linkedincon} className="w-[30.3px] h-[30.3px]" />
              <img loading="lazy" decoding="async" src={youtubeIcon} className="w-[30.3px] h-[30.3px]" />
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col">
            <h3 className={`${T.font.family} text-[18px] font-bold text-[#223F7F] mb-[12px]`}>
              Quick Links
            </h3>

            {[
              "About ASRAM",
              "Admissions",
              "Healthcare Services",
              "Academic Programs",
              "Research",
              "Faculty",
              "Campus Life",
              "News & Events",
            ].map((text) => (
              <span
                key={text}
                className={`${T.font.family} font-medium text-[12px] leading-[22px] text-[#191919]`}
              >
                {text}
              </span>
            ))}
          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col">
            <h3 className={`${T.font.family} text-[18px] font-bold text-[#223F7F] mb-[12px]`}>
              Patient Services
            </h3>

            {[
              "Book Appointment",
              "Patient Portal",
              "Emergency Services",
              "Visitor Information",
              "Health Packages",
              "International Patients",
              "Insurance & Billing",
              "Medical Records",
            ].map((text) => (
              <span
                key={text}
                className={`${T.font.family} font-medium text-[12px] leading-[22px] text-[#191919]`}
              >
                {text}
              </span>
            ))}
          </div>

          {/* COLUMN 4 */}
          <div className="flex flex-col">
            <h3 className={`${T.font.family} text-[18px] font-bold text-[#223F7F] mb-[12px]`}>
              Academic Programs
            </h3>

            {[
              "Medical College",
              "Nursing College",
              "Paramedical College",
              "Online Courses",
              "Student Portal",
              "Library",
              "Scholarships",
              "Placement Cell",
            ].map((text) => (
              <span
                key={text}
                className={`${T.font.family} font-medium text-[12px] leading-[22px] text-[#191919]`}
              >
                {text}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* COPYRIGHT ROW */}
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-[120px] pb-[20px]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-[10px] text-[12px] text-[#191919] opacity-[0.8]">

          <span className={`${T.font.family}`}>
            © {new Date().getFullYear()} Alluri Sitarama Raju Academy of Medical Sciences.
            All rights reserved.
          </span>

          <div className={`${T.font.family} flex gap-[20px]`}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Sitemap</span>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default AsramFooter;
