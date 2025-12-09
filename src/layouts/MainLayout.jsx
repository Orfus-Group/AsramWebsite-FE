import React from "react";
import { Outlet } from "react-router-dom";
import AsramMainHeader from "../features/header/AsramMainHeader";

const MainLayout = () => {
  return (
    <>
      <AsramMainHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
