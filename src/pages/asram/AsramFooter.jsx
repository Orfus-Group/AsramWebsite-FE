import React from "react";
import { Link } from "react-router-dom";
import { T } from "@/theme";

import { useState } from "react";
import { FiChevronDown, FiPhone, FiMail, FiMapPin } from "react-icons/fi";


const PhoneIcon = ({ className = "" }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={className}
  >
    <path
      d="M8.72229 10.4485C8.85252 10.5084 8.99924 10.522 9.13828 10.4873C9.27732 10.4526 9.40038 10.3715 9.48719 10.2575L9.71105 9.96426C9.82852 9.80762 9.98085 9.68049 10.156 9.59293C10.3311 9.50537 10.5242 9.45979 10.72 9.45979H12.6117C12.9462 9.45979 13.267 9.59266 13.5035 9.82918C13.74 10.0657 13.8729 10.3865 13.8729 10.721V12.6127C13.8729 12.9472 13.74 13.268 13.5035 13.5045C13.267 13.741 12.9462 13.8739 12.6117 13.8739C9.60139 13.8739 6.71435 12.678 4.58571 10.5494C2.45708 8.42076 1.26123 5.53371 1.26123 2.52337C1.26123 2.18889 1.3941 1.86811 1.63062 1.63159C1.86713 1.39508 2.18791 1.26221 2.5224 1.26221H4.41415C4.74863 1.26221 5.06941 1.39508 5.30593 1.63159C5.54244 1.86811 5.67531 2.18889 5.67531 2.52337V4.41512C5.67531 4.61091 5.62973 4.80401 5.54217 4.97913C5.45461 5.15425 5.32748 5.30658 5.17085 5.42406L4.87573 5.64539C4.75997 5.73379 4.67837 5.85953 4.64481 6.00126C4.61124 6.14299 4.62778 6.29198 4.6916 6.4229C5.55341 8.17332 6.9708 9.58893 8.72229 10.4485Z"
      stroke="#223F7F"
      strokeWidth="1.26"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const MailIcon = ({ className = "" }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
    <path
      d="M13.8729 4.41321L8.20332 8.02456C8.01093 8.13631 7.79239 8.19517 7.5699 8.19517C7.34741 8.19517 7.12887 8.13631 6.93648 8.02456L1.26123 4.41321"
      stroke="#223F7F"
      strokeWidth="1.26"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.6117 2.52136H2.5224C1.82587 2.52136 1.26123 3.08601 1.26123 3.78253V11.3495C1.26123 12.0461 1.82587 12.6107 2.5224 12.6107H12.6117C13.3083 12.6107 13.8729 12.0461 13.8729 11.3495V3.78253C13.8729 3.08601 13.3083 2.52136 12.6117 2.52136Z"
      stroke="#223F7F"
      strokeWidth="1.26"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AddressIcon = ({ className = "" }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
    <path
      d="M12.6115 6.30687C12.6115 9.45538 9.11875 12.7344 7.94586 13.7471C7.8366 13.8293 7.70359 13.8737 7.56688 13.8737C7.43017 13.8737 7.29717 13.8293 7.1879 13.7471C6.01502 12.7344 2.52222 9.45538 2.52222 6.30687C2.52222 4.96894 3.05371 3.68581 3.99977 2.73976C4.94582 1.7937 6.22895 1.26221 7.56688 1.26221C8.90481 1.26221 10.1879 1.7937 11.134 2.73976C12.0801 3.68581 12.6115 4.96894 12.6115 6.30687Z"
      stroke="#223F7F"
      strokeWidth="1.26"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.56704 8.19671C8.61183 8.19671 9.45879 7.34974 9.45879 6.30496C9.45879 5.26017 8.61183 4.41321 7.56704 4.41321C6.52226 4.41321 5.67529 5.26017 5.67529 6.30496C5.67529 7.34974 6.52226 8.19671 7.56704 8.19671Z"
      stroke="#223F7F"
      strokeWidth="1.26"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


const FacebookIcon = () => (
  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="transition-all duration-300 group-hover:fill-white" d="M0 15.134C0 6.77572 6.77572 0 15.134 0C23.4923 0 30.268 6.77572 30.268 15.134C30.268 23.4923 23.4923 30.268 15.134 30.268C6.77572 30.268 0 23.4923 0 15.134Z" fill="#223F7F" />
    <path className="transition-all duration-300 group-hover:stroke-[#1877F2]" d="M18.5392 9.45984H16.8366C16.084 9.45984 15.3622 9.7588 14.8301 10.291C14.2979 10.8231 13.999 11.5449 13.999 12.2975V14H12.2964V16.2701H13.999V20.8103H16.2691V16.2701H17.9716L18.5392 14H16.2691V12.2975C16.2691 12.1469 16.3289 12.0026 16.4353 11.8962C16.5417 11.7897 16.6861 11.7299 16.8366 11.7299H18.5392V9.45984Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="transition-all duration-300 group-hover:fill-white" d="M0 15.134C0 6.77572 6.77572 0 15.134 0C23.4923 0 30.268 6.77572 30.268 15.134C30.268 23.4923 23.4923 30.268 15.134 30.268C6.77572 30.268 0 23.4923 0 15.134Z" fill="#223F7F" />
    <path className="transition-all duration-300 group-hover:stroke-[#1DA1F2]" d="M20.8092 10.5933C20.8092 10.5933 20.412 11.7851 19.6742 12.5229C20.5822 18.1981 14.3395 22.3411 9.45874 19.1062C10.7073 19.1629 11.9559 18.7657 12.8639 17.9711C10.0263 17.1199 8.60745 13.7715 10.0263 11.1608C11.2748 12.6364 13.2044 13.4877 15.134 13.4309C14.6232 11.0473 17.4041 9.68527 19.1067 11.2743C19.7309 11.2743 20.8092 10.5933 20.8092 10.5933Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="transition-all duration-300 group-hover:fill-white" d="M0 15.134C0 6.77572 6.77572 0 15.134 0C23.4923 0 30.268 6.77572 30.268 15.134C30.268 23.4923 23.4923 30.268 15.134 30.268C6.77572 30.268 0 23.4923 0 15.134Z" fill="#223F7F" />
    <g clipPath="url(#clip0_1_1717)">
      <path className="transition-all duration-300 group-hover:stroke-[#E4405F]" d="M17.9716 9.45984H12.2964C10.7292 9.45984 9.45874 10.7303 9.45874 12.2975V17.9727C9.45874 19.5399 10.7292 20.8103 12.2964 20.8103H17.9716C19.5388 20.8103 20.8092 19.5399 20.8092 17.9727V12.2975C20.8092 10.7303 19.5388 9.45984 17.9716 9.45984Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path className="transition-all duration-300 group-hover:stroke-[#E4405F]" d="M17.4041 14.7784C17.4741 15.2507 17.3934 15.7331 17.1735 16.157C16.9536 16.5808 16.6057 16.9245 16.1791 17.1391C15.7526 17.3538 15.2693 17.4285 14.7979 17.3527C14.3265 17.2768 13.891 17.0542 13.5533 16.7166C13.2157 16.379 12.9931 15.9435 12.9173 15.4721C12.8414 15.0006 12.9161 14.5173 13.1308 14.0908C13.3455 13.6643 13.6892 13.3163 14.113 13.0964C14.5368 12.8765 15.0192 12.7958 15.4915 12.8659C15.9733 12.9373 16.4193 13.1618 16.7637 13.5062C17.1081 13.8506 17.3326 14.2966 17.4041 14.7784Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path className="transition-all duration-300 group-hover:stroke-[#E4405F]" d="M18.2554 12.0137H18.261" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_1_1717">
        <rect width="13.6206" height="13.6206" fill="white" transform="translate(8.32373 8.32373)" />
      </clipPath>
    </defs>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="transition-all duration-300 group-hover:fill-white" d="M0 15.134C0 6.77572 6.77572 0 15.134 0C23.4923 0 30.268 6.77572 30.268 15.134C30.268 23.4923 23.4923 30.268 15.134 30.268C6.77572 30.268 0 23.4923 0 15.134Z" fill="#223F7F" />
    <g clipPath="url(#clip0_1_1722)">
      <path className="transition-all duration-300 group-hover:stroke-[#0077B5]" d="M17.4042 12.865C18.3073 12.865 19.1734 13.2237 19.812 13.8623C20.4506 14.5009 20.8093 15.367 20.8093 16.2701V20.2428H18.5392V16.2701C18.5392 15.9691 18.4196 15.6804 18.2068 15.4675C17.9939 15.2547 17.7052 15.1351 17.4042 15.1351C17.1031 15.1351 16.8144 15.2547 16.6016 15.4675C16.3887 15.6804 16.2691 15.9691 16.2691 16.2701V20.2428H13.999V16.2701C13.999 15.367 14.3578 14.5009 14.9964 13.8623C15.635 13.2237 16.5011 12.865 17.4042 12.865Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path className="transition-all duration-300 group-hover:stroke-[#0077B5]" d="M11.7288 13.4325H9.45874V20.2428H11.7288V13.4325Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
      <path className="transition-all duration-300 group-hover:stroke-[#0077B5]" d="M10.5938 11.7299C11.2207 11.7299 11.7288 11.2218 11.7288 10.5949C11.7288 9.96802 11.2207 9.45984 10.5938 9.45984C9.96692 9.45984 9.45874 9.96802 9.45874 10.5949C9.45874 11.2218 9.96692 11.7299 10.5938 11.7299Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_1_1722">
        <rect width="13.6206" height="13.6206" fill="white" transform="translate(8.32373 8.32373)" />
      </clipPath>
    </defs>
  </svg>
);

const YoutubeIcon = () => (
  <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="transition-all duration-300 group-hover:fill-white" d="M0 15.134C0 6.77572 6.77572 0 15.134 0C23.4923 0 30.268 6.77572 30.268 15.134C30.268 23.4923 23.4923 30.268 15.134 30.268C6.77572 30.268 0 23.4923 0 15.134Z" fill="#223F7F" />
    <path className="transition-all duration-300 group-hover:stroke-[#FF0000]" d="M9.74241 17.9719C9.34595 16.1009 9.34595 14.1676 9.74241 12.2966C9.79451 12.1066 9.89516 11.9335 10.0345 11.7942C10.1738 11.6548 10.3469 11.5542 10.5369 11.5021C13.5808 10.9978 16.687 10.9978 19.7309 11.5021C19.9209 11.5542 20.094 11.6548 20.2333 11.7942C20.3726 11.9335 20.4733 12.1066 20.5254 12.2966C20.9218 14.1676 20.9218 16.1009 20.5254 17.9719C20.4733 18.1619 20.3726 18.3351 20.2333 18.4744C20.094 18.6137 19.9209 18.7143 19.7309 18.7664C16.687 19.2708 13.5808 19.2708 10.5369 18.7664C10.3469 18.7143 10.1738 18.6137 10.0345 18.4744C9.89516 18.3351 9.79451 18.1619 9.74241 17.9719Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
    <path className="transition-all duration-300 group-hover:stroke-[#FF0000]" d="M13.999 16.8376L16.8366 15.1351L13.999 13.4325V16.8376Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FooterAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden border-b border-[rgba(25,25,25,0.05)] last:border-none">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-[18px] focus:outline-none"
      >
        <span className={`${T.font.family} text-[16px] font-semibold text-[#191919]`}>
          {title}
        </span>
        <div
          className={`text-[#223F7F] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        >
          <FiChevronDown size={20} />
        </div>
      </button>

      {isOpen && (
        <div
          className="overflow-hidden"
        >
          <div className="flex flex-col gap-[12px] pb-[18px]">
            {children}
          </div>
        </div>
      )}

    </div>
  );
};

const MobileContactCard = ({ icon: Icon, title, value, href }) => {
  const isLink = !!href;
  const Component = isLink ? 'a' : 'div';

  return (
    <Component
      href={href}
      target={isLink && href.startsWith("http") ? "_blank" : undefined}
      rel={isLink && href.startsWith("http") ? "noopener noreferrer" : undefined}

      className={`
        flex items-center gap-[12px] 
        bg-white/80 backdrop-blur-md 
        p-[14px] rounded-[16px] 
        border border-white/40 
        shadow-[0_8px_20px_rgba(0,0,0,0.04)]
        w-full md:hidden
        ${isLink ? "cursor-pointer" : ""}
      `}
    >
      <div className="w-[40px] h-[40px] bg-[#223F7F]/10 rounded-[12px] flex items-center justify-center text-[#223F7F]">
        <Icon size={20} />
      </div>
      <div className="flex flex-col">
        <span className={`${T.font.family} text-[12px] mb-[3px] text-[#6B6B6B] leading-tight`}>{title}</span>
        <span className={`${T.font.family} text-[14px] font-semibold text-[#191919] leading-tight`}>{value}</span>
      </div>
    </Component>
  );
};

const AsramFooter = () => {
  return (
    <footer className="w-full bg-[#c5cfdf]">

      {/* DESKTOP TOP CONTACT BAR */}
      <div className="hidden md:block w-full bg-[#223F7F]" style={{ borderTop: "0.8px solid rgba(25,25,25,0.10)" }}>
        <div
          className="
            w-full
            max-w-[1440px]
            h-[54.3px]
            mx-auto
            flex
            items-center justify-between
            px-5 sm:px-6 md:px-10 lg:px-[120px]
            py-[12px]
          "
        >
          {[
            { icon: <PhoneIcon />, text: "+91 8812 345678", href: "tel:+918812345678" },
            { icon: <PhoneIcon />, text: "+91 8812 345678", href: "tel:+918812345678" },
            { icon: <MailIcon />, text: "info@asram.edu.in", href: "mailto:info@asram.edu.in" },
            { icon: <MailIcon />, text: "info@asram.edu.in", href: "mailto:info@asram.edu.in" },
            { icon: <AddressIcon />, text: "Eluru, Andhra Pradesh, India – 534005", href: "https://www.google.com/maps/dir//Alluri+Sitarama+Raju+Academy+of+Medical+Sciences,+Malkapuram,+Eluru,+Andhra+Pradesh+534005" }
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-[6px] whitespace-nowrap group hover:opacity-80 transition-all duration-300"
            >
              <div
                className="flex items-center justify-center transition-transform duration-300"
                style={{
                  width: "30.27px",
                  height: "30.27px",
                  borderRadius: "6.05px",
                  background: "white",
                }}
              >
                <span className="w-[16px] h-[16px] flex items-center justify-center">
                  {item.icon}
                </span>
              </div>
              <span className={`${T.font.family} text-[#FFF] text-[12px] font-regular group-hover:underline underline-offset-4 decoration-white/30`}>
                {item.text}
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* MOBILE CONTENT (Hidden on MD+) */}
      <div className="md:hidden w-full px-5 pt-[30px] pb-[20px]">
        <div className="flex flex-col items-center text-center mb-[40px]">
          <h2 className={`${T.font.family} text-[22px] font-bold text-[#223F7F] mb-[12px]`}>ASRAM</h2>
          <p className={`${T.font.family} text-[14px] text-[#6B6B6B] leading-[22px] max-w-[280px]`}>
            A Legacy of Healing and Education. Empowering healthcare professionals with compassion.
          </p>
          <div className="flex items-center gap-[18px] mt-[24px]">
            <a href="https://www.facebook.com/asramshospital" target="_blank" rel="noreferrer" className="group"><FacebookIcon /></a>
            <a href="#" target="_blank" rel="noreferrer" className="group"><TwitterIcon /></a>
            <a href="https://www.instagram.com/asram_hospitals/" target="_blank" rel="noreferrer" className="group"><InstagramIcon /></a>
            <a href="https://www.linkedin.com/company/alluri-sitarama-raju-academy-of-medical-science/" target="_blank" rel="noreferrer" className="group"><LinkedinIcon /></a>
            <a href="https://www.youtube.com/@Asramhospital" target="_blank" rel="noreferrer" className="group"><YoutubeIcon /></a>
          </div>
        </div>

        {/* Contact Quick-Actions */}
        <div className="flex flex-col gap-[12px] mb-[40px]">
          <MobileContactCard icon={FiPhone} title="Emergency Support" value="+91 8812 345678" href="tel:+918812345678" />
          <MobileContactCard icon={FiMail} title="Email Inquiry" value="info@asram.edu.in" href="mailto:info@asram.edu.in" />
          <MobileContactCard icon={FiMapPin} title="Visit Campus" value="Eluru, AP, India" href="https://www.google.com/maps/dir//Alluri+Sitarama+Raju+Academy+of+Medical+Sciences,+Malkapuram,+Eluru,+Andhra+Pradesh+534005" />
        </div>

        {/* Smart Accordions */}
        <div className="flex flex-col mb-[30px]">
          <FooterAccordion title="Quick Links">
            {[
              { text: "About ASRAM", path: "/about-asram" },
              { text: "Admissions", path: "/admissions" },
              { text: "Healthcare Services", path: "/healthcare" },
              { text: "Academic Programs", path: "/academics" },
              { text: "Research", path: "/research" },
              { text: "Faculty", path: "/faculty" },
              { text: "Campus Life", path: "/campus-life" }
            ].map(item => (
              <Link
                key={item.text}
                to={item.path}
                className={`${T.font.family} text-[15px] text-[#191919BF] hover:text-[#223F7F] hover:translate-x-[6px] transition-all duration-300 inline-block`}
              >
                {item.text}
              </Link>
            ))}
          </FooterAccordion>
          <FooterAccordion title="Patient Services">
            {["Book Appointment", "Patient Portal", "Emergency Services", "Visitor Information", "Health Packages"].map(text => (
              <span
                key={text}
                className={`${T.font.family} text-[15px] text-[#191919BF] hover:text-[#223F7F] hover:translate-x-[6px] transition-all duration-300 inline-block cursor-pointer`}
              >
                {text}
              </span>
            ))}
          </FooterAccordion>
          <FooterAccordion title="Academic Life">
            {[
              { text: "Medical College", path: "/academics/medical-college" },
              { text: "Nursing College", path: "/nursing" },
              { text: "Paramedical College", path: "/academics/paramedical-college" },
              { text: "Student Portal", path: null },
              { text: "Library", path: null },
              { text: "Placement Cell", path: null }
            ].map(item => (
              item.path ? (
                <Link
                  key={item.text}
                  to={item.path}
                  className={`${T.font.family} text-[15px] text-[#191919BF] hover:text-[#223F7F] hover:translate-x-[6px] transition-all duration-300 inline-block`}
                >
                  {item.text}
                </Link>
              ) : (
                <span
                  key={item.text}
                  className={`${T.font.family} text-[15px] text-[#191919BF] hover:text-[#223F7F] hover:translate-x-[6px] transition-all duration-300 inline-block cursor-pointer`}
                >
                  {item.text}
                </span>
              )
            ))}
          </FooterAccordion>
        </div>
      </div>

      {/* DESKTOP FOOTER GRID (Hidden on Mobile) */}
      <div className="hidden md:block w-full max-w-[1440px] mx-auto px-5 sm:px-6 md:px-10 lg:px-[120px] py-[40px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[24.2px] gap-y-[24.7px]">

          {/* COLUMN 1 */}
          <div className="flex flex-col">
            <h3 className={`${T.font.family} text-[16px] font-semibold text-[#191919] mb-[12px]`}>
              About ASRAM
            </h3>

            <p className={`${T.font.family} ${T.font.weight.regular} text-[14px] leading-[20px] text-[#191919BF] w-[244.41px] mb-[20px]`}>
              A Legacy of Healing and Education. Empowering healthcare
              professionals and serving communities with compassion and
              excellence since our foundation.
            </p>

            <div className="flex items-center gap-[15px]">
              <a href="https://www.facebook.com/asramshospital" target="_blank" rel="noreferrer" className="group">
                <FacebookIcon />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="group">
                <TwitterIcon />
              </a>
              <a href="https://www.instagram.com/asram_hospitals/" target="_blank" rel="noreferrer" className="group">
                <InstagramIcon />
              </a>
              <a href="https://www.linkedin.com/company/alluri-sitarama-raju-academy-of-medical-science/" target="_blank" rel="noreferrer" className="group">
                <LinkedinIcon />
              </a>
              <a href="https://www.youtube.com/@Asramhospital" target="_blank" rel="noreferrer" className="group">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="flex flex-col">
            <h3 className={`${T.font.family} text-[16px] font-semibold text-[#191919] mb-[12px]`}>
              Quick Links
            </h3>

            {[
              { text: "About ASRAM", path: "/about-asram" },
              { text: "Admissions", path: "/admissions" },
              { text: "Healthcare Services", path: "/healthcare" },
              { text: "Academic Programs", path: "/academics" },
              { text: "Research", path: "/research" },
              { text: "Faculty", path: "/faculty" },
              { text: "Campus Life", path: "/campus-life" },
              { text: "News & Events", path: "/news" },
            ].map((item) => (
              <Link
                key={item.text}
                to={item.path}
                className={`${T.font.family} font-regular text-[14px] leading-[22px] text-[#191919BF] hover:text-[#223F7F] hover:translate-x-[6px] transition-all duration-300 inline-block`}
              >
                {item.text}
              </Link>
            ))}
          </div>

          {/* COLUMN 3 */}
          <div className="flex flex-col">
            <h3 className={`${T.font.family} text-[16px] font-semibold text-[#191919] mb-[12px]`}>
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
                className={`${T.font.family} font-regular text-[14px] leading-[22px] text-[#191919BF] hover:text-[#223F7F] hover:translate-x-[6px] transition-all duration-300 inline-block cursor-pointer`}
              >
                {text}
              </span>
            ))}
          </div>

          {/* COLUMN 4 */}
          <div className="flex flex-col">
            <h3 className={`${T.font.family} text-[16px] font-semibold text-[#191919] mb-[12px]`}>
              Academic Programs
            </h3>

            {[
              { text: "Medical College", path: "/academics/medical-college" },
              { text: "Nursing College", path: "/nursing" },
              { text: "Paramedical College", path: "/academics/paramedical-college" },
              { text: "Online Courses", path: null },
              { text: "Student Portal", path: null },
              { text: "Library", path: null },
              { text: "Scholarships", path: null },
              { text: "Placement Cell", path: null },
            ].map((item) => (
              item.path ? (
                <Link
                  key={item.text}
                  to={item.path}
                  className={`${T.font.family} font-regular text-[14px] leading-[22px] text-[#191919BF] hover:text-[#223F7F] hover:translate-x-[6px] transition-all duration-300 inline-block`}
                >
                  {item.text}
                </Link>
              ) : (
                <span
                  key={item.text}
                  className={`${T.font.family} font-regular text-[14px] leading-[22px] text-[#191919BF] hover:text-[#223F7F] hover:translate-x-[6px] transition-all duration-300 inline-block cursor-pointer`}
                >
                  {item.text}
                </span>
              )
            ))}
          </div>

        </div>
      </div>

      {/* COPYRIGHT ROW */}
      <div className="w-full bg-[#c5cfdf] md:bg-transparent" style={{ borderTop: "0.8px solid rgba(25,25,25,0.10)" }}>
        <div className="w-full max-w-[1440px] md:h-[68.9px] mx-auto px-5 sm:px-6 md:px-10 lg:px-[120px] pt-[20px] md:pt-[10px] pb-[40px] flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-[16px] md:gap-[10px] font-regular text-[12.11px] text-[#191919BF]">

            <span className={`${T.font.family} text-[#191919BF] font-regular`}>
              © {new Date().getFullYear()} Alluri Sitarama Raju Academy of Medical Sciences.
              All rights reserved.
            </span>

            <div className={`${T.font.family} text-[#191919BF] font-regular flex flex-wrap justify-center gap-[12px] md:gap-[20px] mt-[10px] md:mt-0`}>
              <span className="cursor-pointer hover:text-[#223F7F]">Privacy Policy</span>
              <span className="cursor-pointer hover:text-[#223F7F]">Terms of Service</span>
              <span className="cursor-pointer hover:text-[#223F7F]">Sitemap</span>
            </div>

          </div>
        </div>
      </div>

    </footer>
  );
};

export default AsramFooter;
