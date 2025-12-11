import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import AsramMainHeader from "../features/header/AsramMainHeader";
import NursingHeader from "../features/header/NursingHeader";
import AcademicsHeader from "../features/header/AcademicsHeader";
import AsramFooter from "../pages/asram/AsramFooter";
import NursingFooter from "../pages/nursing/NursingFooter";

const layoutByPath = (pathname) => {
  if (pathname.startsWith("/nursing")) return "nursing";
  if (pathname.startsWith("/academics")) return "academics";
  return "main";
};

const headerMap = {
  main: AsramMainHeader,
  nursing: NursingHeader,
  academics: AcademicsHeader,
};

const footerMap = {
  main: AsramFooter,
  nursing: NursingFooter,
  academics: NursingFooter,
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

