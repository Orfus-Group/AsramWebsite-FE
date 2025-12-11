import React from "react";
import { Outlet } from "react-router-dom";
import AsramMainHeader from "../features/header/AsramMainHeader";
import Footer from "../pages/nursing/NursingFooter";

const NursingLayout = () => (
  <>
    <AsramMainHeader />
    <Outlet />
    <Footer />
  </>
);

export default NursingLayout;
