import React from "react";
import { Outlet } from "react-router-dom";
import AcademicsHeader from "../features/header/AcademicsHeader";

const AcademicsLayout = () => {
  return (
    <>
      <AcademicsHeader  />   
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default AcademicsLayout;
