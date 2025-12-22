import React from "react";

// ICONS

import { T } from "@/theme";
import InfoCard from "@/features/common/cards/InfoCard";
import PageSection from "@/features/common/layout/PageContainer";
import WhyChooseSection from "./WhyChooseNursing";

export const HospitalIntegrationIcon = ({
  size = 28,
  color = "currentColor",
  strokeWidth = 2.30263,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M13.8159 8.0603V12.6656"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M16.1184 24.1785V20.7245C16.1184 20.1138 15.8758 19.5281 15.444 19.0963C15.0122 18.6645 14.4265 18.4219 13.8158 18.4219C13.2051 18.4219 12.6194 18.6645 12.1876 19.0963C11.7558 19.5281 11.5132 20.1138 11.5132 20.7245V24.1785"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M16.1184 10.3621H11.5132"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M20.7239 12.6639H23.0265C23.6372 12.6639 24.2229 12.9065 24.6547 13.3383C25.0866 13.7702 25.3292 14.3558 25.3292 14.9665V21.8744C25.3292 22.4851 25.0866 23.0708 24.6547 23.5026C24.2229 23.9345 23.6372 24.1771 23.0265 24.1771H4.60549C3.99479 24.1771 3.40911 23.9345 2.97728 23.5026C2.54545 23.0708 2.30286 22.4851 2.30286 21.8744V11.5126C2.30286 10.9019 2.54545 10.3162 2.97728 9.88439C3.40911 9.45256 3.99479 9.20996 4.60549 9.20996H6.90812"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <path
      d="M20.7241 24.1775V5.75649C20.7241 5.14579 20.4815 4.56011 20.0496 4.12828C19.6178 3.69646 19.0321 3.45386 18.4214 3.45386H9.2109C8.6002 3.45386 8.01452 3.69646 7.58269 4.12828C7.15086 4.56011 6.90826 5.14579 6.90826 5.75649V24.1775"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export const RobustInfraIcon = ({
  size = 28,
  color = "currentColor",
  strokeWidth = 2.30263,
  className = "",
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M11.5129 13.8164H16.1182" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.5129 9.20996H16.1182" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16.1182 24.1785V20.7245C16.1182 20.1138 15.8756 19.5281 15.4438 19.0963C15.0119 18.6645 14.4263 18.4219 13.8156 18.4219C13.2049 18.4219 12.6192 18.6645 12.1874 19.0963C11.7555 19.5281 11.5129 20.1138 11.5129 20.7245V24.1785" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.90788 11.5142H4.60524C3.99455 11.5142 3.40886 11.7568 2.97704 12.1887C2.54521 12.6205 2.30261 13.2062 2.30261 13.8169V21.8761C2.30261 22.4868 2.54521 23.0725 2.97704 23.5043C3.40886 23.9361 3.99455 24.1787 4.60524 24.1787H23.0263C23.637 24.1787 24.2227 23.9361 24.6545 23.5043C25.0863 23.0725 25.3289 22.4868 25.3289 21.8761V10.3629C25.3289 9.75224 25.0863 9.16655 24.6545 8.73473C24.2227 8.3029 23.637 8.0603 23.0263 8.0603H20.7237" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.90802 24.1775V5.75649C6.90802 5.14579 7.15062 4.56011 7.58245 4.12828C8.01427 3.69646 8.59996 3.45386 9.21065 3.45386H18.4212C19.0319 3.45386 19.6176 3.69646 20.0494 4.12828C20.4812 4.56011 20.7238 5.14579 20.7238 5.75649V24.1775" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


export const AffiliationsIcon = ({
  size = 28,
  color = "currentColor",
  strokeWidth = 2.30263,
  className = "",
}) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M17.8194 14.8401L19.5636 24.6562C19.5832 24.7718 19.567 24.8906 19.5172 24.9967C19.4673 25.1028 19.3863 25.1912 19.2849 25.2501C19.1835 25.3089 19.0666 25.3354 18.9498 25.3259C18.8329 25.3165 18.7217 25.2716 18.6311 25.1973L14.5094 22.1037C14.3104 21.9551 14.0687 21.8748 13.8203 21.8748C13.5719 21.8748 13.3302 21.9551 13.1312 22.1037L9.00262 25.1962C8.91203 25.2704 8.80098 25.3152 8.68427 25.3246C8.56757 25.334 8.45076 25.3077 8.34943 25.249C8.24811 25.1903 8.16708 25.1021 8.11716 24.9962C8.06725 24.8903 8.05081 24.7717 8.07005 24.6562L9.81314 14.8401" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.8162 16.1188C17.6313 16.1188 20.7241 13.026 20.7241 9.21087C20.7241 5.39575 17.6313 2.30298 13.8162 2.30298C10.0011 2.30298 6.9083 5.39575 6.9083 9.21087C6.9083 13.026 10.0011 16.1188 13.8162 16.1188Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);



export const PathwaysIcon = ({
  size = 28,
  color = "currentColor",
  strokeWidth = 2.30263,
  className = "",
}) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M18.4213 8.05933H25.3292V14.9672" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M25.3292 8.05933L15.543 17.8455L9.78641 12.0889L2.30286 19.5725" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


export const StudentCenteredIcon = ({
  size = 28,
  color = "currentColor",
  strokeWidth = 2.30263,
  className = "",
}) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M18.421 24.1772V21.8746C18.421 20.6532 17.9358 19.4818 17.0722 18.6181C16.2085 17.7545 15.0372 17.2693 13.8158 17.2693H6.90788C5.68648 17.2693 4.51512 17.7545 3.65146 18.6181C2.78781 19.4818 2.30261 20.6532 2.30261 21.8746V24.1772" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18.4211 3.60181C19.4086 3.85782 20.2832 4.43451 20.9076 5.24135C21.5319 6.04819 21.8707 7.03951 21.8707 8.0597C21.8707 9.0799 21.5319 10.0712 20.9076 10.8781C20.2832 11.6849 19.4086 12.2616 18.4211 12.5176" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M25.3291 24.1774V21.8748C25.3283 20.8544 24.9887 19.8632 24.3636 19.0567C23.7384 18.2503 22.8631 17.6743 21.8752 17.4192" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.3619 12.6646C12.9053 12.6646 14.9672 10.6028 14.9672 8.05936C14.9672 5.51595 12.9053 3.4541 10.3619 3.4541C7.8185 3.4541 5.75665 5.51595 5.75665 8.05936C5.75665 10.6028 7.8185 12.6646 10.3619 12.6646Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);



export const OrientationIcon = ({
  size = 28,
  color = "currentColor",
  strokeWidth = 2.30263,
  className = "",
}) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M13.2692 2.64176C13.3196 2.53983 13.3976 2.45402 13.4942 2.39403C13.5908 2.33404 13.7023 2.30225 13.816 2.30225C13.9298 2.30225 14.0413 2.33404 14.1379 2.39403C14.2345 2.45402 14.3125 2.53983 14.3629 2.64176L17.0225 8.02877C17.1977 8.38334 17.4563 8.69009 17.7761 8.92271C18.096 9.15533 18.4675 9.30686 18.8588 9.36429L24.8065 10.2347C24.9192 10.251 25.0251 10.2986 25.1122 10.3719C25.1993 10.4453 25.2641 10.5416 25.2993 10.6499C25.3345 10.7582 25.3387 10.8741 25.3115 10.9847C25.2842 11.0953 25.2265 11.196 25.145 11.2755L20.8437 15.464C20.56 15.7404 20.3478 16.0816 20.2252 16.4583C20.1027 16.8349 20.0735 17.2357 20.1402 17.6261L21.1557 23.5439C21.1756 23.6565 21.1634 23.7725 21.1206 23.8786C21.0777 23.9846 21.0059 24.0765 20.9134 24.1437C20.8208 24.211 20.7113 24.2508 20.5971 24.2587C20.483 24.2667 20.369 24.2424 20.268 24.1886L14.9512 21.3932C14.6009 21.2093 14.2112 21.1132 13.8155 21.1132C13.4198 21.1132 13.03 21.2093 12.6797 21.3932L7.36408 24.1886C7.26314 24.2421 7.14924 24.2661 7.03532 24.258C6.9214 24.2499 6.81204 24.21 6.71968 24.1428C6.62732 24.0757 6.55566 23.9839 6.51286 23.878C6.47006 23.7722 6.45783 23.6564 6.47756 23.5439L7.49187 17.6273C7.55887 17.2367 7.52985 16.8356 7.40729 16.4588C7.28474 16.0819 7.07234 15.7405 6.78842 15.464L2.4871 11.2766C2.40489 11.1972 2.34663 11.0963 2.31897 10.9854C2.2913 10.8745 2.29534 10.7581 2.33061 10.6494C2.36589 10.5407 2.43099 10.444 2.51851 10.3705C2.60602 10.297 2.71242 10.2495 2.82559 10.2335L8.77213 9.36429C9.16388 9.3073 9.5359 9.15597 9.8562 8.92333C10.1765 8.69068 10.4354 8.38368 10.6108 8.02877L13.2692 2.64176Z" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);



export default function KeyStrengthsSection() {
  const strengths = [
    {
      icon: (
        <HospitalIntegrationIcon
          size={28}
          color="#FFFFFF"
          strokeWidth={2.3}
        />
      ),
      title: "Hospital Integration",
      description:
        "Comprehensive multispecialty hospital providing real-time clinical exposure and practical training",
    },
    {
      icon: (
        <RobustInfraIcon
          size={28}
          color="#FFFFFF"
          strokeWidth={2.3}
        />
      ),
      title: "Robust Infrastructure",
      description:
        "State-of-the-art labs, simulation centers, library, hostels, and sports facilities",
    },
    {
      icon: (
        <AffiliationsIcon
          size={28}
          color="#FFFFFF"
          strokeWidth={2.3}
        />
      ), title: "Recognized Affiliations",
      description:
        "INC approval and NTRUHS affiliation lending credibility and national recognition",
    },
    {
      icon: (
        <PathwaysIcon
          size={28}
          color="#FFFFFF"
          strokeWidth={2.3}
        />
      ), title: "Clear Pathways",
      description:
        "Structured progression from undergraduate to postgraduate levels within the institution",
    },
    {
      icon: (
        <StudentCenteredIcon
          size={28}
          color="#FFFFFF"
          strokeWidth={2.3}
        />
      ), title: "Student-Centered Environment",
      description:
        "Strong mentoring, favorable faculty ratio, and personalized attention for holistic growth",
    },
    {
      icon: (
        <OrientationIcon
          size={28}
          color="#FFFFFF"
          strokeWidth={2.3}
        />
      ), title: "Practical Orientation",
      description:
        "Emphasis on hands-on training, simulation, and clinical rotations over theoretical learning alone",
    },
  ];


  return (
    <PageSection bg="bg-[#EEF2F7]" paddingClass="py-[40px] md:py-[80px] pb-[40px]">
      <div className="flex flex-col gap-[50px]">
        {/* TITLE */}
        <h2
          className={`
            ${T.font.family}
            ${T.font.weight.bold}
            text-[28px] md:text-[32px] lg:text-[36px]
            leading-[36px] md:leading-[44px] lg:leading-[48px]
          `}
          style={{ color: T.color.text.secondary }}
        >
          Key Strengths
        </h2>

        {/* GRID */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3
            gap-x-[28px] 
            gap-y-[24px] md:gap-y-[32px]
            w-full
          "
        >
          {strengths.map((item, index) => (
            <InfoCard
              key={index}
              variant="keystrength"
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </div>
      <WhyChooseSection />
    </PageSection>
  );
}
