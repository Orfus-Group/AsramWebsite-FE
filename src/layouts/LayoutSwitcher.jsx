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
  if (pathname.startsWith("/nursing")) return "nursing";
  if (pathname.startsWith("/academics")) return "academics";
  if (pathname.startsWith("/research")) return "research";
  if (pathname.startsWith("/news")) return "news";
  if (pathname.startsWith("/faculty")) return "faculty";
  if (pathname.startsWith("/community-health")) return "communityhealth";
  if (pathname.startsWith("/campus-life")) return "campuslife";
  if (pathname.startsWith("/about-asram")) return "aboutasram";
  return "main";
};

const headerMap = {
  main: AsramMainHeader,
  nursing: AcademicsHeader,
  academics: AcademicsHeader,
  research: AcademicsHeader,
  communityhealth: AcademicsHeader,
  news: AsramMainHeader,
  faculty: AcademicsHeader,
  campuslife: AsramMainHeader,
  aboutasram: AsramMainHeader,
};

const footerMap = {
  main: AsramFooter,
  nursing: NursingFooter,
  academics: NursingFooter,
  communityhealth: NursingFooter,
  research: NursingFooter,
  news: AsramFooter,
  faculty: AsramFooter,
  campuslife: AsramFooter,
  aboutasram: AsramFooter,
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
    "/nursing",
    "/research",
  ];

  const showPagination = allowedHeroPaginationPaths.includes(pathname);

  return (
    <>
      <Header />
      {heroData.isVisible && (
        <CommonHero
          title={heroData.title}
          bgImage={heroData.bgImage}
          showPagination={showPagination}
        >
          {heroData.children}
        </CommonHero>
      )}
      <main>
        <AnimatePresence mode="wait">
          <PageWrapper key={pathname}>
            <Outlet />
          </PageWrapper>
        </AnimatePresence>
      </main>
      <Footer />
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

