import React from "react";
import { Outlet } from "react-router-dom";
import NursingHeader from "../features/header/NursingHeader";

const NursingLayout = () => {
  return (
    <>
      <NursingHeader  />   
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NursingLayout;
