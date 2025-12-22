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

const layoutByPath = (pathname) => {
  if (pathname.startsWith("/nursing")) return "nursing";
  if (pathname.startsWith("/academics")) return "academics";
  if (pathname.startsWith("/research")) return "research";
  if (pathname.startsWith("/news")) return "news";
  if (pathname.startsWith("/faculty")) return "faculty";
  if (pathname.startsWith("/community-health")) return "faculty";
  return "main";
};

const headerMap = {
  main: AsramMainHeader,
  nursing: AcademicsHeader,
  academics: AcademicsHeader,
  research: AcademicsHeader,
  news: AsramMainHeader,
  faculty: AcademicsHeader,
};

const footerMap = {
  main: AsramFooter,
  nursing: NursingFooter,
  academics: NursingFooter,
  research: NursingFooter,
  news: NursingFooter,
  faculty: NursingFooter,
};

const InnerLayout = () => {
  const { pathname } = useLocation();
  const { heroData } = useHero();
  const layoutKey = layoutByPath(pathname);
  const Header = headerMap[layoutKey] || React.Fragment;
  const Footer = footerMap[layoutKey] || React.Fragment;

  return (
    <>
      <Header />
      {heroData.isVisible && (
        <CommonHero title={heroData.title} bgImage={heroData.bgImage}>
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

