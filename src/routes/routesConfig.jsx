import React from "react";
import AsramHomePage from "../pages/asram/AsramLatestHome";
import HomePage from "../pages/asram/AsramHome";
import NursingPage from "../pages/nursing/NursingPage";
import AcademicsPage from "../pages/academics/AcademicsPage";

const routesConfig = [
  {
    path: "/",
    label: "Home",
    element: <HomePage />,
    layout: "main",
  },
  {
    path: "/asram-home",
    label: "AsramHome",
    element: <AsramHomePage />,
    layout: "main",
  },
  {
    path: "/academics",
    label: "Academics",
    element: <AcademicsPage />,
    layout: "academics",
  },
  {
    path: "/nursing",
    label: "Nursing",
    element: <NursingPage />,
    layout: "nursing",
  },
];

export default routesConfig;
