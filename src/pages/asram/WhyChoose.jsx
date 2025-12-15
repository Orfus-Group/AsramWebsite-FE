// src/sections/home/WhyChooseAsram.jsx
import React from "react";

import academicsIcon from "@/assets/asram/academic.svg";
import facultyIcon from "@/assets/asram/expertfac.svg";
import infraIcon from "@/assets/asram/worldclass.svg";
import careerIcon from "@/assets/asram/careeropp.svg";
import globalIcon from "@/assets/asram/globalrec.svg";
import holisticIcon from "@/assets/asram/holisticdev.svg";

import { T } from "@/theme";
import InfoCard from "@/features/common/cards/InfoCard";
import Button from "@/components/ui/button";
import PageSection from "@/features/common/layout/PageContainer";


const AcademicIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M13.8152 8.05786V24.1763" stroke="#223F7F" strokeWidth="2.30263" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M3.45283 20.7227C3.14748 20.7227 2.85464 20.6014 2.63873 20.3855C2.42281 20.1696 2.30151 19.8768 2.30151 19.5714V4.60432C2.30151 4.29897 2.42281 4.00613 2.63873 3.79022C2.85464 3.5743 3.14748 3.453 3.45283 3.453H9.20941C10.4308 3.453 11.6022 3.9382 12.4658 4.80185C13.3295 5.66551 13.8147 6.83687 13.8147 8.05827C13.8147 6.83687 14.2999 5.66551 15.1635 4.80185C16.0272 3.9382 17.1985 3.453 18.4199 3.453H24.1765C24.4819 3.453 24.7747 3.5743 24.9906 3.79022C25.2065 4.00613 25.3278 4.29897 25.3278 4.60432V19.5714C25.3278 19.8768 25.2065 20.1696 24.9906 20.3855C24.7747 20.6014 24.4819 20.7227 24.1765 20.7227H17.2686C16.3526 20.7227 15.474 21.0866 14.8263 21.7344C14.1786 22.3821 13.8147 23.2606 13.8147 24.1767C13.8147 23.2606 13.4508 22.3821 12.803 21.7344C12.1553 21.0866 11.2768 20.7227 10.3607 20.7227H3.45283Z"
      fill="#223F7F"
      stroke="#223F7F"
      strokeWidth="2.30263"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FacultyIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.4202 24.1767V21.8741C18.4202 20.6527 17.935 19.4813 17.0713 18.6177C16.2077 17.754 15.0363 17.2688 13.8149 17.2688H6.90702C5.68563 17.2688 4.51426 17.754 3.65061 18.6177C2.78695 19.4813 2.30176 20.6527 2.30176 21.8741V24.1767" fill="#223F7F" />
    <path d="M18.4202 24.1767V21.8741C18.4202 20.6527 17.935 19.4813 17.0713 18.6177C16.2077 17.754 15.0363 17.2688 13.8149 17.2688H6.90702C5.68563 17.2688 4.51426 17.754 3.65061 18.6177C2.78695 19.4813 2.30176 20.6527 2.30176 21.8741V24.1767" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18.4209 3.59985C19.4084 3.85587 20.283 4.43256 20.9074 5.2394C21.5317 6.04624 21.8705 7.03756 21.8705 8.05775C21.8705 9.07794 21.5317 10.0693 20.9074 10.8761C20.283 11.6829 19.4084 12.2596 18.4209 12.5156" fill="#223F7F" />
    <path d="M18.4209 3.59985C19.4084 3.85587 20.283 4.43256 20.9074 5.2394C21.5317 6.04624 21.8705 7.03756 21.8705 8.05775C21.8705 9.07794 21.5317 10.0693 20.9074 10.8761C20.283 11.6829 19.4084 12.2596 18.4209 12.5156" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M25.3294 24.1774V21.8748C25.3287 20.8544 24.9891 19.8632 24.3639 19.0567C23.7387 18.2503 22.8635 17.6743 21.8755 17.4192" fill="#223F7F" />
    <path d="M25.3294 24.1774V21.8748C25.3287 20.8544 24.9891 19.8632 24.3639 19.0567C23.7387 18.2503 22.8635 17.6743 21.8755 17.4192" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10.3616 12.6635C12.905 12.6635 14.9669 10.6017 14.9669 8.05827C14.9669 5.51485 12.905 3.453 10.3616 3.453C7.81819 3.453 5.75635 5.51485 5.75635 8.05827C5.75635 10.6017 7.81819 12.6635 10.3616 12.6635Z" fill="#223F7F" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

);


const InfraIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.8167 11.512H13.8283H13.8167Z" fill="#223F7F" />
    <path d="M13.8167 11.512H13.8283" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M13.8167 16.1184H13.8283H13.8167Z" fill="#223F7F" />
    <path d="M13.8167 16.1184H13.8283" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M13.8167 6.9071H13.8283H13.8167Z" fill="#223F7F" />
    <path d="M13.8167 6.9071H13.8283" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18.4221 11.512H18.4338H18.4221Z" fill="#223F7F" />
    <path d="M18.4221 11.512H18.4338" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18.4221 16.1184H18.4338H18.4221Z" fill="#223F7F" />
    <path d="M18.4221 16.1184H18.4338" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18.4221 6.9071H18.4338H18.4221Z" fill="#223F7F" />
    <path d="M18.4221 6.9071H18.4338" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9.21118 11.512H9.22285H9.21118Z" fill="#223F7F" />
    <path d="M9.21118 11.512H9.22285" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9.21118 16.1184H9.22285H9.21118Z" fill="#223F7F" />
    <path d="M9.21118 16.1184H9.22285" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9.21118 6.9071H9.22285H9.21118Z" fill="#223F7F" />
    <path d="M9.21118 6.9071H9.22285" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10.3621 25.328V21.8741C10.3621 21.5687 10.4834 21.2759 10.6993 21.06C10.9152 20.8441 11.208 20.7228 11.5134 20.7228H16.1186C16.424 20.7228 16.7168 20.8441 16.9327 21.06C17.1487 21.2759 17.27 21.5687 17.27 21.8741V25.328" fill="#223F7F" />
    <path d="M10.3621 25.328V21.8741C10.3621 21.5687 10.4834 21.2759 10.6993 21.06C10.9152 20.8441 11.208 20.7228 11.5134 20.7228H16.1186C16.424 20.7228 16.7168 20.8441 16.9327 21.06C17.1487 21.2759 17.27 21.5687 17.27 21.8741V25.328" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M20.7244 2.30261H6.90859C5.63688 2.30261 4.60596 3.33354 4.60596 4.60524V23.0263C4.60596 24.298 5.63688 25.3289 6.90859 25.3289H20.7244C21.9961 25.3289 23.027 24.298 23.027 23.0263V4.60524C23.027 3.33354 21.9961 2.30261 20.7244 2.30261Z" fill="#223F7F" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

);


const CareerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.4216 8.0578H25.3295V14.9657" fill="#223F7F" />
    <path d="M18.4216 8.0578H25.3295V14.9657" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M25.3278 8.0578L15.5416 17.844L9.78507 12.0874L2.30151 19.571" fill="#223F7F" />
    <path d="M25.3278 8.0578L15.5416 17.844L9.78507 12.0874L2.30151 19.571" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

);


const GlobalIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.8149 25.3289C20.1735 25.3289 25.3281 20.1742 25.3281 13.8157C25.3281 7.45717 20.1735 2.30255 13.8149 2.30255C7.45637 2.30255 2.30176 7.45717 2.30176 13.8157C2.30176 20.1742 7.45637 25.3289 13.8149 25.3289Z" fill="#223F7F" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M13.8152 2.30255C10.8589 5.40668 9.20996 9.52906 9.20996 13.8157C9.20996 18.1024 10.8589 22.2247 13.8152 25.3289C16.7715 22.2247 18.4205 18.1024 18.4205 13.8157C18.4205 9.52906 16.7715 5.40668 13.8152 2.30255Z" fill="#223F7F" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M2.30176 13.8151H25.3281H2.30176Z" fill="#223F7F" />
    <path d="M2.30176 13.8151H25.3281" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

);


const HolisticIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.3522 16.5934C24.1782 14.7674 25.3295 13.2385 25.3295 10.9358C25.3295 9.65464 24.9409 8.4036 24.2149 7.34793C23.489 6.29227 22.4599 5.48164 21.2635 5.02312C20.0672 4.5646 18.7599 4.47975 17.5144 4.77979C16.2688 5.07982 15.1436 5.75062 14.2873 6.70358C14.1595 6.82287 13.9914 6.88931 13.8166 6.88952C13.6418 6.88974 13.4735 6.82371 13.3455 6.70473C12.4892 5.75184 11.3641 5.08107 10.1186 4.781C8.8732 4.48094 7.56603 4.56569 6.36976 5.02407C5.17348 5.48245 4.14438 6.29289 3.41834 7.34837C2.6923 8.40386 2.30348 9.65474 2.30322 10.9358C2.30322 13.5838 4.0302 15.5411 5.75717 17.2681L12.1297 23.4414C12.3404 23.668 12.5947 23.8498 12.8772 23.976C13.1598 24.1021 13.4649 24.17 13.7743 24.1756C14.0837 24.1812 14.391 24.1243 14.678 24.0085C14.9649 23.8926 15.2256 23.7201 15.4443 23.5013C15.671 23.2743 15.8507 23.0048 15.9732 22.7084C16.0956 22.4119 16.1584 22.0941 16.158 21.7734C16.1576 21.4526 16.0939 21.135 15.9707 20.8389C15.8474 20.5427 15.667 20.2737 15.4397 20.0473C15.6621 20.2932 15.932 20.4913 16.2333 20.6296C16.5345 20.7679 16.8608 20.8435 17.1921 20.8518C17.5235 20.8601 17.8531 20.801 18.1609 20.678C18.4687 20.555 18.7483 20.3707 18.9827 20.1363C19.2171 19.902 19.4014 19.6224 19.5244 19.3146C19.6474 19.0067 19.7065 18.6771 19.6982 18.3458C19.6898 18.0144 19.6142 17.6882 19.4759 17.3869C19.3376 17.0857 19.1395 16.8157 18.8937 16.5934C19.1208 16.8205 19.3904 17.0007 19.6871 17.1236C19.9838 17.2465 20.3018 17.3097 20.623 17.3097C20.9441 17.3097 21.2621 17.2465 21.5588 17.1236C21.8556 17.0007 22.1252 16.8205 22.3522 16.5934C22.7839 16.1616 23.0264 15.576 23.0264 14.9654C23.0264 14.3549 22.7839 13.7693 22.3522 13.3375L20.1866 11.1707C19.9289 10.9129 19.623 10.7084 19.2863 10.5689C18.9496 10.4294 18.5887 10.3576 18.2242 10.3576C17.8597 10.3576 17.4988 10.4294 17.1621 10.5689C16.8254 10.7084 16.5194 10.9129 16.2618 11.1707L14.293 13.1394C13.8612 13.5711 13.2756 13.8136 12.6651 13.8136C12.0545 13.8136 11.4689 13.5711 11.0371 13.1394C10.6054 12.7076 10.3629 12.1221 10.3629 11.5115C10.3629 10.9009 10.6054 10.3153 11.0371 9.88352L14.2873 6.70358" fill="#223F7F" />
    <path d="M22.3522 16.5934C24.1782 14.7674 25.3295 13.2385 25.3295 10.9358C25.3295 9.65464 24.9409 8.4036 24.2149 7.34793C23.489 6.29227 22.4599 5.48164 21.2635 5.02312C20.0672 4.5646 18.7599 4.47975 17.5144 4.77979C16.2688 5.07982 15.1436 5.75062 14.2873 6.70358M22.3522 16.5934C22.1252 16.8205 21.8556 17.0007 21.5588 17.1236C21.2621 17.2465 20.9441 17.3097 20.623 17.3097C20.3018 17.3097 19.9838 17.2465 19.6871 17.1236C19.3904 17.0007 19.1208 16.8205 18.8937 16.5934C19.1395 16.8157 19.3376 17.0857 19.4759 17.3869C19.6142 17.6882 19.6898 18.0144 19.6982 18.3458C19.7065 18.6771 19.6474 19.0067 19.5244 19.3146C19.4014 19.6224 19.2171 19.902 18.9827 20.1363C18.7483 20.3707 18.4687 20.555 18.1609 20.678C17.8531 20.801 17.5235 20.8601 17.1921 20.8518C16.8608 20.8435 16.5345 20.7679 16.2333 20.6296C15.932 20.4913 15.6621 20.2932 15.4397 20.0473C15.667 20.2737 15.8474 20.5427 15.9707 20.8388C16.0939 21.135 16.1576 21.4526 16.158 21.7734C16.1584 22.0941 16.0956 22.4119 15.9732 22.7084C15.8507 23.0048 15.671 23.2743 15.4443 23.5013C15.2256 23.7201 14.9649 23.8926 14.678 24.0085C14.391 24.1243 14.0837 24.1812 13.7743 24.1756C13.4649 24.17 13.1598 24.1021 12.8772 23.976C12.5947 23.8498 12.3404 23.668 12.1297 23.4414L5.75717 17.2681C4.0302 15.5411 2.30322 13.5838 2.30322 10.9358C2.30348 9.65474 2.6923 8.40386 3.41834 7.34837C4.14438 6.29289 5.17348 5.48245 6.36976 5.02407C7.56603 4.56569 8.8732 4.48094 10.1186 4.781C11.3641 5.08107 12.4892 5.75184 13.3455 6.70473C13.4735 6.82371 13.6418 6.88974 13.8166 6.88952C13.9914 6.88931 14.1595 6.82287 14.2873 6.70358M22.3522 16.5934C22.7839 16.1616 23.0264 15.576 23.0264 14.9654C23.0264 14.3549 22.7839 13.7693 22.3522 13.3375L20.1866 11.1707C19.9289 10.9129 19.623 10.7084 19.2863 10.5689C18.9496 10.4294 18.5887 10.3576 18.2242 10.3576C17.8597 10.3576 17.4988 10.4294 17.1621 10.5689C16.8254 10.7084 16.5194 10.9129 16.2618 11.1707L14.293 13.1394C13.8612 13.5711 13.2756 13.8136 12.6651 13.8136C12.0545 13.8136 11.4689 13.5711 11.0371 13.1394C10.6054 12.7076 10.3629 12.1221 10.3629 11.5115C10.3629 10.9009 10.6054 10.3153 11.0371 9.88352L14.2873 6.70358" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

);



export default function WhyChooseAsram() {
  const features = [
    {
      icon: <AcademicIcon />,
      title: "Academic Excellence",
      description:
        "Rigorous curriculum aligned with international standards and best practices.",
    },
    {
      icon: <FacultyIcon />,
      title: "Expert Faculty",
      description:
        "Learn from experienced professionals and renowned medical practitioners.",
    },
    {
      icon: <InfraIcon />,
      title: "World-Class Infrastructure",
      description:
        "State-of-the-art facilities, laboratories, and teaching hospitals.",
    },
    {
      icon: <CareerIcon />,
      title: "Career Opportunities",
      description:
        "Strong placement record with excellent career support and guidance.",
    },
    {
      icon: <GlobalIcon />,
      title: "Global Recognition",
      description:
        "Degrees recognized internationally, opening doors to global opportunities.",
    },
    {
      icon: <HolisticIcon />,
      title: "Holistic Development",
      description:
        "Focus on overall personality development beyond academics.",
    },
  ];


  return (
    <PageSection
      bg={T.bg.programCard}
      paddingClass="py-[80px]"   // ⭐ Padding fully controlled here
    >

      {/* Heading */}
      <h2
        className={`
          
          ${T.font.weight.bold}
          text-[26px] leading-[34px]
          sm:text-[30px] sm:leading-[40px]
          md:text-[32px] md:leading-[44px]
          lg:text-[36px] lg:leading-[48px]
          mb-[20px] md:mb-[30px]
        `}
        style={{ color: T.color.text.secondary }}
      >
        Why Choose ASRAM
      </h2>

      {/* Cards Grid (unchanged layout) */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-x-[28px] gap-y-[32px]
          w-full
          mb-[40px]       /* space before CTA */
        "
      >
        {features.map((item, index) => (
          <InfoCard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            variant="whychoose"
          />
        ))}
      </div>

      {/* Centered CTA (Figma correct placement) */}
      <div className="flex justify-center w-full">
        <Button
          bg={T.color.secondary}
          color={T.color.background.white}
          font={T.font.family}
          weight={T.font.weight.bold}
          textSize="text-[15.79px]"
          leading="leading-[23.7px]"
          width="201.47px"
          height="47.37px"
          radius="md"
        >
          Apply Now
        </Button>
      </div>

    </PageSection>
  );
}
