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
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.8154 8.05859V24.177" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M3.45307 20.7229C3.14773 20.7229 2.85488 20.6016 2.63897 20.3857C2.42306 20.1697 2.30176 19.8769 2.30176 19.5715V4.60444C2.30176 4.29909 2.42306 4.00625 2.63897 3.79034C2.85488 3.57442 3.14773 3.45313 3.45307 3.45312H9.20965C10.431 3.45313 11.6024 3.93832 12.4661 4.80198C13.3297 5.66563 13.8149 6.837 13.8149 8.05839C13.8149 6.837 14.3001 5.66563 15.1638 4.80198C16.0274 3.93832 17.1988 3.45313 18.4202 3.45312H24.1768C24.4821 3.45313 24.7749 3.57442 24.9909 3.79034C25.2068 4.00625 25.3281 4.29909 25.3281 4.60444V19.5715C25.3281 19.8769 25.2068 20.1697 24.9909 20.3857C24.7749 20.6016 24.4821 20.7229 24.1768 20.7229H17.2689C16.3528 20.7229 15.4743 21.0868 14.8266 21.7345C14.1788 22.3822 13.8149 23.2608 13.8149 24.1768C13.8149 23.2608 13.451 22.3822 12.8033 21.7345C12.1555 21.0868 11.277 20.7229 10.361 20.7229H3.45307Z" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
  </svg>

);

const FacultyIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.4202 24.1774V21.8748C18.4202 20.6534 17.935 19.482 17.0713 18.6184C16.2077 17.7547 15.0363 17.2695 13.8149 17.2695H6.90702C5.68563 17.2695 4.51426 17.7547 3.65061 18.6184C2.78695 19.482 2.30176 20.6534 2.30176 21.8748V24.1774" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18.4209 3.59961C19.4084 3.85563 20.283 4.43231 20.9074 5.23916C21.5317 6.046 21.8705 7.03731 21.8705 8.0575C21.8705 9.0777 21.5317 10.069 20.9074 10.8759C20.283 11.6827 19.4084 12.2594 18.4209 12.5154" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M25.3289 24.1781V21.8755C25.3282 20.8551 24.9886 19.8639 24.3634 19.0575C23.7383 18.251 22.863 17.675 21.875 17.4199" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10.3621 12.6637C12.9055 12.6637 14.9674 10.6018 14.9674 8.05839C14.9674 5.51497 12.9055 3.45312 10.3621 3.45312C7.81868 3.45312 5.75684 5.51497 5.75684 8.05839C5.75684 10.6018 7.81868 12.6637 10.3621 12.6637Z" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
  </svg>


);


const InfraIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.8164 11.5117H13.8281" stroke="#223F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M13.8164 16.1191H13.8281" stroke="#223F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M13.8164 6.90625H13.8281" stroke="#223F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18.4219 11.5117H18.4335" stroke="#223F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18.4219 16.1191H18.4335" stroke="#223F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M18.4219 6.90625H18.4335" stroke="#223F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9.21094 11.5117H9.2226" stroke="#223F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9.21094 16.1191H9.2226" stroke="#223F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M9.21094 6.90625H9.2226" stroke="#223F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M10.3623 25.3279V21.874C10.3623 21.5686 10.4836 21.2758 10.6995 21.0599C10.9154 20.844 11.2083 20.7227 11.5136 20.7227H16.1189C16.4242 20.7227 16.7171 20.844 16.933 21.0599C17.1489 21.2758 17.2702 21.5686 17.2702 21.874V25.3279" stroke="#223F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M20.7239 2.30273H6.9081C5.63639 2.30273 4.60547 3.33366 4.60547 4.60537V23.0264C4.60547 24.2981 5.63639 25.329 6.9081 25.329H20.7239C21.9956 25.329 23.0265 24.2981 23.0265 23.0264V4.60537C23.0265 3.33366 21.9956 2.30273 20.7239 2.30273Z" stroke="#223F7F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>


);


const CareerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.4219 8.05859H25.3298V14.9665" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M25.3281 8.05859L15.5419 17.8448L9.78531 12.0882L2.30176 19.5718" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
  </svg>


);


const GlobalIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.8149 25.329C20.1735 25.329 25.3281 20.1744 25.3281 13.8159C25.3281 7.45735 20.1735 2.30273 13.8149 2.30273C7.45637 2.30273 2.30176 7.45735 2.30176 13.8159C2.30176 20.1744 7.45637 25.329 13.8149 25.329Z" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M13.8152 2.30273C10.8589 5.40686 9.20996 9.52924 9.20996 13.8159C9.20996 18.1025 10.8589 22.2249 13.8152 25.329C16.7715 22.2249 18.4205 18.1025 18.4205 13.8159C18.4205 9.52924 16.7715 5.40686 13.8152 2.30273Z" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M2.30176 13.8145H25.3281" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
  </svg>


);


const HolisticIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.3517 16.5932C24.1777 14.7672 25.329 13.2383 25.329 10.9356C25.329 9.65445 24.9404 8.40341 24.2144 7.34775C23.4885 6.29209 22.4594 5.48146 21.2631 5.02294C20.0667 4.56442 18.7595 4.47957 17.5139 4.7796C16.2683 5.07964 15.1431 5.75043 14.2868 6.7034M22.3517 16.5932C22.1247 16.8203 21.8551 17.0005 21.5584 17.1234C21.2616 17.2463 20.9436 17.3096 20.6225 17.3096C20.3013 17.3096 19.9833 17.2463 19.6866 17.1234C19.3899 17.0005 19.1203 16.8203 18.8932 16.5932C19.1391 16.8155 19.3372 17.0855 19.4754 17.3868C19.6137 17.688 19.6893 18.0142 19.6977 18.3456C19.706 18.677 19.6469 19.0066 19.5239 19.3144C19.4009 19.6222 19.2166 19.9018 18.9822 20.1362C18.7478 20.3706 18.4682 20.5548 18.1604 20.6778C17.8526 20.8008 17.523 20.86 17.1916 20.8516C16.8603 20.8433 16.534 20.7677 16.2328 20.6294C15.9316 20.4911 15.6616 20.293 15.4392 20.0472C15.6665 20.2735 15.8469 20.5425 15.9702 20.8387C16.0934 21.1348 16.1571 21.4524 16.1575 21.7732C16.1579 22.094 16.0951 22.4117 15.9727 22.7082C15.8502 23.0047 15.6705 23.2741 15.4439 23.5011C15.2251 23.7199 14.9644 23.8924 14.6775 24.0083C14.3906 24.1242 14.0832 24.181 13.7738 24.1754C13.4644 24.1698 13.1593 24.1019 12.8768 23.9758C12.5942 23.8496 12.3399 23.6678 12.1292 23.4412L5.75668 17.2679C4.02971 15.5409 2.30273 13.5837 2.30273 10.9356C2.30299 9.65455 2.69181 8.40367 3.41785 7.34819C4.14389 6.29271 5.173 5.48226 6.36927 5.02388C7.56554 4.56551 8.87271 4.48075 10.1182 4.78082C11.3636 5.08089 12.4887 5.75166 13.345 6.70455C13.473 6.82352 13.6414 6.88955 13.8161 6.88934C13.9909 6.88913 14.1591 6.82268 14.2868 6.7034M22.3517 16.5932C22.7834 16.1614 23.0259 15.5758 23.0259 14.9652C23.0259 14.3547 22.7834 13.7691 22.3517 13.3373L20.1861 11.1705C19.9285 10.9127 19.6225 10.7082 19.2858 10.5687C18.9491 10.4292 18.5882 10.3574 18.2237 10.3574C17.8592 10.3574 17.4983 10.4292 17.1616 10.5687C16.8249 10.7082 16.519 10.9127 16.2613 11.1705L14.2925 13.1393C13.8607 13.5709 13.2752 13.8134 12.6646 13.8134C12.054 13.8134 11.4684 13.5709 11.0366 13.1393C10.6049 12.7074 10.3624 12.1219 10.3624 11.5113C10.3624 10.9007 10.6049 10.3151 11.0366 9.88334L14.2868 6.7034" stroke="#223F7F" stroke-width="2.30263" stroke-linecap="round" stroke-linejoin="round" />
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
      bg={T.bg.sectionCard}
      paddingClass="py-[40px] md:py-[60px] lg:py-[80px]"   // ⭐ Padding fully controlled here
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
          weight={T.font.weight.medium}
          textSize="text-[18px]"
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
