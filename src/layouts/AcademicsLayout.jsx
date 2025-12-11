import React from "react";
import { Outlet } from "react-router-dom";
import AcademicsHeader from "../features/header/AcademicsHeader";
import Footer from "../pages/nursing/NursingFooter";

const AcademicsLayout = () => (
  <>
    <AcademicsHeader />
    <Outlet />
    <Footer />
  </>
);

export default AcademicsLayout;
