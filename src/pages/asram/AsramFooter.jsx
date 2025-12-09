import React from "react";
import phoneIcon from "../../assets/asram/phone.svg";
import addressIcon from "../../assets/asram/address.svg";
import mailIcon from "../../assets/asram/mail.svg";
import facebookIcon from "../../assets/asram/facebook.svg";
import twitterIcon from "../../assets/asram/twitter.svg";
import instaIcon from "../../assets/asram/insta.svg";
import linkedincon from "../../assets/asram/linkedin.svg";
import youtubeIcon from "../../assets/asram/youtube.svg";


const AsramFooter = () => {
  return (
    <footer className="w-full bg-[#F7F8FA] flex flex-col items-center">
      {/* TOP CONTACT BAR */}
      <div
        className="w-full bg-[#223F7F] flex justify-center"
        style={{
          height: "56px",
          borderTop: "0.8px solid rgba(25,25,25,0.1)",
          padding: "12.9px 253.9px 12.9px 120px",
        }}
      >
        <div className="w-[1440px] flex items-center justify-between px-[40px]">
          {/* Phone */}
          <div className="flex items-center gap-[10px]">
            <img
              src={phoneIcon}
              alt=""
              className="w-[18px] h-[18px]"
            />
            <span className="font-montserrat text-white text-[14px] font-medium">
              +91 8812 345678
            </span>
          </div>

          {/* Phone 2 */}
          <div className="flex items-center gap-[10px]">
            <img
              src={phoneIcon}
              alt=""
              className="w-[18px] h-[18px]"
            />
            <span className="font-montserrat text-white text-[14px] font-medium">
              +91 8812 345678
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-[10px]">
            <img
              src={mailIcon}
              alt=""
              className="w-[18px] h-[18px]"
            />
            <span className="font-montserrat text-white text-[14px] font-medium">
              info@asram.edu.in
            </span>
          </div>

          {/* Email 2 */}
          <div className="flex items-center gap-[10px]">
            <img
              src={mailIcon}
              alt=""
              className="w-[18px] h-[18px]"
            />
            <span className="font-montserrat text-white text-[14px] font-medium">
              info@asram.edu.in
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-[10px]">
            <img
              src={addressIcon}
              alt=""
              className="w-[18px] h-[18px]"
            />
            <span className="font-montserrat text-white text-[14px] font-medium">
              Eluru, Andhra Pradesh, India – 534005
            </span>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER GRID */}
      <div className="w-full flex justify-center" style={{ padding: "0 26px" }}>
        <div
          className="grid"
          style={{
            width: "1200px",
            height: "222px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            columnGap: "24.2px",
            rowGap: "24.2px",
            margin: "40px 120px 60px",
          }}
        >
          {/* COLUMN 1: ABOUT */}
          <div className="flex flex-col">
            <h3 className="font-montserrat text-[18px] font-bold text-[#223F7F] mb-[12px]">
              About ASRAM
            </h3>

            {/* <p className="font-montserrat text-[14px] leading-[20px] text-[#191919] opacity-[0.9] w-[275.8px] mb-[20px]">
              A Legacy of Healing and Education. Empowering healthcare
              professionals and serving communities with compassion and
              excellence since our foundation.
            </p> */}
            <p
  className="
    font-montserrat
    text-[12px]
    leading-[19.67px]
    text-[#595959]
    w-[244.41px]
    mb-[20px]
  "
>
  A Legacy of Healing and Education. Empowering healthcare
  professionals and serving communities with compassion and
  excellence since our foundation.
</p>


            {/* SOCIAL ICONS — replace with your SVGs */}
            <div className="flex items-center gap-[10px]">
              <img
                src={facebookIcon}
                className="w-[30.3px] h-[30.3px]"
              />
              <img
                src={twitterIcon}
                className="w-[30.3px] h-[30.3px]"
              />
              <img
                src={instaIcon}
                className="w-[30.3px] h-[30.3px]"
              />
              <img
                src={linkedincon}
                className="w-[30.3px] h-[30.3px]"
              />
              <img
                src={youtubeIcon}
                className="w-[30.3px] h-[30.3px]"
              />
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="flex flex-col">
            <h3 className="text-[18px] font-bold font-montserrat text-[#223F7F] mb-[12px]">
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
    className="
      font-montserrat
      font-medium
      text-[12px]
      leading-[22px]
      text-[#191919]
    "
  >
    {text}
  </span>
))}

          </div>

          {/* COLUMN 3: PATIENT SERVICES */}
          <div className="flex flex-col">
            <h3 className="font-montserrat text-[18px] font-bold text-[#223F7F] mb-[12px]">
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
                  className="
      font-montserrat
      font-medium
      text-[12px]
      leading-[22px]
      text-[#191919]
    "
              >
                {text}
              </span>
            ))}
          </div>

          {/* COLUMN 4: ACADEMIC PROGRAMS */}
          <div className="flex flex-col">
            <h3 className="font-montserrat text-[18px] font-bold text-[#223F7F] mb-[12px]">
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
  className="
      font-montserrat
      font-medium
      text-[12px]
      leading-[22px]
      text-[#191919]
    "              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* COPYRIGHT BAR */}
      <div className="w-full flex justify-center pb-[20px]">
        <div className="w-[1200px] flex justify-between text-[12px] text-[#191919] opacity-[0.8]">
          <span>
            © {new Date().getFullYear()} Alluri Sitarama Raju Academy of Medical
            Sciences. All rights reserved.
          </span>

          <div className="flex gap-[20px]">
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
