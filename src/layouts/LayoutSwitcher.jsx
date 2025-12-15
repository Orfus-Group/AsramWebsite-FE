import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import AsramMainHeader from "@/features/header/AsramMainHeader";
import AcademicsHeader from "@/features/header/AcademicsHeader";
import AsramFooter from "@/pages/asram/AsramFooter";
import NursingFooter from "@/pages/nursing/NursingFooter";

const layoutByPath = (pathname) => {
  if (pathname.startsWith("/nursing")) return "nursing";
  if (pathname.startsWith("/academics")) return "academics";
  if (pathname.startsWith("/research")) return "research";
  if (pathname.startsWith("/news")) return "news";
  return "main";
};

const headerMap = {
  main: AsramMainHeader,
  nursing: AcademicsHeader,
  academics: AcademicsHeader,
  research: AcademicsHeader,
  news: AcademicsHeader, // Defaulting to Main Header for News
};

const footerMap = {
  main: AsramFooter,
  nursing: NursingFooter,
  academics: NursingFooter,
  research: NursingFooter,
  news: NursingFooter, // Defaulting to Main Footer for News
};

const LayoutSwitcher = () => {
  const { pathname } = useLocation();
  const layoutKey = layoutByPath(pathname);
  const Header = headerMap[layoutKey] || React.Fragment;
  const Footer = footerMap[layoutKey] || React.Fragment;

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LayoutSwitcher;

