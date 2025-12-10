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
  },
  {
    path: "/asram-home",
    label: "Home",
    element: <AsramHomePage />,
  },
  {
    path: "/academics",
    label: "Academics",
    element: <AcademicsPage />,
  },
  {
    path: "/nursing",
    label: "Nursing",
    element: <NursingPage />,
    nursing: true,
  },
];

export default routesConfig;
