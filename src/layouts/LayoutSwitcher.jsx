import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import AsramMainHeader from "@/features/header/AsramMainHeader";
import AcademicsHeader from "@/features/header/AcademicsHeader";
import AsramFooter from "@/pages/asram/AsramFooter";
import NursingFooter from "@/pages/nursing/secondaryfooter";
import { HeroProvider, useHero } from "@/context/HeroContext";
import CommonHero from "@/pages/asram/CommonHero";
import { AnimatePresence } from "framer-motion";
import PageWrapper from "@/components/common/PageWrapper";
import ScrollToTop from "@/components/common/ScrollToTop";

const layoutByPath = (pathname) => {
  if (pathname.startsWith("/medical")) return "medical";
  if (pathname.startsWith("/medical-research")) return "medical";
  if (pathname.startsWith("/medical-academics")) return "medical";
 if (pathname.startsWith("/health-science")) return "healthscience";
if (pathname.startsWith("/health-science-research")) return "healthscience";
if (pathname.startsWith("/health-science-academics")) return "healthscience";
  if (pathname.startsWith("/nursing-research")) return "research";
  if (pathname.startsWith("/nursing-academics")) return "academics";
  if (pathname.startsWith("/nursing")) return "nursing";
  if (pathname.startsWith("/news")) return "news";
  if (pathname.startsWith("/faculty")) return "faculty";
  if (pathname.startsWith("/community-health")) return "communityhealth";
  if (pathname.startsWith("/campus-life")) return "campuslife";
  if (pathname.startsWith("/about-asram")) return "aboutasram";
  if (pathname.startsWith("/asram-home")) return "asram-latest";
  if (pathname.startsWith("/careers")) return "careers";
  if (pathname.startsWith("/asram-alumni")) return "alumni";
  if (pathname.startsWith("/asram-alumni")) return "alumni";
  if (pathname.startsWith("/events")) return "events";
  if (pathname.startsWith("/donate")) return "donate";
  if (pathname === "/login") return "auth";
  if (pathname === "/signup") return "auth";
  if (pathname === "/forget-password") return "auth";
  return "main";
};

const headerMap = {
  main: AsramMainHeader,
  medical: AcademicsHeader,
healthscience: AcademicsHeader,
  nursing: AcademicsHeader,
  academics: AcademicsHeader,
  research: AcademicsHeader,
  communityhealth: AcademicsHeader,
  news: AsramMainHeader,
  faculty: AcademicsHeader,
  campuslife: AsramMainHeader,
  aboutasram: AsramMainHeader,
  careers: AsramMainHeader,
  alumni: AsramMainHeader,
  "asram-latest": AsramMainHeader,
  events: AsramMainHeader,
  donate: AsramMainHeader,
};

const footerMap = {
  main: AsramFooter,
  medical: NursingFooter,
  paramedical: NursingFooter,
  nursing: NursingFooter,
  academics: NursingFooter,
  communityhealth: NursingFooter,
  research: NursingFooter,
  news: AsramFooter,
  faculty: AsramFooter,
  campuslife: AsramFooter,
  aboutasram: AsramFooter,
  careers: AsramFooter,
  alumni: AsramFooter,
  "asram-latest": AsramFooter,
  events: AsramFooter,
  donate: AsramFooter,
};

const InnerLayout = () => {
  const { pathname } = useLocation();
  const { heroData } = useHero();
  const layoutKey = layoutByPath(pathname);
  const Header = headerMap[layoutKey] || React.Fragment;
  const Footer = footerMap[layoutKey] || React.Fragment;

  // Paths that should show hero pagination dots
  const allowedHeroPaginationPaths = [
    "/",
    "/campus-life",
    "/about-asram",
    "/healthcare",
    "/healthcare/departments/general-surgery",
    "/academics",
    "/medical",
    "/medical-research",
    "/medical-academics",
    "/health-science",
"/health-science-research",
"/health-science-academics",
    "/nursing",
    "/research",
  ];

  const showPagination = allowedHeroPaginationPaths.includes(pathname);

  return (
    <>
      <Header />
      {heroData.isVisible && heroData.path === pathname && (
        <CommonHero
          key={pathname}
          title={heroData.title}
          bgImage={heroData.bgImage}
          showPagination={showPagination}
          {...heroData}
        >
          {heroData.children}
        </CommonHero>
      )}
      <main className="flex-grow">
        <PageWrapper key={pathname}>
          <Outlet />
        </PageWrapper>
      </main>
      <Footer
        {...(layoutKey === "medical" || layoutKey === "healthscience" || layoutKey === "nursing"
          ? {
            bgClass: "bg-[#223F7F33]",
          }
          : {})}
      />
      <ScrollToTop />
    </>
  );
};

const LayoutSwitcher = () => {
  return (
    <HeroProvider>
      <InnerLayout />
    </HeroProvider>
  );
};

export default LayoutSwitcher;

